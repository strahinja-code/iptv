const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("navul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});
