'use strict';

const template = function () {
    const template = document.getElementById('clone-dereg-fields');

    if (!template) {
        return false;
    }

    const box = document.getElementById('dereg-handle');
    const addBtn = document.getElementById('add-handle');
    const removeBtn = document.getElementById('remove-handle');

    addBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const clone = template.content.cloneNode(true);
        const container = document.getElementById('dereg-handle');
        const targetElement = document.querySelector('#dereg-handle .wowp-btn-actions');
        container.insertBefore(clone, targetElement);
    });

    removeBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const parentElement = document.getElementById('dereg-handle');
        const lastChild = parentElement.querySelector('.wowp-fields-group:nth-last-child(2)');
        if (lastChild) {
            lastChild.remove();
        }
    });
}


document.addEventListener('DOMContentLoaded', function () {
    new template;

});