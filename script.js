// Navbar Scroll Effect

window.addEventListener("scroll", function () {

  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});


// Mobile Menu Elements

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("overlay");


// Open / Close Sidebar

menuToggle.addEventListener("click", function () {

  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");

});


// Close Sidebar When Overlay Is Clicked

overlay.addEventListener("click", function () {

  navLinks.classList.remove("active");
  overlay.classList.remove("active");

});


// Close Sidebar When Menu Item Is Clicked

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");
    overlay.classList.remove("active");

  });

});
