document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  links.style.display = links.style.display === "flex" ? "none" : "flex";
  if (links.style.display === "flex") {
    links.style.position = "absolute";
    links.style.top = "72px";
    links.style.left = "0";
    links.style.right = "0";
    links.style.padding = "20px";
    links.style.background = "#080b12";
    links.style.flexDirection = "column";
  }
});
