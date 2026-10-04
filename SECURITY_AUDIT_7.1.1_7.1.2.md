# LESS Security Audit: WordPress 7.1.1 and 7.1.2 Vulnerabilities

This document audits each vulnerability fixed in WordPress 7.1.1 (11 fixes) and 7.1.2 (1 fix) against the LESS 7.1 codebase.

## Summary

| Vulnerability | CVE/GHSA | Applicable | Status |
|---------------|----------|------------|--------|
| wpautop() blockquote XSS | CVE-2026-93485 | ✅ Yes | Fixed |
| HTML API set_modifiable_text() comment boundary break | — | ✅ Yes | Fixed |
| Custom header XSS | — | ✅ Yes | Fixed |
| Forced theme install/preview (Click2Shell) | — | ✅ Yes | Fixed |
| Network plugin activation (multisite) | — | ✅ Yes | Fixed |
| REST templates path traversal | GHSA-w57f-v787-qhpf | ✅ Yes | Fixed |
| XML-RPC customize_changeset bypass | — | ❌ No | N/A |
| Contributor+ arbitrary post overwrite | — | ✅ Yes | Fixed |
| attachment_submitbox_metadata() parent title leak | — | ✅ Yes | Fixed |
| Draft/pending post slug disclosure | — | ✅ Yes | Fixed |
| Comment/note reparenting | — | ✅ Yes | Fixed |
| get_page_template() path traversal (7.1.2) | CVE-2026-87902 / GHSA-7hp8-65ch-5whp | ✅ Yes | Fixed |

---

## Detailed Analysis

### 1. CVE-2026-93485: wpautop() blockquote XSS
**Component:** `wp-includes/formatting.php` line 563  
**Vector:** The regex `[^>]*` in `preg_replace( '|<p><blockquote([^>]*)>|i', ... )` doesn't handle quoted attribute values. A `>` inside a quoted attribute (e.g., `cite="a\nb"` → `cite="a <!-- wpnl --> b"`) causes the regex to stop early, injecting `<p>` into the attribute.  
**Fix:** Changed regex to `(?:[^>"']|"[^"]*"|'[^']*')*` to properly handle quoted strings.  
**File:** `wp-includes/formatting.php`

### 2. HTML API set_modifiable_text() Comment Boundary Break
**Component:** `wp-includes/html-api/class-wp-html-tag-processor.php` line 3991  
**Vector:** The check `preg_match( '/--!?>/', $plaintext_content )` only detects `-->` or `--!>` but misses abrupt closing sequences like `--!` or `--` at end of content, which can break out of HTML comments in some browsers.  
**Fix:** Added additional check `preg_match( '/--!?$/', $plaintext_content )` to reject abrupt closing sequences.  
**File:** `wp-includes/html-api/class-wp-html-tag-processor.php`

### 3. Custom Header XSS
**Component:** `ls-admin/includes/class-custom-image-header.php` lines 569, 572  
**Vector:** `get_custom_header()` returns width/height from `header_image_data` theme mod without integer casting. `step_1()` echoes these directly into a style attribute: `'max-width:' . $custom_header->width . 'px;'`.  
**Fix:** Cast width/height to `(int)` before output.  
**File:** `ls-admin/includes/class-custom-image-header.php`

### 4. Forced Theme Install/Preview (Click2Shell)
**Component:** `ls-admin/js/theme.js` lines 1308, 2087  
**Vector:** Theme slug from URL (`theme-install.php?theme=:slug`) used directly in jQuery attribute selector `$('div[data-slug="' + slug + '"]')` without escaping. Special characters in slug break the selector syntax, allowing clickjacking the Install button.  
**Fix:** Use `$.escapeSelector()` (jQuery 3.0+) to escape slug before using in selector. Applied to both source and minified JS.  
**Files:** `ls-admin/js/theme.js`, `ls-admin/js/theme.min.js`

### 5. Network Plugin Activation (Multisite)
**Component:** `ls-admin/includes/plugin.php` function `activate_plugin()` line 644  
**Vector:** Site Administrator can network-activate a network-only plugin because `activate_plugin()` allows `$network_wide = true` when `is_network_only_plugin()` is true, without checking `manage_network_plugins` capability (Super Admin only).  
**Fix:** Added capability check `current_user_can( 'manage_network_plugins' )` before allowing network-wide activation.  
**File:** `ls-admin/includes/plugin.php`

### 6. REST Templates Path Traversal (GHSA-w57f-v787-qhpf)
**Component:** `wp-includes/block-template-utils.php` function `_get_block_template_file()` line 346  
**Vector:** Template slug from REST API (`/wp/v2/templates/{id}`) used directly in file path: `$theme_dir . '/' . $template_base_paths[ $template_type ] . '/' . $slug . '.html'`. No validation that resolved path stays within template directory.  
**Fix:** Added `realpath()` validation to ensure resolved file path is within the template directory.  
**File:** `wp-includes/block-template-utils.php`

