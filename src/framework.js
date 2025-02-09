export function mainStructure() {
  // creates header elements
    const header = document.querySelector("header");
    ["logo", "name"].forEach((id, i) => {
      let el = document.createElement(i ? "p" : "div");
      el.id = id;
      if (i) el.textContent = "The Tasty Bean";
      header.appendChild(el);
    });
  
    //creates the nav elements
    const ul = document.querySelector("ul");
    ["Home", "Menu", "About Us"].forEach((text, i) => {
        let li = document.createElement("li");
        li.textContent = text;
        li.id = ["home","menu","about"][i];
        li.classList.add("link");
        ul.appendChild(li);
    });
  }
  