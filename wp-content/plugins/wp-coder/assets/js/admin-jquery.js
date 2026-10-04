'use strict';

jQuery(document).ready(function ($) {


    // All checkboxes
    $('#wowp-settings').on('click', 'input:checkbox', function () {
        checkboxchecked(this);
    });

    function checkboxchecked(el) {
        if ($(el).prop('checked')) {
            $(el).next('input[type="hidden"]').val('1');
        } else {
            $(el).next('input[type="hidden"]').val('');
        }
    }

    // Preview
    $('[data-option="preview"] input[type="checkbox"]').each(show_preview).on('click', show_preview);

    function show_preview() {
        const preview = $('.wowp-preview');
        if ($(this).is(':checked')) {
            $(preview).removeClass('is-hidden');
        } else {
            $(preview).addClass('is-hidden');
        }
    }

    // Browsers options
    $('[data-option="hide_browsers"] input[type="checkbox"]').each(hide_browsers);
    $('[data-option="hide_browsers"] input[type="checkbox"]').on('click', hide_browsers);

    function hide_browsers() {
        const browsers = $(this).parents('.wowp-field').siblings('.wowp-field');
        if ($(this).is(':checked')) {
            $(browsers).removeClass('is-hidden');
        } else {
            $(browsers).addClass('is-hidden');
        }
    }

    // Languages options
    $('[data-option="depending_language"] input[type="checkbox"]').each(languageOn);
    $('[data-option="depending_language"] input[type="checkbox"]').on('click', languageOn);

    function languageOn() {
        const languages = $(this).parents('.wowp-field').siblings('.wowp-field');
        if ($(this).is(':checked')) {
            $(languages).removeClass('is-hidden');
        } else {
            $(languages).addClass('is-hidden');
        }
    }

    // Users
    $('[name="param[item_user]"]').each(usersRule);
    $('[name="param[item_user]"]').on('change', usersRule);

    function usersRule() {
        const user = $(this).val();
        const parent = $(this).closest('fieldset');
        const boxRoles = $(parent).find('.wowp-users-roles');
        $(boxRoles).addClass('is-hidden');
        if (user === '2') {
            $(boxRoles).removeClass('is-hidden');
        }
    }

    $('.wowp-users-roles .wowp-field:first input:first').each(checkAllRoles);
    $('.wowp-users-roles .wowp-field:first input:first').on('change', checkAllRoles);

    function checkAllRoles() {
        const checkboxes = $('.wowp-users-roles input[type="checkbox"]');
        if ($(this).is(':checked')) {
            $(checkboxes).prop('checked', true);
        }
    }

    // Schedule options
    $('.wowp-dates input[type="checkbox"]').each(datesSchedule);
    $('#schedule').on('click', '.wowp-dates input', datesSchedule);

    function datesSchedule() {
        const parent = $(this).closest('.wowp-fields__group');
        if ($(this).is(':checked')) {
            $(parent).find('.wowp-date-input').removeClass('is-hidden');
        } else {
            $(parent).find('.wowp-date-input').addClass('is-hidden');
        }
    }

    $('#add-schedule').on('click', function (e) {
        e.preventDefault();

        const temlate = $('#clone-schedule').clone().html();

        $(temlate).insertBefore('#schedule .wowp-btn-actions');
        $('.wowp-dates input[type="checkbox"]').each(datesSchedule);
    });

    $('#schedule').on('click', '.dashicons-trash', function () {
        const parent = $(this).closest('.wowp-fields__group');
        $(parent).remove();
    });

    // Display rules
    $('#add_display').on('click', function (e) {
        e.preventDefault();

        const temlate = $('#template-display').clone().html();

        $(temlate).insertBefore('#display-rules .btn-add-display');
        $('#display-rules .display-option select').each(displayRules);
    });

    $('#display-rules').on('click', '.dashicons-trash', function () {
        const userConfirmed = confirm("Are you sure you want to remove?");
        if (userConfirmed) {
            const parent = $(this).closest('.wowp-fields__group');
            $(parent).remove();
        }

    });

    $('#display-rules .display-option select').each(displayRules);
    $('#display-rules').on('change', '.display-option select', displayRules);

    function displayRules() {
        let type = $(this).val();
        const parent = $(this).closest('.wowp-fields__group');
        $(parent).find('.display-operator, .display-ids, .display-pages').addClass('is-hidden');
        if (type.indexOf('custom_post_selected') !== -1) {
            type = 'post_selected';
        }
        if (type.indexOf('custom_post_tax') !== -1) {
            type = 'post_category';
        }
        switch (type) {
            case 'post_selected':
            case 'post_category':
            case 'page_selected':
                $(parent).find('.display-operator, .display-ids').removeClass('is-hidden');
                break;
            case 'page_type':
                $(parent).find('.display-operator, .display-pages').removeClass('is-hidden');
                break;
        }

    }

    // Includes Assets files
    $('#add-include').on('click', function (e) {
        e.preventDefault();

        const temlate = $('#clone-includes').clone().html();

        $(temlate).insertBefore('#includes-files .btn-add-display');
        $('#includes-files .display-option select').each(includeFiles);
    });

    $('#includes-files').on('click', '.dashicons-trash', function () {
        const userConfirmed = confirm("Are you sure you want to remove?");
        if (userConfirmed) {
            const parent = $(this).closest('.wowp-fields__group');
            $(parent).remove();
        }
    });

    $('#includes-files .display-option select').each(includeFiles);
    $('#includes-files').on('change', '.display-option select', includeFiles);

    function includeFiles() {
        let type = $(this).val();
        const parent = $(this).closest('.wowp-fields__group');
        const js = $(parent).find('.js-attr');
        const css =  $(parent).find('.css-only-preview');
        $(js).add(css).addClass('is-hidden');
        switch (type) {
            case 'css':
                $(css).removeClass('is-hidden');
                break;
            case 'js':
                $(js).removeClass('is-hidden');
                break;
        }

    }

    // Dequeue Assets files
    $('#add-dequeue').on('click', function (e) {
        e.preventDefault();

        const temlate = $('#clone-dequeue').clone().html();

        $(temlate).insertBefore('#dequeue .btn-add-display');
    });

    $('#dequeue').on('click', '.dashicons-trash', function () {
        const parent = $(this).closest('.wowp-fields__group');
        $(parent).remove();
    });

    // Add shortcode attributes
    $('#add-attribute').on('click', function (e) {
        e.preventDefault();
        const temlate = $('#clone-attributes').clone().html();
        $(temlate).insertBefore('#code-attributes .btn-add-display');
    });

    $('#code-attributes').on('click', '.dashicons-trash', function () {
        const parent = $(this).closest('.wowp-fields__group');
        $(parent).remove();
    });

    $('.button-add-img').on('click', function (event) {
        event.preventDefault();
        var upload_button = $(this);
        var img = $(this).data('img');
        var frame;
        event.preventDefault();
        if (frame) {
            frame.open();
            return;
        }
        frame = wp.media();
        frame.on('select', function () {
            // Grab the selected attachment.
            const attachment = frame.state().get('selection').first();
            let url = attachment.attributes.url;
            url = url.replace('-scaled.', '.');
            let alt = attachment.attributes.alt;
            let title = attachment.attributes.title;
            let height = attachment.attributes.height;
            let width = attachment.attributes.width;
            let img = `<img src="${url}" alt="${alt}" loading="lazy" width="${width}" height="${height}">`;
            frame.close();
            const editorElement = $('[data-content="wowp-tab-html-code"]').find('.CodeMirror')[0];
            const editor = editorElement.CodeMirror;
            const doc = editor.getDoc();
            const cursor = doc.getCursor();
            doc.replaceRange(img, cursor);
            editor.focus();

        });
        frame.open();

    });

    $('.button-editor').not('#phpglobalnav').on('click', function (event) {
        event.preventDefault();
        const parent = $(this).closest('.wowp-settins__tabs-content');
        const id = $(this).attr('id');
        let comment;
        switch (id) {
            case 'jsnav':
            case 'phpnav':
                comment = '// NAV: ';
                break;
            case 'htmlnav':
                comment = '<!-- NAV:  -->';
                break;
            case 'cssnav':
                comment = '/* NAV:  */';
                break;
        }

        const editorElement = $(parent).find('.CodeMirror')[0];
        const editor = editorElement.CodeMirror;
        const doc = editor.getDoc();
        const cursor = doc.getCursor();
        doc.replaceRange(comment, cursor);
        editor.focus();
    });

    $('#phpglobalnav').on('click', function (event) {
        event.preventDefault();
        const parent = $(this).closest('.wowp-settings__page');
        let comment = '// NAV: ';
        const editorElement = $(parent).find('.CodeMirror')[0];
        const editor = editorElement.CodeMirror;
        const doc = editor.getDoc();
        const cursor = doc.getCursor();
        doc.replaceRange(comment, cursor);
        editor.focus();
    });

    $('.wowp-copy').on('click', function () {
        const copyText = $(this).closest('.wowp-input-group').find('input')[0];

        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        alert("Copied the shortcode: " + copyText.value);
    });

    $('.wowp-shortcode-copy').on('click', function () {
        const copyText = $(this).closest('.wowp-field').find('input')[0];

        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        alert("Copied the shortcode: " + copyText.value);
    });

    $('.quickcode').on('click', function () {
        const editor = $('[data-content="wowp-tab-html-code"] .CodeMirror')[0].CodeMirror;
        if (editor) {
            const text = $(this).data('code');
            const doc = editor.getDoc();
            const cursor = doc.getCursor();
            doc.replaceRange(text, cursor);
            editor.focus();
        }
    });


    // Copy
    $('.can-copy').on('click', function () {
        const parent = $(this).closest('.wowp-field');
        const input = $(parent).find('input');
        const originalTooltip = $(this).attr("data-tooltip");
        const currentElement = $(this);

        navigator.clipboard.writeText(input.val()).then(() => {
            currentElement.attr("data-tooltip", "Copied");
            setTimeout(function () {
                currentElement.attr("data-tooltip", originalTooltip);
            }, 1000);
        });
    });

    // Quick Code

    const button_quickcodes = document.getElementById('open-quickcodes');

    if (button_quickcodes) {
        button_quickcodes.addEventListener('click', (e) => {
            e.preventDefault();
            const dialog = document.getElementById('quickcodes-dialog');
            const search = document.getElementById('qc-search');
            if (dialog && typeof dialog.showModal === 'function') {
                dialog.showModal();
                if (search) search.focus();
            }
        });
    }


    // Open on Cmd+K
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('quickcodes-dialog').showModal();
            document.getElementById('qc-search').focus();
        }
    });

