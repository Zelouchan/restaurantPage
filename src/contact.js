import { hours, contact } from "./constants.js";
import teaImage from "../assets/svg/tea.jpg";
import knitting from "../assets/svg/knitting.jpg";

export function about() {
  let content = document.getElementById("content");
  let about = document.createElement("div");
  about.id = "about1";
  content.appendChild(about);

  const ids = ["hours", "tea", "contactUs", "knitting"];

  let aboutContent = document.getElementById("about1");

  //loop to create elements
  [hours, teaImage, contact, knitting].forEach((text, i) => {
    let newX = document.createElement(i % 2 === 1 ? "img" : "div");

    if (i % 2 === 1) {
      newX.src = text;
      newX.alt = `Image ${i}`;
    } else {
      newX.innerHTML = text.join("");
    }

    newX.id = ids[i];
    aboutContent.appendChild(newX);
  });

  function active() {
    document
      .querySelectorAll(".link")
      .forEach((el) => el.classList.remove("active"));
    document.getElementById("about").classList.add("active");
  }
  active();
}
