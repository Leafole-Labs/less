'use strict';


const codeEditor = function () {
    const editorSettings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
    const codemirror_gen =
        {
            "indentUnit": 2,
            "indentWithTabs": true,
            "inputStyle": "contenteditable",
            "lineNumbers": true,
            "lineWrapping": true,
            "matchBrackets": true,
            "styleActiveLine": true,
            "continueComments": true,
            "extraKeys": {
                "Ctrl-Space": "autocomplete",
                "Ctrl-\/": "toggleComment",
                "Cmd-\/": "toggleComment",
                "Alt-F": "findPersistent",
                "Ctrl-F": "findPersistent",
                "Cmd-F": "findPersistent"
            },
            "direction": "ltr",
            "gutters": ["CodeMirror-lint-markers"],
            "lint": true,
            "autoCloseBrackets": true,
            "autoCloseTags": true,
            "matchTags": {
                "bothTags": true
            },
            "tabSize": 2,

        };

    const html_code = document.getElementById('html_code');
    let htmleditor;
    if (html_code) {
        let codemirror_el =
            {
                "tagname-lowercase": true,
                "attr-lowercase": true,
                "attr-value-double-quotes": false,
                "doctype-first": false,
                "tag-pair": true,
                "spec-char-escape": true,
                "id-unique": true,
                "src-not-empty": true,
                "attr-no-duplication": true,
                "alt-require": true,
                "space-tab-mixed-disabled": "tab",
                "attr-unsafe-chars": true,
                "mode": 'htmlmixed',

            };

        editorSettings.codemirror = _.extend({}, editorSettings.codemirror, codemirror_gen, codemirror_el,);

        htmleditor = wp.codeEditor.initialize(html_code, editorSettings);


        const htmlNavigationMenu = document.getElementById("htmlNavigationMenu");

        htmleditor.codemirror.eachLine(function (line) {
            const text = line.text;
            if (text.startsWith("<!-- NAV:")) {
                let navItem = document.createElement("li");
                let navLink = document.createElement("a");
                navLink.href = "#";
                // navLink.innerText = text.replace("<!-- NAV:", "").trim();
                navLink.innerText = text.replace(/<!-- NAV:|-->|<!-- NAV: -->/g, '').trim();
                navLink.addEventListener("click", function (e) {
                    e.preventDefault();

                    // Remove existing highlights from the gutter
                    htmleditor.codemirror.eachLine(function (l) {
                        htmleditor.codemirror.removeLineClass(l, 'gutter', 'highlighted-gutter');
                    });

                    // Set cursor and scroll to line
                    htmleditor.codemirror.setCursor(line.lineNo());
                    let heightOfLine = htmleditor.codemirror.defaultTextHeight();
                    let verticalPos = line.lineNo() * heightOfLine;
                    htmleditor.codemirror.scrollTo(null, verticalPos);

                    // Highlight the line number in the gutter
                    htmleditor.codemirror.addLineClass(line.lineNo(), 'gutter', 'highlighted-gutter');

                    htmleditor.codemirror.focus();
                });
                navItem.appendChild(navLink);
                htmlNavigationMenu.appendChild(navItem);
            }
        });
    }

    const css_code = document.getElementById('css_code');
    let csseditor;
    if (css_code) {
        let codemirror_el = {"mode": 'css',};
        editorSettings.codemirror = _.extend({}, editorSettings.codemirror, codemirror_gen, codemirror_el,);
        // const tab = document.querySelector('[data-content="css-code"]');
        // tab.classList.add('tab-content-active');
        csseditor = wp.codeEditor.initialize(css_code, editorSettings);
        // tab.classList.remove('tab-content-active');

        const cssNavigationMenu = document.getElementById("cssNavigationMenu");

        csseditor.codemirror.eachLine(function (line) {
            const text = line.text;
            if (text.startsWith("/* NAV:")) {
                let navItem = document.createElement("li");
                let navLink = document.createElement("a");
                navLink.href = "#";
                // navLink.innerText = text.replace("// NAV:", "").trim();
                navLink.innerText = text.replace(/\/\* NAV:|\*\/|\/\* NAV: \*\//g, '').trim();
                navLink.addEventListener("click", function (e) {
                    e.preventDefault();

                    // Remove existing highlights from the gutter
                    csseditor.codemirror.eachLine(function (l) {
                        csseditor.codemirror.removeLineClass(l, 'gutter', 'highlighted-gutter');
                    });

                    // Set cursor and scroll to line
                    csseditor.codemirror.setCursor(line.lineNo());
                    let heightOfLine = csseditor.codemirror.defaultTextHeight();
                    let verticalPos = line.lineNo() * heightOfLine;
                    csseditor.codemirror.scrollTo(null, verticalPos);

                    // Highlight the line number in the gutter
                    csseditor.codemirror.addLineClass(line.lineNo(), 'gutter', 'highlighted-gutter');

                    csseditor.codemirror.focus();
                });
                navItem.appendChild(navLink);
                cssNavigationMenu.appendChild(navItem);
            }
        });
    }

    const js_code = document.getElementById('js_code');
    let jseditor;
    if (js_code) {
        let codemirror_el = {
            "boss": true,
            "curly": true,
            "eqeqeq": true,
            "eqnull": true,
            "es3": true,
            "expr": true,
            "immed": true,
            "noarg": true,
            "nonbsp": true,
            "onevar": true,
            "quotmark": "single",
            "trailing": true,
            "undef": true,
            "unused": true,
            "browser": true,
            "globals": {
                "_": false,
                "Backbone": false,
                "jQuery": true,
                "JSON": false,
                "wp": false
            },
            "mode": 'javascript',
        };
        editorSettings.codemirror = _.extend({}, editorSettings.codemirror, codemirror_gen, codemirror_el,);
        // const tab = document.querySelector('[data-content="js-code"]');
        // tab.classList.add('tab-content-active');
        jseditor = wp.codeEditor.initialize(js_code, editorSettings);
        // tab.classList.remove('tab-content-active');

        const jsNavigationMenu = document.getElementById("jsNavigationMenu");

        jseditor.codemirror.eachLine(function (line) {
            const text = line.text;
            if (text.startsWith("// NAV:")) {
                let navItem = document.createElement("li");
                let navLink = document.createElement("a");
                navLink.href = "#";
                navLink.innerText = text.replace("// NAV:", "").trim();
                navLink.addEventListener("click", function (e) {
                    e.preventDefault();

                    // Remove existing highlights from the gutter
                    jseditor.codemirror.eachLine(function (l) {
                        jseditor.codemirror.removeLineClass(l, 'gutter', 'highlighted-gutter');
                    });

                    // Set cursor and scroll to line
                    jseditor.codemirror.setCursor(line.lineNo());
                    let heightOfLine = jseditor.codemirror.defaultTextHeight();
                    let verticalPos = line.lineNo() * heightOfLine;
                    jseditor.codemirror.scrollTo(null, verticalPos);

                    // Highlight the line number in the gutter
                    jseditor.codemirror.addLineClass(line.lineNo(), 'gutter', 'highlighted-gutter');

                    jseditor.codemirror.focus();
                });
                navItem.appendChild(navLink);
                jsNavigationMenu.appendChild(navItem);
            }
        });
    }

    const php_code = document.getElementById('php_code');
    if (php_code) {
        let codemirror_el = {
            firstLineNumber: 4,
            mode: {
                name: 'php',
                startOpen: true
            }
        };
        editorSettings.codemirror = _.extend({}, editorSettings.codemirror, codemirror_gen, codemirror_el,);
        // const tab = document.querySelector('[data-content="php-code"]');
        // tab.classList.add('tab-content-active');
        const phpeditor = wp.codeEditor.initialize(php_code, editorSettings);
        // tab.classList.remove('tab-content-active');

        const phpNavigationMenu = document.getElementById("phpNavigationMenu");

        phpeditor.codemirror.eachLine(function (line) {
            const text = line.text;
            if (text.startsWith("// NAV:")) {
                let navItem = document.createElement("li");
                let navLink = document.createElement("a");
                navLink.href = "#";
                navLink.innerText = text.replace("// NAV:", "").trim();
                navLink.addEventListener("click", function (e) {
                    e.preventDefault();

                    // Remove existing highlights from the gutter
                    phpeditor.codemirror.eachLine(function (l) {
                        phpeditor.codemirror.removeLineClass(l, 'gutter', 'highlighted-gutter');
                    });

                    // Set cursor and scroll to line
                    phpeditor.codemirror.setCursor(line.lineNo());
                    let heightOfLine = phpeditor.codemirror.defaultTextHeight();
                    let verticalPos = line.lineNo() * heightOfLine;
                    phpeditor.codemirror.scrollTo(null, verticalPos);

                    // Highlight the line number in the gutter
                    phpeditor.codemirror.addLineClass(line.lineNo(), 'gutter', 'highlighted-gutter');

                    phpeditor.codemirror.focus();
                });
                navItem.appendChild(navLink);
                phpNavigationMenu.appendChild(navItem);
            }
        });
    }

    const global_php = document.getElementById('wpcoder-global-php');
    if (global_php) {
        let codemirror_el = {
            mode: {
                name: 'php',
                startOpen: true,

            },
            firstLineNumber: 4,
        };
        editorSettings.codemirror = _.extend({}, editorSettings.codemirror, codemirror_gen, codemirror_el,);
        const editor = wp.codeEditor.initialize(global_php, editorSettings);

        const navigationMenu = document.getElementById("phpNavigationMenu");

        editor.codemirror.eachLine(function (line) {
            const text = line.text;
            if (text.startsWith("// NAV:")) {
                let navItem = document.createElement("li");
                let navLink = document.createElement("a");
                navLink.href = "#";
                navLink.innerText = text.replace("// NAV:", "").trim();
                navLink.addEventListener("click", function (e) {
                    e.preventDefault();

                    // Remove existing highlights from the gutter
                    editor.codemirror.eachLine(function (l) {
                        editor.codemirror.removeLineClass(l, 'gutter', 'highlighted-gutter');
                    });

                    // Set cursor and scroll to line
                    editor.codemirror.setCursor(line.lineNo());
                    let heightOfLine = editor.codemirror.defaultTextHeight();
                    let verticalPos = line.lineNo() * heightOfLine;
                    editor.codemirror.scrollTo(null, verticalPos);

                    // Highlight the line number in the gutter
                    editor.codemirror.addLineClass(line.lineNo(), 'gutter', 'highlighted-gutter');

                    editor.codemirror.focus();
                });
                navItem.appendChild(navLink);
                navigationMenu.appendChild(navItem);
            }
        });


    }


    // Live Preview
    let timeout;
    const previewCheckbox = document.getElementById('checkbox_preview');

    function initPreviewListener() {
        document.querySelectorAll('.wowp-settings__page-content').forEach(editor => {
            editor.addEventListener('keydown', () => {
                clearTimeout(timeout);
                if (previewCheckbox.checked) {
                    timeout = setTimeout(updatePreview, 500);
                }
            });
        });
    }


    if (previewCheckbox) {
        updatePreview();

        previewCheckbox.addEventListener('change', () => {
            if (previewCheckbox.checked) {
                updatePreview();
            }
        });
    }

    initPreviewListener();

    function updatePreview() {
        const html = htmleditor.codemirror.getValue();
        const css = csseditor.codemirror.getValue();

        let styleLinks = [];

        document.querySelectorAll('input[id*="include_file_"]').forEach(input => {
            const url = input.value.trim();

          if (url.includes('.css')) {
                styleLinks.push(`<link rel="stylesheet" href="${url}">`);
            }
        });

        const iframe = document.getElementById('wowp-preview');
        iframe.setAttribute("srcdoc", `
        <!DOCTYPE html>
        <html>
          <head>
            <style>body{margin:0;padding:0;box-sizing:border-box;}</style>
             ${styleLinks.join('\n')}
            <style>${css}</style>
          </head>
          <body>${html}</body>
        </html>
    `);
    }

    jQuery('.wowp-preview__dot.is-toggle').on('click', function () {
        jQuery(this).toggleClass('is-active');
        jQuery(this).find('.dashicons').toggleClass('is-hidden');
        jQuery('.wowp-preview__iframe #wowp-preview').toggleClass('is-hidden');
        jQuery('.wowp-preview__iframe').toggleClass('is-toggled');
    });

    jQuery('.wowp-preview__dot.is-reset').on('click', function () {
        jQuery('.wowp-preview__iframe').removeAttr('style');
        updatePreview();
    });

    const iframe = jQuery('.wowp-preview__iframe');
    const $size = iframe.find('.wowp-preview__size');
    // let timeout;

    if (iframe.length && $size.length) {
        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                const width = Math.round(entry.contentRect.width);
                const height = Math.round(entry.contentRect.height) - 50;

                $size.text(`${width}px × ${height}px`).fadeIn(150);

                clearTimeout(timeout);
                // timeout = setTimeout(() => $size.fadeOut(300), 3000);
            }
        });

        observer.observe(iframe[0]);
    }

}


