const API_KEY = '43520057-d4110ce2722b475a1deefaa82';
const BASE_URL = 'https://pixabay.com/api/';

export default class PixabayApiService {
  #searchQuery;
  #galleryPage;

  constructor() {
    this.#searchQuery = '';
    this.#galleryPage = 1;
    this.perPage = 10;
    this.isLastPage = false;
  }

  get query() {
    return this.#searchQuery;
  }

  set query(newQuery) {
    this.#searchQuery = newQuery;
  }

  get page() {
    return this.#galleryPage;
  }

  set page(newPage) {
    this.#galleryPage = newPage;
  }

  incrementPage() {
    this.#galleryPage += 1;
  }

  resetPage() {
    this.#galleryPage = 1;
  }

  fetchImages() {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: this.#searchQuery,
      page: this.#galleryPage,
      per_page: this.perPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    const url = `${BASE_URL}?${searchParams}`;

    return fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(`HTTP error: ${resp.status}`);
        }

        return resp.json();
      })
      .then(data => {
        this.incrementPage();
        const result = this.#galleryPage * this.perPage;
        if (result > data.totalHits) {
          this.isLastPage = true;
          console.log('This is last page!');
          console.log('isLastPage:', this.isLastPage);
        }

        return data;
      });
  }
}
