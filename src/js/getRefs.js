export default function getRefs() {
  return {
    searchForm: document.querySelector('.js-search-form'),
    imageGallery: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    loader: document.querySelector('.js-loader'),
  };
}
