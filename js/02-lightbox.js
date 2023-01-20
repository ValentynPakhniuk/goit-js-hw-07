import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryCardsImage = imagesGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryCardsImage);

function imagesGallery(cardsImage) {
  return cardsImage.map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
  })
    .join('');
}

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});
