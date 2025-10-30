import loadHome from "./home.js";
import loadContact from "./contact.js";
import loadMenu from "./menu.js";

function clearContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
}

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

document.addEventListener("DOMContentLoaded", loadHome());

homeBtn.addEventListener("click", () => {
    clearContent();
    loadHome();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

contactBtn.addEventListener("click", () => {
    clearContent();
    loadContact();
});