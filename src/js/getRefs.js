export default function getRefs() {
  return {
    searchForm: document.querySelector('.js-search-form'),
    // searchBtn: document.querySelector('[data-action="search"]'),
    gallery: document.querySelector('.js-gallery'),
    loader: document.querySelector('.loader'),
  };
}
