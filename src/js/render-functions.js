import galleryItemTpl from '../templates/partials/galleryItem.hbs';
import getRefs from './getRefs';

const refs = getRefs();

export function appendGalleryItemsMarkup(items) {
  refs.imageGallery.insertAdjacentHTML('beforeend', galleryItemTpl(items));
}

export function clearGalleryContainer() {
  refs.imageGallery.innerHTML = '';
}
