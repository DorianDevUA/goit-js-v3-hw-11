const API_KEY = '43520057-d4110ce2722b475a1deefaa82';
const BASE_URL = 'https://pixabay.com/api/';

export default class PixabayApiService {
  #query;
  #page;

  constructor() {
    this.#query = '';
    this.#page = 1;
    this.isLastPage = false;
    this.limit = 5;
  }

  get searchQuery() {
    return this.#query;
  }

  set searchQuery(newQuery) {
    this.#query = newQuery.trim().toLowerCase();
  }

  get galleryPage() {
    return this.#page;
  }

  set galleryPage(newPage) {
    this.#page = newPage;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  fetchImages() {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: this.#query,
      page: this.#page,
      per_page: this.limit,
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
      .then(({ hits, totalHits }) => {
        const total = this.#page * this.limit;

        if (total >= totalHits) {
          this.isLastPage = true;
        }

        this.incrementPage();

        return hits;
      });
  }
}
