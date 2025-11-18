import './style.css';
import loadHome from "./home.js";

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content");

    loadHome();

    const homeBtn = document.getElementById("home-btn");
    homeBtn.addEventListener("click", loadHome);
});