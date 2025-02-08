import { mainStructure, active } from './main.js';


function active() {
document.getElementById('about').classList.add('active');
document.getElementById('home').classList.remove('active');
document.getElementById('menu').classList.remove('active');
};

window.addEventListener("load", function () {
  mainStructure();
  active();
});