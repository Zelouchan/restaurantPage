import coffeeImage from "../assets/svg/tabitha-turner-KWZ-rg9o76A-unsplash.jpg";

export function main() {
  let content = document.getElementById("content");
  let main = document.createElement("div");
  main.id = "main1";
  content.appendChild(main);

  let mainContent = document.getElementById("main1");
  let intro = document.createElement("div");
  intro.id = "intro";
  intro.innerText =
    "We are a cozy, non-profit coffee shop where every cup is brewed with love and purpose. Located in the heart of the community, we offer ethically sourced, delicious coffee while giving back. Our mission is simple: every purchase supports local charities, from feeding those in need to providing educational opportunities for youth. Whether you’re grabbing a quick espresso or enjoying a latte with friends, at The Tasty Bean, you’re making a difference with every sip.";
  mainContent.appendChild(intro);

  let img = document.createElement("img");
  img.id = "img";
  img.src = coffeeImage;
  img.alt = "coffee shop";
  mainContent.appendChild(img);

  let text = document.createElement("div");
  text.id = "text";
  text.innerText =
    "At The Tasty Bean, we love dogs! Bring your furry friends along to enjoy a cozy atmosphere with you. Our pet-friendly space offers water bowls and treats, ensuring both you and your dog feel right at home!";
  mainContent.appendChild(text);

  function active() {
    document.getElementById("home").classList.add("active");
    document.getElementById("menu").classList.remove("active");
    document.getElementById("about").classList.remove("active");
  }
  active();
}
