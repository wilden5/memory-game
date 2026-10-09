import {createNewElement} from "../../utils/dom-helper.js";

export const createFooter = () => {
    const authorLink = createNewElement('a', {
        className: 'author-link',
        href: 'https://github.com/wilden5',
        target: '_blank',
    }, 'wilden5');

    const copyrightText = document.createTextNode('© 2026 Developed by ');

    const footerContent = createNewElement('div', {
        className: 'footer-content'
    }, [
        copyrightText,
        authorLink
    ]);

    const footer = createNewElement('footer', {
        className: 'footer',
    }, [
        footerContent
    ]);

    return footer;
}