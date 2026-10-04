<?php
/**
 * Comprehensive tests for template path traversal protection (CVE-2026-87902)
 * Compares LESS implementation against WordPress 7.1.2 _wp_is_template_path_allowed()
 */

error_reporting(E_ALL);

// ── Minimal WordPress stubs ──────────────────────────────────────────────
if (!function_exists('str_contains')) {
    function str_contains($haystack, $needle) { return strpos($haystack, $needle) !== false; }
}
if (!function_exists('str_starts_with')) {
    function str_starts_with($haystack, $needle) { return strpos($haystack, $needle) === 0; }
}
if (!function_exists('trailingslashit')) {
    function trailingslashit($value) { return rtrim($value, '/\\') . '/'; }
}
if (!function_exists('wp_normalize_path')) {
    function wp_normalize_path($path) { return str_replace('\\', '/', $path); }
}
if (!function_exists('is_child_theme')) {
    function is_child_theme() { return false; }
}

// Use mutable variables for get_stylesheet/get_template
$g_get_stylesheet = 'test-theme';
$g_get_template = 'test-theme';
function get_stylesheet() { global $g_get_stylesheet; return $g_get_stylesheet; }
function get_template() { global $g_get_template; return $g_get_template; }

// Define constants for the test's temp directory and real ABSPATH
define('ABSPATH', dirname(__DIR__) . '/');
define('WPINC', 'wp-includes');
define('DB_ENGINE', 'sqlite');

$base = sys_get_temp_dir() . '/less_template_test_' . uniqid();
@mkdir($base . '/wp-content/themes/test-theme', 0755, true);
@mkdir($base . '/wp-content/themes/test-theme/subtheme', 0755, true);
@mkdir($base . '/wp-content/themes/parent-theme', 0755, true);
@mkdir($base . '/wp-includes/theme-compat', 0755, true);

// Create test files
$test_files = array(
    'valid-page' => $base . '/wp-content/themes/test-theme/page-valid.php',
    'valid-child' => $base . '/wp-content/themes/test-theme/subtheme/page-child.php',
    'valid-parent' => $base . '/wp-content/themes/parent-theme/page-parent.php',
    'valid-compat' => ABSPATH . 'wp-includes/theme-compat/page-compat.php',
    'outside' => $base . '/wp-content/themes/test-theme/../../etc/passwd.php',
);

foreach ($test_files as $name => $path) {
    @mkdir(dirname($path), 0755, true);
    file_put_contents($path, '<?php echo "test"; ?>');
}

// Create symlink for traversal test
@symlink('/etc/passwd', $base . '/wp-content/themes/test-theme/symlink-passwd.php');

$GLOBALS['wp_stylesheet_path'] = $base . '/wp-content/themes/test-theme';
$GLOBALS['wp_template_path'] = $base . '/wp-content/themes/parent-theme';

// Helper to call LESS locate_template
function less_locate_template($template_name) {
    $result = locate_template(array($template_name));
    return $result !== '' ? $result : false;
}

// ── Load the LESS locate_template implementation ─────────────────────────
require_once ABSPATH . 'wp-includes/template.php';

// Check version
if (!defined('LESS_TEMPLATE_VERSION') || LESS_TEMPLATE_VERSION !== '7.1.2-security-fix-1') {
    echo "WARNING: Template version mismatch! Expected 7.1.2-security-fix-1, got " . (defined('LESS_TEMPLATE_VERSION') ? LESS_TEMPLATE_VERSION : 'undefined') . "\n";
}

// ── WordPress _wp_is_template_path_allowed() reference implementation ──────
function wp_is_template_path_allowed($path) {
    global $wp_stylesheet_path, $wp_template_path, $base;

    // Fast path: no .. in path
    if (0 === preg_match('#(?:^|/)\.\.[. ]*(?:/|$)#', wp_normalize_path($path))) {
        return true;
    }

    $real_path = realpath($path);
    if (false === $real_path) {
        return false;
    }

    $real_path = trailingslashit(wp_normalize_path($real_path));

    $directories = array(
        $wp_stylesheet_path,
        $wp_template_path,
        $base . '/wp-includes/theme-compat',
    );

    if (str_contains(get_stylesheet(), '/')) {
        $directories[] = dirname($wp_stylesheet_path);
    }

    if (str_contains(get_template(), '/')) {
        $directories[] = dirname($wp_template_path);
    }

    foreach ($directories as $directory) {
        $real_directory = realpath($directory);
        if (false === $real_directory) {
            continue;
        }

        if (str_starts_with($real_path, trailingslashit(wp_normalize_path($real_directory)))) {
            return true;
        }
    }

    return false;
}