const changeTemplate = function () {

    const template = document.getElementById('template');
    if (!template) {
        return false;
    }


    template.addEventListener('change', function (event) {

        const parent = document.getElementById('wpcoder-template');
        let type = template.value;
        type = default_custom_post(type);
        const elements = parent.querySelectorAll('.wowp-field');

        switch (type) {
            case 'post_all':
            case 'page_all':
                elements[1].classList.add('is-hidden');
                elements[2].classList.add('is-hidden');
                elements[3].classList.add('is-hidden');
                break;
            case 'post_selected':
            case 'post_in_category':
            case 'page_selected':
            case 'archive_category':
            case 'archive_tag':
            case 'archive_author':
                elements[1].classList.remove('is-hidden');
                elements[2].classList.remove('is-hidden');
                elements[3].classList.add('is-hidden');
                break;
            case 'page_type':
                elements[1].classList.remove('is-hidden');
                elements[2].classList.add('is-hidden');
                elements[3].classList.remove('is-hidden');
                break;
            default:
                elements[1].classList.add('is-hidden');
                elements[2].classList.add('is-hidden');
                elements[3].classList.add('is-hidden');
                break;

        }

    });

    function default_custom_post(el) {
        if (el.includes('custom_post_selected')) {
            return 'post_selected';
        }
        if (el.includes('custom_post_tax')) {
            return 'post_category';
        }
        if (el.includes('custom_post_all')) {
            return 'post_all';
        }
        return el;
    }

}


const feature = function () {
    const texts = document.querySelectorAll('.w_card-description');

    if (!texts) {
        return false;
    }
    texts.forEach((el) => {
        el.addEventListener('click', () => {
            el.classList.toggle('is-open');
        })
    })

}

document.addEventListener('DOMContentLoaded', function () {

    new codeEditor;
    new changeTemplate;
    new feature;

})