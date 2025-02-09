import "./styles.css";
import { main } from './main.js';
import {mainStructure} from './framework.js'
import {menu} from './menu.js'
import {about} from './contact.js'


// document.getElementById("home").addEventListener("click", function() {
//   main();
// });

// document.getElementById("menu").addEventListener("click", function() {
//   menu();
// });

// document.getElementById("about").addEventListener("click", function() {
//   about();
// });


window.addEventListener("load", function () {
  mainStructure();
  main();
});