// ── Setup test directories ────────────────────────────────────────────────
$base = sys_get_temp_dir() . '/less_template_test_' . uniqid();
@mkdir($base . '/wp-content/themes/test-theme/templates', 0755, true);
@mkdir($base . '/wp-content/themes/test-theme/subtheme/templates', 0755, true);
@mkdir($base . '/wp-content/themes/parent-theme/templates', 0755, true);
@mkdir($base . '/wp-includes/theme-compat', 0755, true);

// Create test files
$test_files = array(
    'valid-page' => $base . '/wp-content/themes/test-theme/page-valid.php',
    'valid-child' => $base . '/wp-content/themes/test-theme/subtheme/page-child.php',
    'valid-parent' => $base . '/wp-content/themes/parent-theme/page-parent.php',
    'valid-compat' => $base . '/wp-includes/theme-compat/page-compat.php',
    'outside' => $base . '/wp-content/themes/test-theme/../../etc/passwd.php',
);

foreach ($test_files as $name => $path) {
    @mkdir(dirname($path), 0755, true);
    file_put_contents($path, '<?php echo "test"; ?>');
}

// Create symlink for traversal test
// ── Test Helper ───────────────────────────────────────────────────────────
$pass = 0;
$fail = 0;

function t_ok($cond, $label) {
    global $pass, $fail;
    if ($cond) {
        ++$pass;
        echo "ok - $label\n";
    } else {
        ++$fail;
        echo "FAIL - $label\n";
    }
}

function t_same($wp_result, $less_result, $label) {
    global $pass, $fail;
    if ($wp_result === $less_result) {
        ++$pass;
        echo "ok - $label (WP=$wp_result, LESS=$less_result)\n";
    } else {
        ++$fail;
        echo "FAIL - $label (WP=$wp_result, LESS=$less_result)\n";
    }
}

// ── Test Cases ────────────────────────────────────────────────────────────
echo "=== Template Path Traversal Tests ===\n\n";

$tests = array(
    // Valid paths within theme
    array('valid within theme', 'page-valid.php', true, true, 'Valid page template in theme'),
    array('valid in compat', 'page-compat.php', true, true, 'Valid page in theme-compat'),

    // Traversal attempts (using paths that don't need file creation)
    array('outside traversal', 'page-../../etc/passwd.php', false, false, 'Path traversal outside theme'),
    array('double encoded', 'page-%252F..%252F..%252Fetc%252Fpasswd.php', false, false, 'Double-encoded traversal'),

    // Symlink
    array('symlink to /etc/passwd', 'symlink-passwd.php', false, false, 'Symlink outside theme'),
);

foreach ($tests as $test) {
    list($name, $template, $wp_expected, $less_expected, $desc) = $test;

    // Build full path for WP check
    $full_path = $base . '/wp-content/themes/test-theme/templates/' . $template;

    // WordPress check
    $wp_result = wp_is_template_path_allowed($full_path);

    // LESS check
    $less_result = less_locate_template($template) !== false;

    t_same($wp_expected, $wp_result, "WP: $desc");
    t_same($less_expected, $less_result, "LESS: $desc");
    t_same($wp_result, $less_result, "MATCH: $desc");
}

// Test with child theme
echo "\n--- Child Theme Tests ---\n";
$GLOBALS['wp_stylesheet_path'] = $base . '/wp-content/themes/test-theme/subtheme';
$GLOBALS['wp_template_path'] = $base . '/wp-content/themes/test-theme';

function is_child_theme() { return true; }

$tests_child = array(
    array('child theme valid', 'page-child.php', true, true, 'Valid page in child theme'),
    array('child theme fallback to parent', 'page-parent.php', true, true, 'Child theme fallback to parent'),
);

foreach ($tests_child as $test) {
    list($name, $template, $wp_expected, $less_expected, $desc) = $test;

    $full_path = $base . '/wp-content/themes/test-theme/subtheme/' . $template;

    $wp_result = wp_is_template_path_allowed($full_path);
    $less_result = less_locate_template($template) !== '';

    t_same($wp_expected, $wp_result, "WP: $desc");
    t_same($less_expected, $less_result, "LESS: $desc");
    t_same($wp_result, $less_result, "MATCH: $desc");
}

