//INPUT
const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

searchButton.addEventListener("click", () => {
  searchInput.style.display = "block";
  searchInput.focus();
  searchButton.style.display = "none";
});

document.addEventListener("click", (event) => {
  // Sprawdź czy kliknięcie nie było wewnątrz inputa lub przycisku
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

const buttonGallery = document.querySelector(".button_gallery");
const gradient = document.querySelector(".gradient");
buttonGallery.addEventListener("click", () => {
  gradient.style.background = "none";
  buttonGallery.style.display = "none";
});

//GALLERY
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closeButton = document.getElementById("close-button");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const imageLinks = document.querySelectorAll(".grid-item a");
const imageUrls = Array.from(imageLinks).map((link) => link.href);
let currentIndex = 0;

function initPopup(index) {
  currentIndex = index;
  popupContent.innerHTML = "";
  const image = document.createElement("img");
  image.src = imageUrls[index];
  image.alt = "";
  popupContent.appendChild(image);
  popup.style.display = "block";
  popup.style.position = "fixed";
  popup.style.height = "100%";
  popup.style.width = "100%";
  prevButton.style.display = "block";
  nextButton.style.display = "block";

  updateNavigation();
}

function updateNavigation() {
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === imageUrls.length - 1;
}

prevButton.addEventListener("click", () => {
  navigate(-1);
});
nextButton.addEventListener("click", () => {
  navigate(1);
});

function navigate(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = imageUrls.length - 1;
  } else if (currentIndex >= imageUrls.length) {
    currentIndex = 0;
  }
  initPopup(currentIndex);
}

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (popup.style.display === "block") {
    if (e.key === "ArrowLeft") {
      navigate(-1);
    } else if (e.key === "ArrowRight") {
      navigate(1);
    }
  }
});

// Dodaj słuchacza zdarzeń do każdego obrazka
imageLinks.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    initPopup(index);
  });
});
