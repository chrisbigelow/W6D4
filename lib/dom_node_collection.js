class DOMNodeCollection {
  constructor(htmlElements) {
    this.htmlElements = htmlElements;
  }
  
  html(str) {
    if (str === undefined) {
      this.htmlElements[0].innerHTML;
    }
    this.htmlElements.forEach ((el) => {
      el.innerHTML = str;
    })
  }
  
  empty() {
    this.html('');
  }
  
  append(arg) {
    
  if (this.htmlElements.length === 0) return;
  
  if (typeof arg === 'object' && !(arg instanceof DOMNodeCollection)) {
    arg = $l(arg);
  }
  
  if (typeof arg === "string") {
    this.each((node) => {
      node.innerHTML += arg;
    });
  } else if (arg instanceof DOMNodeCollection){
    this.each ((el) => {
      arg.each((child) => {
        el.appendChild(child.cloneNode(true));
      }
    });
  };
    
  remove() {
    this.each(node => node.parentNode.removeChild(node));
  }
  
  attr(name, value) {
    if (typeof value === "string") {
      this.each(node => node.setAttribute(name, value));
    } else {
      return this.nodes[0].getAttribute(name);
    }
  }
  
  
};

module.exports = DOMNodeCollection;