import "./styles.css";
import { main } from './main.js';

export function mainStructure() {
  const header = document.getElementsByTagName("header")[0];
  let logo = document.createElement("div");
  logo.id = "logo";
  header.appendChild(logo);

  let name = document.createElement("p");
  name.id = "name";
  name.textContent = "The Tasty Bean";
  header.appendChild(name);

  const ul = document.getElementsByTagName("ul")[0];

  let home = document.createElement("li");
  home.textContent = "Home";
  home.id = "home";
  home.classList.add("link");
  ul.appendChild(home);

  let menu = document.createElement("li");
  menu.textContent = "Menu";
  menu.id = "menu";
  menu.classList.add("link");
  ul.appendChild(menu);

  let about = document.createElement("li");
  about.textContent = "About Us";
  about.id = "about";
  about.classList.add("link");

  ul.appendChild(about);
}

window.addEventListener("load", function () {
  mainStructure();
  main();
});
