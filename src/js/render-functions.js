import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const simpleBox = new SimpleLightbox ('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGallery (images) {
    const galleryMarkup = images.map(( { webformatURL, largeImageURL, tags, likes, views, comments, downloads } ) => `
    <li class="gallery-item">
  <a class="gallery-link" href="${webformatURL}">
    <img
      class="gallery-image"
      src="${largeImageURL}"
      alt="${tags}"
    />
  </a>
  <div class="info">
  <div class="info-item">
   <p class="title">Likes</p>
   <p class="item">${likes}</p>
  </div>
  <div class="info-item">
   <p class="title">Views</p>
   <p class="item">${views}</p>
  </div>
  <div class="info-item">
   <p class="title">Comments</p>
   <p class="item">${comments}</p>
  </div>
  <div class="info-item">
  <p class="title">Downloads</p>
  <p class="item">${downloads}</p>
  </div>
  </div>
</li>
`).join('');

gallery.innerHTML = galleryMarkup;
simpleBox.refresh();
}

function clearGallery() {
    gallery.innerHTML = '';
}

function showLoader() {
    loader.classList.remove('is-hidden');
}

function hideLoader() {
    loader.classList.add('is-hidden');
}

export { createGallery, clearGallery, showLoader, hideLoader };
