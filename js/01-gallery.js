import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryCardsImage = imagesGallery(galleryItems);

gallery.addEventListener('click', handleClick);
gallery.insertAdjacentHTML('beforeend', galleryCardsImage);

function imagesGallery(cardsImage) {
  return cardsImage.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
  })
    .join('');
}

function handleClick(event) {
  const isGalleryImage = event.target.classList.contains('gallery__image');
  if (!isGalleryImage) {
    return;
  }
  const modal = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
    onShow: (instance) => {
      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          instance.close();
        }
      })
    }
  })
  modal.show();

  event.preventDefault();
}
