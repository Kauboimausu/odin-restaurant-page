import "./style.css";
import homeTab from "./home.js";

const TabManager = (function () {

    const content = document.getElementById("content");

    const homeButton = document.getElementById("home");
    const menuButton = document.getElementById("menu");
    const aboutButton = document.getElementById("about");


    homeButton.addEventListener("click", () => {
        content.textContent = '';
        content.appendChild(homeTab);
    });


})();