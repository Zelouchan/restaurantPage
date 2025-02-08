export function main () {
    let content = document.getElementById('content');
    let main = document.createElement("div");
    main.id = "main1";
    content.appendChild(main);


function active() {
    document.getElementById("home").classList.add("active");
    document.getElementById("menu").classList.remove("active");
    document.getElementById("about").classList.remove("active");
  }
active();
}

