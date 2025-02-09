import { coffee, tea, food } from "./constants.js";

export function menu() {
  const content = document.getElementById("content");
  const menu1 = document.createElement("div");
  menu1.id = "menu1";
  content.appendChild(menu1);

  const menuBox = document.getElementById("menu1");

  createCard(menuBox, coffee, "Coffee");
  createCard(menuBox, tea, "Tea");
  createCard(menuBox, food, "Food");

  function createCard(container, items, category) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("card");

    const containerDiv = document.createElement("div");
    containerDiv.classList.add("container");

    const frontCard = document.createElement("div");
    frontCard.classList.add("frontCard");
    frontCard.textContent = category;

    const backCard = document.createElement("div");
    backCard.classList.add("backCard");

    items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = item;
      backCard.appendChild(itemDiv);
    });

    containerDiv.appendChild(frontCard);
    containerDiv.appendChild(backCard);

    menuCard.appendChild(containerDiv);
    container.appendChild(menuCard);
  }

  function active() {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      document
        .querySelectorAll(".link")
        .forEach((el) => el.classList.remove("active"));
      menuElement.classList.add("active");
    }
  }
  active();
}
