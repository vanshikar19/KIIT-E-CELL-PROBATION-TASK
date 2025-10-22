const menu = document.getElementById("menu");
const links = document.getElementById("links");
let collapsed = true;

menu.addEventListener("click", () => {
  if (collapsed) {
    links.style.scale = "1";
    links.classList.add("opened");
  } else {
    links.style.scale = "0";
    links.classList.remove("opened");
  }
  collapsed = !collapsed;
});
