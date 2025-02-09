import "./styles.css";
import { main } from './main.js';
import {mainStructure} from './framework.js'
import {menu} from './menu.js'


window.addEventListener("load", function () {
  mainStructure();
menu();
//   main();
});
