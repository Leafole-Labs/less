'use strict';

jQuery(function ($) {

    // Init CodeMirror for a given textarea id (e.g., 'content')
    function initCM(editorId) {
        const ta = document.getElementById(editorId);
        if (!ta || !window.wp || !wp.codeEditor) return null;

        const settings = wp.codeEditor.defaultSettings ? _.clone(wp.codeEditor.defaultSettings) : {};
        settings.codemirror = _.extend({}, settings.codemirror, {
            mode: 'gfm',                 // GitHub Flavored Markdown
            lineNumbers: false,
            lineWrapping: true,
            viewportMargin: Infinity,    // render all content (no inner scroll)
            styleActiveLine: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            indentUnit: 2,
            tabSize: 2,
            // Bind toggleComment only if addon is loaded
            extraKeys: (function () {
                const ok = window.CodeMirror && CodeMirror.commands && CodeMirror.commands.toggleComment;
                return ok ? {'Ctrl-/': 'toggleComment', 'Cmd-/': 'toggleComment'} : {};
            })()
        });

        const editor = wp.codeEditor.initialize(ta, settings);
        return editor.codemirror;
    }

    // When QuickTags is ready, toolbar exists and editorId is known
    $(document).on('quicktags-init', function (_e, qt) {
        ['del', 'ins', 'li', 'more', 'close'].forEach(id => {
            const btn = document.getElementById('qt_' + qt.id + '_' + id);
            if (btn) btn.remove();
        });

        const editorId = qt.id; // e.g., 'content' or custom id

        if (editorId !== 'content') return;

        // 1) Ensure CodeMirror is initialized
        let cm = wp.codeEditor?.editors?.[editorId]?.codemirror;
        if (!cm) cm = initCM(editorId);
        if (!cm) return;

        // 2) Give space for QuickTags toolbar
        const toolbar = document.getElementById('ed_toolbar');
        const cmEl = document.querySelector('#wp-' + editorId + '-editor-container .CodeMirror');
        if (cmEl && toolbar) cmEl.style.marginTop = toolbar.offsetHeight + 'px';

        // 3) Rebind QuickTags buttons to Markdown actions (operate via CodeMirror)
        function wrapSel(before, after = '') {
            const d = cm.getDoc(), sel = d.getSelection();
            d.replaceSelection(before + sel + after);
            cm.focus();
        }

        function toggleQuote() {
            const d = cm.getDoc(), from = d.getCursor('from'), to = d.getCursor('to');
            for (let l = from.line; l <= to.line; l++) {
                const txt = d.getLine(l);
                const next = txt.startsWith('> ') ? txt.slice(2) : '> ' + txt;
                d.replaceRange(next, {line: l, ch: 0}, {line: l, ch: txt.length});
            }
            cm.focus();
        }

        const btn = id => document.getElementById('qt_' + editorId + '_' + id);

        const strong = btn('strong');
        if (strong) {
            // prevent default WP <b>…</b>
            strong.removeAttribute('onclick');
            strong.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                wrapSel('**', '**');
            }, true);
        }

        const italic = btn('em');
        if (italic) {
            italic.removeAttribute('onclick');
            italic.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                wrapSel('*', '*');
            }, true);
        }

        const link = btn('link');
        if (link) {
            link.removeAttribute('onclick');
            link.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                wrapSel('[', '](https://)');
            }, true);
        }

        const block = btn('block'); // quote
        if (block) {
            block.removeAttribute('onclick');
            block.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                toggleQuote();
            }, true);
        }

        const code = btn('code');
        if (code) {
            code.removeAttribute('onclick');
            code.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                wrapSel('`', '`');
            }, true);
        }

        // Усередині quicktags-init
        const ul = btn('ul');
        if (ul) {
            ul.removeAttribute('onclick');
            ul.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                const d = cm.getDoc();
                const from = d.getCursor('from'), to = d.getCursor('to');
                for (let l = from.line; l <= to.line; l++) {
                    const txt = d.getLine(l);
                    // toggle: якщо вже починається з "- " → забрати
                    const newTxt = txt.startsWith('* ') ? txt.slice(2) : '* ' + txt;
                    d.replaceRange(newTxt, {line: l, ch: 0}, {line: l, ch: txt.length});
                }
                cm.focus();
            }, true);
        }

        const ol = btn('ol');
        if (ol) {
            ol.removeAttribute('onclick');
            ol.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                const d = cm.getDoc();
                const from = d.getCursor('from'), to = d.getCursor('to');
                let num = 1;
                for (let l = from.line; l <= to.line; l++) {
                    const txt = d.getLine(l);
                    const match = txt.match(/^(\d+)\.\s+/);
                    let newTxt;
                    if (match) {
                        newTxt = txt.replace(/^\d+\.\s+/, ''); // remove numbering
                    } else {
                        newTxt = (num++) + '. ' + txt;
                    }
                    d.replaceRange(newTxt, {line: l, ch: 0}, {line: l, ch: txt.length});
                }
                cm.focus();
            }, true);
        }

        const img = btn('img');
        if (img) {
            img.removeAttribute('onclick');
            img.addEventListener('click', ev => {
                ev.preventDefault();
                ev.stopImmediatePropagation();

                const d = cm.getDoc();
                const sel = d.getSelection();

                // якщо виділено текст → підставимо як alt
                const alt = sel || 'alt text';
                const url = 'https://example.com/image.jpg';

                d.replaceSelection('![' + alt + '](' + url + ')');
                cm.focus();
            }, true);
        }

        // не дублювати кнопку
        if (document.getElementById('qt_' + editorId + '_h')) {
            return;
        }

        // helper: per-line cycle heading level (0..5)
        function cycleHeading() {
            const d = cm.getDoc();
            const from = d.getCursor('from'), to = d.getCursor('to');

            for (let l = from.line; l <= to.line; l++) {
                const txt = d.getLine(l);

                // detect current level: 1..5 if "##### " present; else 0
                const m = txt.match(/^(#{1,5})\s+(.*)$/);
                const currLevel = m ? m[1].length : 0;
                const content = m ? m[2] : txt;

                // next: 0→1, 1→2, 2→3, 3→4, 4→5, 5→0
                const nextLevel = (currLevel === 5) ? 0 : (currLevel + 1);

                const nextText = nextLevel === 0 ? content : ('#'.repeat(nextLevel) + ' ' + content);

                d.replaceRange(nextText, {line: l, ch: 0}, {line: l, ch: txt.length});
            }
            cm.focus();
        }

        const hBtn = document.createElement('input');
        hBtn.type = 'button';
        hBtn.id = 'qt_' + editorId + '_h';
        hBtn.className = 'ed_button button button-small';
        hBtn.value = 'H';
        hBtn.ariaLabel = 'Heading cycle';

        hBtn.addEventListener('click', function (ev) {
            ev.preventDefault();
            ev.stopImmediatePropagation();
            cycleHeading();
        }, true);

        toolbar.appendChild(hBtn);

        if (!document.getElementById('qt_' + editorId + '_strike')) {
            const strike = document.createElement('input');
            strike.type = 'button';
            strike.id = 'qt_' + editorId + '_strike';
            strike.className = 'ed_button button button-small';
            strike.value = 'S';
            strike.ariaLabel = 'Strikethrough';
            strike.addEventListener('click', function (ev) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                wrapSel('~~', '~~');
            }, true);
            toolbar.appendChild(strike);
        }

        // --- Multi-line code block: ``` ---
        if (!document.getElementById('qt_' + editorId + '_codeblock')) {
            const b = document.createElement('input');
            b.type = 'button';
            b.id = 'qt_' + editorId + '_codeblock';
            b.className = 'ed_button button button-small';
            b.value = '```';
            b.ariaLabel = 'Code block';
            b.addEventListener('click', function (ev) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                const d = cm.getDoc();
                const sel = d.getSelection();
                const trimmed = sel.trim();
                const isFenced = /^```/.test(trimmed) && /```$/.test(trimmed);
                if (sel && isFenced) {
                    // strip fences
                    const un = trimmed.replace(/^```[a-z0-9-]*\n?/i, '').replace(/\n?```$/, '');
                    d.replaceSelection(un);
                } else {
                    const lang = ''; // set e.g. 'php', 'js' if needed
                    d.replaceSelection('```' + lang + '\n' + (sel || '') + '\n```');
                }
                cm.focus();
            }, true);
            toolbar.appendChild(b);
        }