// Filter list

    const searchInput = document.getElementById('qc-search');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('#qc-list li').forEach(li => {
                li.style.display = li.textContent.toLowerCase().includes(term) ? 'flex' : 'none';
            });
        });
    }

// Insert at cursor position
    document.querySelectorAll('#qc-list li').forEach(li => {
        li.addEventListener('click', () => {
            const code = li.getAttribute('data-code');
            insertAtCursor(document.querySelector('textarea'), code);
            document.getElementById('quickcodes-dialog').close();
        });
    });

// Helper function
    function insertAtCursor(el, text) {
        const start = el.selectionStart;
        const end = el.selectionEnd;
        el.value = el.value.slice(0, start) + text + el.value.slice(end);
        el.selectionStart = el.selectionEnd = start + text.length;
        el.focus();
    }

    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const shortcut = isMac ? 'Cmd + K' : 'Ctrl + K';
    const quickcode_hotkey = document.querySelector('#quickcode-hotkey');
    if (quickcode_hotkey) {
        quickcode_hotkey.textContent = `(${shortcut})`;
    }


    // Stippets control-checkbox
    $('.wowp-snippet__item > .has-checkbox input[type="checkbox"] ').each(snippet_checkbox).on('click', snippet_checkbox);

    function snippet_checkbox() {
        const expand = $(this).closest('.wowp-snippet__item').find('.wowp-snippet__item-expand');
        if ($(this).is(':checked') && expand) {
            $(expand).removeClass('is-hidden');
        } else {
            $(expand).addClass('is-hidden');
        }
    }

    // Popover

    const toggleBtn = document.getElementById('popover-toggle');
    const popover = document.getElementById('popover-box');

    if (toggleBtn) {

        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            popover.style.display = popover.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', (e) => {
            if (!toggleBtn.contains(e.target) && !popover.contains(e.target)) {
                popover.style.display = 'none';
            }
        });

    }

    // Hide Tabs

    $('#popover-box input[type="checkbox"]').each(hide_tab).on('click', hide_tab);

    function hide_tab() {
        const types = {
            checkbox_hide_html: 'wowp-tab-html-code',
            checkbox_hide_css: 'wowp-tab-css-code',
            checkbox_hide_js: 'wowp-tab-js-code',
            checkbox_hide_php: 'wowp-tab-php-code',
            checkbox_hide_attributes: 'wowp-tab-attributes',
            checkbox_hide_settings: 'wowp-tab-settings',
            checkbox_hide_include: 'wowp-tab-include',
        };

        const id = $(this).attr('id');
        const tab = types[id];
        if ($(this).is(':checked')) {
            $('#'+ tab).prop('checked', false);
            $(`[for="${tab}"]`).addClass('is-hidden');
        } else {
            $(`[for="${tab}"]`).removeClass('is-hidden');
        }
    }


});
