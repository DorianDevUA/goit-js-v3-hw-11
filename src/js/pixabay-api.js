const API_KEY = '43520057-d4110ce2722b475a1deefaa82';
const BASE_URL = 'https://pixabay.com/api/';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      lang: 'en',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q: this.searchQuery,
      page: this.page,
    });

    const url = `${BASE_URL}?${searchParams}`;

    return fetch(url)
      .then(resp => {
        if (!resp.ok) {
          throw new Error(resp.status);
        }

        return resp.json();
      })
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