// --- Horizontal rule: --- ---
        if (!document.getElementById('qt_' + editorId + '_hr')) {
            const b = document.createElement('input');
            b.type = 'button';
            b.id = 'qt_' + editorId + '_hr';
            b.className = 'ed_button button button-small';
            b.value = 'hr';
            b.ariaLabel = 'Horizontal rule';
            b.addEventListener('click', function (ev) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                const d = cm.getDoc();
                const pos = d.getCursor();
                d.replaceRange('\n\n---\n\n', pos);
                cm.focus();
            }, true);
            toolbar.appendChild(b);
        }

// --- Table template ---
        if (!document.getElementById('qt_' + editorId + '_table')) {
            const b = document.createElement('input');
            b.type = 'button';
            b.id = 'qt_' + editorId + '_table';
            b.className = 'ed_button button button-small';
            b.value = 'tbl';
            b.ariaLabel = 'Table';
            b.addEventListener('click', function (ev) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                const d = cm.getDoc();
                const tpl = [
                    '| Header 1 | Header 2 |',
                    '|----------|----------|',
                    '| Cell 1   | Cell 2   |'
                ].join('\n');
                const pos = d.getCursor();
                d.replaceRange('\n\n' + tpl + '\n\n', pos);
                cm.focus();
            }, true);
            toolbar.appendChild(b);
        }

        // EN: Keep WP word-count in sync with CodeMirror; also show char stats in title
        function hookCounters(editorId, cm){
            const ta   = document.getElementById(editorId);
            const cell = document.getElementById('wp-word-count');
            const span = cell ? cell.querySelector('.word-count') : null;

            // EN: word counter (Intl.Segmenter if available, else unicode regex)
            const wordCount = (s) => {
                if (window.Intl?.Segmenter) {
                    let n = 0;
                    for (const seg of new Intl.Segmenter('uk', {granularity:'word'}).segment(s)) {
                        if (seg.isWordLike) n++;
                    }
                    return n;
                }
                const m = s.match(/[\p{L}\p{N}]+/gu); // letters+digits (unicode)
                return m ? m.length : 0;
            };

            const update = () => {
                const val = cm.getValue();

                // sync textarea so autosave/revisions see it
                if (ta) ta.value = val;

                // update WP word-count cell
                if (span) span.textContent = String(wordCount(val));

                // optional: chars tooltip
                const chars = val.length;
                const charsNoWS = val.replace(/\s/g,'').length;
                if (cell) cell.title = `Chars: ${chars} (no ws: ${charsNoWS})`;
            };

            // EN: debounce to avoid excessive work while typing
            let t;
            const debounced = () => { clearTimeout(t); t = setTimeout(update, 120); };

            cm.off('change', debounced); // safety
            cm.on('change', debounced);
            update();
        }

        hookCounters(editorId, cm);


    });
});