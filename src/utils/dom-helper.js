/**
 * @param {string} tagName
 * @param {Object} [attributes={}]
 * @param {Array|string|number} [children=[]]
 * @returns {HTMLElement}
 */
export const createNewElement = (tagName, attributes = {}, children = []) => {
    const element = document.createElement(tagName);

    for (const [key, value] of Object.entries(attributes)) {
        if (key === 'className') {
            element.className = String(value);
        } else if (key === 'dataset' && typeof value === 'object') {
            Object.assign(element.dataset, value);
        } else {
            element.setAttribute(key, String(value));
        }
    }

    if (typeof children === 'string' || typeof children === 'number') {
        element.textContent = String(children);
    } else if (Array.isArray(children)) {
        children.forEach(child => {
            if (child) element.append(child);
        });
    }

    return element;
};