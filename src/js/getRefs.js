export default function getRefs() {
  return {
    searchForm: document.querySelector('.js-gallery-search-form'),
    galleryContainer: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector('.js-load-more-btn'),
    galleryObserverGuard: document.querySelector('.js-guard'),
  };
}
