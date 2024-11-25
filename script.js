// Array local pentru stocarea imaginilor
let images = [];

// Elementele din DOM
const imageForm = document.getElementById('image-form');
const cardsContainer = document.getElementById('cards-container');

// Funcție pentru a adăuga o imagine nouă
function addImage(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;
  const description = document.getElementById('description').value;

  const newImage = { title, url, description };
  images.push(newImage);

  renderImages();
  imageForm.reset();
}

// Funcție pentru afișarea imaginilor
function renderImages() {
  cardsContainer.innerHTML = '';

  images.forEach((image, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${image.url}" alt="${image.title}">
      <h3>${image.title}</h3>
      <p>${image.description || 'Fără descriere'}</p>
      <button onclick="deleteImage(${index})">Șterge</button>
    `;

    card.addEventListener('click', () => viewDetails(image));
    cardsContainer.appendChild(card);
  });
}

// Funcție pentru ștergerea unei imagini
function deleteImage(index) {
  images.splice(index, 1);
  renderImages();
}

// Funcție pentru vizualizarea detaliilor unei imagini
function viewDetails(image) {
  alert(`Titlu: ${image.title}\nDescriere: ${image.description || 'Fără descriere'}\nURL: ${image.url}`);
}

// Event listener pentru formular
imageForm.addEventListener('submit', addImage);
