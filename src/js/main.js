let menuBtn = document.querySelector("#menu-btn");
let menuNav = document.querySelector(".header__menu");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  menuNav.classList.toggle("active");
};

menu.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};
