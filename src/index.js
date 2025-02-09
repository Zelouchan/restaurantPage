import "./styles.css";
import { main } from './main.js';
import {mainStructure} from './framework.js'
import {menu} from './menu.js'
import {about} from './contact.js'

let content = document.getElementById("content");

function selectTab() {
document.getElementById("home").addEventListener("click", function() {
  content.innerHTML='';
  main();
});

document.getElementById("menu").addEventListener("click", function() {
  content.innerHTML='';
  menu();
});

document.getElementById("about").addEventListener("click", function() {
  content.innerHTML='';
  about();
});
}

mainStructure();
selectTab();


