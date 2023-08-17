const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchButton.addEventListener('click', () => {
  searchInput.style.display = 'block';
  searchInput.focus();
});

searchInput.addEventListener('blur', () => {
  searchInput.style.display = 'none';
});