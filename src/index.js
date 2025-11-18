import './style.css';
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
    loadHome();

    const homeBtn = document.getElementById("home-btn");
    const menuBtn = document.getElementById("menu-btn");
    const aboutBtn = document.getElementById("about-btn");

    homeBtn.addEventListener("click", loadHome);
    menuBtn.addEventListener("click", loadMenu);
    aboutBtn.addEventListener("click", loadAbout);
});

