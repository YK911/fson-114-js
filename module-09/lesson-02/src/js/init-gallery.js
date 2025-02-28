import getPhotos from './unsplash-service';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
};
const lightboxSelector = '.js-gallery a';
const lightboxOptions = {
  overlay: true,
  overlayOpacity: 0.9,
  nav: false,
};

function createGalleryElement({ preview, original, description }) {
  return `<li class="gallery-item">
      <a href="${original}">
        <img class="gallery-ill" src="${preview}" alt="${description}" />
      </a>
    </li>`;
}

function createImageElement({ urls: { small, regular }, alt_description }) {
  return `<li class="gallery-item">
      <a href="${regular}">
        <img class="gallery-ill" src="${small}" alt="${alt_description}" />
      </a>
    </li>`;
}

export function init(images = []) {
  getPhotos()
    .then(() => images.map(createGalleryElement).join(''))
    .then(markup => refs.galleryList.insertAdjacentHTML('beforeend', markup))
    .then(() => {
      const lightbox = new SimpleLightbox(lightboxSelector, lightboxOptions);
      // lightbox.show();
    });
}
