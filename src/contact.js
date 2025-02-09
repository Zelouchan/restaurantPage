
function active() {
    document.querySelectorAll(".link").forEach(el => el.classList.remove("active"));
    document.getElementById("about").classList.add("active");  
};

window.addEventListener("load", function () {
  mainStructure();
  active();
});