//content for the created elements
import coffeeImage from "../assets/svg/tabitha-turner-KWZ-rg9o76A-unsplash.jpg";
import {firstText, secondText} from './constants.js'

export function main() {
// creates container element to allow for styling
  let content = document.getElementById("content");
  let main = document.createElement("div");
  main.id = "main1";
  content.appendChild(main);

  let mainContent = document.getElementById("main1");

  //id for elements
  const ids = ["intro", "img", "text"];

  //loop to create elements
  [firstText, coffeeImage, secondText].forEach((text, i) => {
    let newX = document.createElement(i === 1 ? "img" : "div");
    if (i === 1) newX.src = text;
    else newX.textContent = text;
    newX.id = ids[i];
    mainContent.appendChild(newX);
  });

// sets menu button to active for styling purposes
  function active() {
    document
      .querySelectorAll(".link")
      .forEach((el) => el.classList.remove("active"));
    document.getElementById("home").classList.add("active");
  }
  active();
}
