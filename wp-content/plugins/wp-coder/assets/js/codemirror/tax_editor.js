'use strict';

jQuery(function ($) {

    (function() {
        const targets = ['#description', '#tag-description']; // edit term + add term
        targets.forEach(function(sel){
            const el = document.querySelector(sel);
            if (!el) return;

            // Базові налаштування CodeMirror від WP
            try {
                const settings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
                // Увімкнути markdown-режим (файли markdown.js/gfm.js вже завантажені)
                settings.codemirror = Object.assign({}, settings.codemirror || {}, {
                    mode: 'gfm',        // або 'markdown'
                    lineNumbers: false,
                    lineWrapping: true,
                    viewportMargin: Infinity,    // render all content (no inner scroll)
                    styleActiveLine: true,
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    indentUnit: 2,
                    tabSize: 2,
                });
                wp.codeEditor.initialize(el, settings);
            } catch(e) {
                // fallback: нічого страшного, просто лишається textarea
                console.warn('WPCoder: failed to init markdown editor for taxonomy description', e);
            }
        });
    })();


});