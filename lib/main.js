const DOMNodeCollection = require('./dom_node_collection');

window.$l = (selector) => {
  if (selector instanceof HTMLElement) {
    return new DOMNodeCollection(selector);
  } else {
    return new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));
  }
};