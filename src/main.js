import './css/style.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import getRefs from './js/getRefs';
import PixabayApiService from './js/pixabay-api';
import {
  appendGalleryItemsMarkup,
  clearGalleryContainer,
} from './js/render-functions';

const refs = getRefs();
const pixabayApiService = new PixabayApiService();
// const options = {
//   root: null,
//   rootMargin: '300px',
// };
// const observer = new IntersectionObserver(onLoadMore, options);
let simplelightbox;

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const query = form.elements.query.value.trim();

  if (!query) {
    alert('Введіть пошуковий запит');
    return;
  }

  pixabayApiService.query = query;
  pixabayApiService.resetPage();
  pixabayApiService.fetchImages().then(({ hits }) => {
    clearGalleryContainer();
    appendGalleryItemsMarkup(hits);
    simplelightbox = new SimpleLightbox('.js-gallery a');
  });

  form.reset();
}

function onLoadMore() {
  console.log('test');
  pixabayApiService.fetchImages().then(({ hits, totalHits }) => {
    appendGalleryItemsMarkup(hits);
    simplelightbox.refresh();
  });
}