### 7. XML-RPC customize_changeset Bypass — NOT APPLICABLE
**Component:** XML-RPC  
**Vector:** XML-RPC can publish `customize_changeset` posts bypassing `edit_css` capability check.  
**Reason N/A:** LESS permanently disables XML-RPC (see `ls-config.php` structural config: `'xmlrpc' => false`). The `xmlrpc.php` file and XML-RPC server class are not present in LESS codebase.  
**Files:** N/A

### 8. Contributor+ Arbitrary Post Overwrite
**Component:** `ls-admin/includes/post.php` function `_wp_translate_postdata()` line 28  
**Vector:** When creating a new post (`$update = false`), the function doesn't unset `ID` from POST data. `wp_insert_post()` then treats it as an update, bypassing `create_posts` capability check and allowing overwrite of arbitrary posts.  
**Fix:** Added `unset( $post_data['ID'] )` when `$update` is false.  
**File:** `ls-admin/includes/post.php`

### 9. attachment_submitbox_metadata() Private Parent Post Title Leak
**Component:** `ls-admin/includes/media.php` function `attachment_submitbox_metadata()` line 3371  
**Vector:** Displays parent post title (`$post_parent->post_title`) without checking if current user can read the parent post.  
**Fix:** Added `current_user_can( 'read_post', $post->post_parent )` check before displaying parent post info.  
**File:** `ls-admin/includes/media.php`

### 10. Draft/Pending Post Slug Disclosure
**Component:** `ls-admin/includes/ajax-actions.php` function `wp_ajax_sample_permalink()` line 2070  
**Vector:** AJAX handler returns sample permalink HTML without checking if user can read the post, allowing contributors to see draft/pending post slugs.  
**Fix:** Added `current_user_can( 'read_post', $post_id )` check before returning permalink.  
**File:** `ls-admin/includes/ajax-actions.php`

### 11. Comment/Note Reparenting
**Component:** `wp-includes/comment.php` function `wp_update_comment()` line 2937  
**Vector:** `wp_update_comment()` allows updating `comment_parent` without checking if user has permission to reparent the comment.  
**Fix:** Added check `current_user_can( 'edit_comment', $comment_id )` when `comment_parent` is being changed.  
**File:** `wp-includes/comment.php`

### 12. CVE-2026-87902: get_page_template() Path Traversal (7.1.2)
**Component:** `wp-includes/template.php` functions `get_page_template()` and `locate_template()`  
**Vector:** `get_page_template()` builds `page-{$pagename}.php` from URL-derived `pagename` query var. `locate_template()` resolves this against theme directories without verifying the result stays within them. If theme has a `page-*` directory (e.g., `page-templates`), path traversal via `..` can include arbitrary PHP files outside theme, leading to RCE under certain conditions (e.g., `pearcmd.php` with `register_argc_argv=On`).  
**Fix:** Added path validation in `locate_template()` using `realpath()` to ensure resolved template path is within allowed theme directories (`wp_stylesheet_path`, `wp_template_path`, `theme-compat`).  
**File:** `wp-includes/template.php`

---

## Testing

Each fix should be verified with regression tests. Test files should be created in `ls-tests/` directory.

### Recommended Test Coverage

1. **wpautop XSS**: Test comment with `<blockquote cite="a\nb">` containing `onfocus` payload
2. **HTML API comment break**: Test `set_modifiable_text()` with `--!` and `--` suffixes
3. **Custom header XSS**: Test theme mod with malicious width/height values
4. **Click2Shell**: Test theme installer URL with special chars in slug
5. **Network plugin**: Test network activation without Super Admin capability
6. **REST templates path traversal**: Test slug with `../` sequences
7. **Arbitrary post overwrite**: Test POST with `ID` parameter during post creation
8. **Attachment parent leak**: Test attachment edit screen with private parent post
9. **Slug disclosure**: Test `samplepermalink` AJAX without `read_post` cap
10. **Comment reparenting**: Test `wp_update_comment` with `comment_parent` change without edit cap
11. **Page template traversal**: Test `get_page_template()` with double-encoded `pagename` containing `..`

---

## Architecture Preservation Notes

- No MySQL/MariaDB abstractions introduced (LESS uses SQLite)
- No Gravatar, Pingback, Trackback, or XML-RPC functionality added
- Remote services remain optional
- No removed LESS functionality reintroduced
- No unrelated refactoring performed
- All fixes are minimal and targeted to the specific vulnerability