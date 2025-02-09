import { mainStructure } from './index.js';


function active() {
    document.querySelectorAll(".link").forEach(el => el.classList.remove("active"));
    document.getElementById("menu").classList.add("active");
    
    };

window.addEventListener("load", function () {
  mainStructure();
  active();
});