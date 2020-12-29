console.log("JS's working...");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  let root = document.documentElement;
  root.classList.toggle("dark-theme");
});
