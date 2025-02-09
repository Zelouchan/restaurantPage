import {hours, contact} from './constants.js'
import coffeeImage from "../assets/svg/tabitha-turner-KWZ-rg9o76A-unsplash.jpg";

export function about() {
  let content = document.getElementById("content");
  let about = document.createElement("div");
  about.id = "about1";
  content.appendChild(about);

  const ids = ["hours", "image", "contactUs"];

  let aboutContent = document.getElementById("about1");

  //loop to create elements
  [hours, coffeeImage, contact].forEach((text, i) => {
    let newX = document.createElement(i === 1 ? "img" : "div");
    if (i === 1) newX.src = text;
    else newX.innerHTML = text.join('');
    newX.id = ids[i];
    aboutContent.appendChild(newX);
  });



function active() {
    document.querySelectorAll(".link").forEach(el => el.classList.remove("active"));
    document.getElementById("about").classList.add("active");  
};
active();
}
