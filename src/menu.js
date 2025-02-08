import { mainStructure } from './index.js';


function active() {
    document.getElementById('menu').classList.add('active');
    document.getElementById('home').classList.remove('active');
    document.getElementById('about').classList.remove('active');
    };

window.addEventListener("load", function () {
  mainStructure();
  active();
});