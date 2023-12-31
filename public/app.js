//INPUT
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

searchButton.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchInput.focus();
  searchButton.style.display = "none";
});

document.addEventListener("click", (event) => {
  // Sprawdzenie czy kliknięcie nie było wewnątrz inputa lub przycisku
  if (
    !searchInput.contains(event.target) &&
    !searchButton.contains(event.target)
  ) {
    searchInput.style.display = "none";
    searchButton.style.display = "block";
  }
});

searchInput.addEventListener("blur", () => {
  searchInput.style.display = "none";
});

//CAROUSEL


//HAMBURGER MENU
const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".collapse");
const header = document.querySelector(".navbar");
const topline = document.querySelector(".topline");
const midline = document.querySelector(".midline");
const bottomline = document.querySelector(".bottomline");

hamburger.addEventListener("click", function () {
  const isMenuVisible = menu.style.display === "flex";

  menu.style.display = isMenuVisible ? "none" : "flex";
  midline.style.display = isMenuVisible ? "flex" : "none";
  topline.style.transform = isMenuVisible ? "rotate(0deg)" : "rotate(-45deg)";
  bottomline.style.transform = isMenuVisible ? "rotate(0deg)" : "rotate(45deg)";
  hamburger.style.position = isMenuVisible ? "static" : "absolute";
  bottomline.style.position = topline.style.position = isMenuVisible
    ? "static"
    : "relative";
  bottomline.style.left = topline.style.left = isMenuVisible ? "auto" : "225px";
  topline.style.top = isMenuVisible ? "auto" : "15px";
  hamburger.style.justifyContent = isMenuVisible ? "auto" : "space-around";

  header.style.height = isMenuVisible ? "75px" : "100vh";
});
