class Router {
  constructor(node) {
    this.node = node;
  }

  start () {
    this.render();
    window.addEventListener("hashchange", cb => {
      this.render();
    });
    
  }
  
  activeRoute() {
    return window.location.hash.slice(1);
  }
  
  render() {
    this.node.innerHTML = "";
    let route = this.activeRoute();
    let p = document.createElement('p');
    p.innerHTML = route;
    this.node.appendChild(p);
  }
}

module.exports = Router;