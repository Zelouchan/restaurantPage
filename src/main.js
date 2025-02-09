//content for the created elements
import coffeeImage from "../assets/svg/tabitha-turner-KWZ-rg9o76A-unsplash.jpg";
const firstText =
"We are a cozy, non-profit coffee shop where every cup is brewed with love and purpose. Located in the heart of the community, we offer ethically sourced, delicious coffee while giving back. Our mission is simple: every purchase supports local charities, from feeding those in need to providing educational opportunities for youth. Whether you’re grabbing a quick espresso or enjoying a latte with friends, at The Tasty Bean, you’re making a difference with every sip.";
const secondText =
"At The Tasty Bean, we love dogs! Bring your furry friends along to enjoy a cozy atmosphere with you. Our pet-friendly space offers water bowls and treats, ensuring both you and your dog feel right at home!";


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
