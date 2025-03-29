const navMenu = document.querySelector(".navigation_menu");
const openMenuBtn = document.getElementById("open_menu_btn");
const closeMenuBtn = document.getElementById("close_menu_btn");

let menuItems = [navMenu, openMenuBtn, closeMenuBtn];

window.addEventListener("resize", () => {
  let window_width = window.innerWidth;

  if (window_width < 950 && closeMenuBtn.style.display == "none") {
    openMenuBtn.style.display = "block";
  }
  if (window_width >= 950) {
    menuItems.forEach((item) => {
      item.style.display = "none";
    });
  }
});

openMenuBtn.addEventListener("click", () => {
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  navMenu.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  if (window.innerWidth < 950) {
    openMenuBtn.style.display = "block";
  }
  closeMenuBtn.style.display = "none";
  navMenu.style.display = "none";
});
