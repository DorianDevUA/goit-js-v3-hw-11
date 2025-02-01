import './css/style.css';
import getRefs from './js/getRefs';
import CustomButton from './js/components/custom-button';
import PixabayApiService from './js/pixabay-api';
import SimpleLightboxServise from './js/utils/simple-lightbox';
import izitoastApi from './js/utils/iziToast-api';
import {
  appendGalleryItems,
  clearGalleryContainer,
} from './js/render-functions';

const refs = getRefs();
const pixabayApi = new PixabayApiService();
const imageLightbox = new SimpleLightboxServise();
const gallerySearchBtn = new CustomButton({
  selector: '.js-gallery-search-btn',
  enabledLabel: 'Знайти',
  disabledLabel: 'Пошук',
});
const loadMoreBtn = new CustomButton({
  selector: '.js-load-more-btn',
  enabledLabel: 'Показати ще',
  disabledLabel: 'Завантаження',
  hidden: true,
});

gallerySearchBtn.enable();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  pixabayApi.searchQuery = form.elements.query.value;

  if (!pixabayApi.searchQuery) {
    izitoastApi.showWarningMsg(izitoastApi.MESSAGES.BAD_REQUEST);
    return;
  }

  resetGallery();
  fillGallery()
    .then(() => {
      imageLightbox.initialize();
      gallerySearchBtn.enable();
    })
    .catch(error => {
      console.log(error);
    });

  form.reset();
}

function onLoadMore() {
  fillGallery().then(() => {
    imageLightbox.refresh();
  });
}

function fillGallery() {
  loadMoreBtn.disable();

  return pixabayApi
    .fetchImages()
    .then(images => {
      if (pixabayApi.searchQuery && !images.length) {
        izitoastApi.showErrorMsg(izitoastApi.MESSAGES.NOT_FOUND);
        return;
      }

      appendGalleryItems(images);
    })
    .then(() => {
      if (pixabayApi.searchQuery && pixabayApi.isLastPage) {
        loadMoreBtn.hide();
        return;
      }

      loadMoreBtn.show();
      loadMoreBtn.enable();
    })
    .catch(error => {
      console.log(error);
    });
}

function resetGallery() {
  pixabayApi.resetPage();
  pixabayApi.isLastPage = false;
  gallerySearchBtn.disable();
  loadMoreBtn.hide();
  clearGalleryContainer();
}