// Test theme in subdirectory (WP specific feature)
echo "\n--- Theme in Subdirectory (WP Feature) ---\n";
$GLOBALS['wp_stylesheet_path'] = $base . '/wp-content/themes/mytheme/subtheme';
$GLOBALS['wp_template_path'] = $base . '/wp-content/themes/mytheme';
$g_get_stylesheet = 'mytheme/subtheme';
$g_get_template = 'mytheme';

@mkdir($base . '/wp-content/themes/mytheme/subtheme', 0755, true);
@mkdir($base . '/wp-content/themes/mytheme', 0755, true);
file_put_contents($base . '/wp-content/themes/mytheme/subtheme/page-sub.php', '<?php ?>');
file_put_contents($base . '/wp-content/themes/mytheme/page-parent.php', '<?php ?>');

$subdir_tests = array(
    array('subtheme valid', 'page-sub.php', true, false, 'Valid page in subtheme (WP feature)'),
    array('subtheme fallback to parent', 'page-parent.php', true, false, 'Subtheme fallback to parent (WP feature)'),
);

foreach ($subdir_tests as $test) {
    list($name, $template, $wp_expected, $less_expected, $desc) = $test;

    $full_path = $base . '/wp-content/themes/mytheme/subtheme/' . $template;

    $wp_result = wp_is_template_path_allowed($full_path);
    $less_result = less_locate_template($template) !== '';

    t_same($wp_expected, $wp_result, "WP: $desc");
    t_same($less_expected, $less_result, "LESS: $desc");
    t_same($wp_result, $less_result, "MATCH: $desc - KNOWN DIFFERENCE (WP feature)");
}

// Test parent theme in subdirectory
echo "\n--- Parent Theme in Subdirectory (WP Feature) ---\n";
$GLOBALS['wp_stylesheet_path'] = $base . '/wp-content/themes/child';
$GLOBALS['wp_template_path'] = $base . '/wp-content/themes/parent/subtheme';
$g_get_stylesheet = 'child';
$g_get_template = 'parent/subtheme';

@mkdir($base . '/wp-content/themes/child', 0755, true);
@mkdir($base . '/wp-content/themes/parent/subtheme', 0755, true);
file_put_contents($base . '/wp-content/themes/child/page-child.php', '<?php ?>');
file_put_contents($base . '/wp-content/themes/parent/subtheme/page-parent.php', '<?php ?>');

$parent_subdir_tests = array(
    array('parent subtheme valid', 'page-parent.php', true, false, 'Valid page in parent subtheme (WP feature)'),
);

foreach ($parent_subdir_tests as $test) {
    list($name, $template, $wp_expected, $less_expected, $desc) = $test;

    $full_path = $base . '/wp-content/themes/parent/subtheme/' . $template;

    $wp_result = wp_is_template_path_allowed($full_path);
    $less_result = less_locate_template($template) !== '';

    t_same($wp_expected, $wp_result, "WP: $desc");
    t_same($less_expected, $less_result, "LESS: $desc");
    t_same($wp_result, $less_result, "MATCH: $desc - KNOWN DIFFERENCE (WP feature)");
}

// Test with non-existent file (should be rejected by realpath check in WP)
echo "\n--- Non-existent File Tests ---\n";
$g_file_exists = false;
$wp_result = wp_is_template_path_allowed($base . '/wp-content/themes/test-theme/nonexistent.php');
$less_result = less_locate_template('nonexistent.php') !== '';
t_same(false, $wp_result, 'WP: Non-existent file rejected');
t_same(false, $less_result, 'LESS: Non-existent file rejected');
t_same($wp_result, $less_result, 'MATCH: Non-existent file');

// Cleanup
function rrmdir($dir) {
    if (is_dir($dir)) {
        $objects = scandir($dir);
        foreach ($objects as $object) {
            if ($object != "." && $object != "..") {
                if (is_dir($dir. DIRECTORY_SEPARATOR .$object) && !is_link($dir. DIRECTORY_SEPARATOR .$object))
                    rrmdir($dir. DIRECTORY_SEPARATOR .$object);
                else
                    unlink($dir. DIRECTORY_SEPARATOR .$object);
            }
        }
        reset($objects);
        rmdir($dir);
    }
}
rrmdir($base);

echo "\n== $pass passed, $fail failed ==\n";
exit($fail > 0 ? 1 : 0);