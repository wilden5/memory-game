import {createNewElement} from "../../utils/dom-helper.js";

export const openModalWindow = (contentElement) => {

    const modalWindow = createNewElement('div', {
        className: 'modal-window',
    }, [contentElement]);

    const modalOverlay = createNewElement('div', {
        className: 'modal-overlay',
    }, [modalWindow]);

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModalWindow();
        }
    });

    window.addEventListener('keydown', handleEscapeKey);

    document.body.append(modalOverlay);
    document.body.classList.add('lock-scroll');
}

export const closeModalWindow = () => {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.remove();
    }

    document.body.classList.remove('lock-scroll');
    window.removeEventListener('keydown', handleEscapeKey);
}

const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
        closeModalWindow();
    }
};