const Router = require("./router");

  let routes = {
    compose: Compose,
    inbox: Inbox,
    sent: Sent
  };

document.addEventListener("DOMContentLoaded", (event) =>{
  event.currentTarget.querySelectorAll('.sidebar-nav li').forEach((el) =>{
    el.addEventListener("click", () => {
      window.location.hash = el.innerText.toLowerCase();
    });
  });
  
  let content = document.querySelector(".content");
  router = new Router(content, routes);
  router.start();
  
});


