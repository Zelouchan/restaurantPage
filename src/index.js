import "./styles.css";
import { main } from './main.js';
import {mainStructure} from './framework.js'
import {menu} from './menu.js'
import {about} from './contact.js'


window.addEventListener("load", function () {
  mainStructure();
  about();
// menu();
//   main();
});
