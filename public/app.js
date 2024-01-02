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
document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsCarousel = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });
  const buttonsHtml = buttonsCarousel.join(""); // Utworzenie HTML z przyciskami

  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel__nav">${buttonsHtml}</div>`
  );

  const buttons = carousel.querySelectorAll(".carousel__button");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) =>
        item.classList.remove("carousel__item--selected")
      );
      buttons.forEach((btn) =>
        btn.classList.remove("carousel__button_selected")
      );
      items[i].classList.add("carousel__item--selected");
      button.classList.add("carousel__button_selected");
    });
  });
  items[0].classList.add("carousel__item--selected");
  buttons[0].classList.add("carousel__button_selected");
});

const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".collapse");
const header = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  if (header.style.height === "100vh") {
    header.style.height = "75px";
  } else {
    header.style.height = "100vh";
  }
});
