import axios from 'axios';

const API_KEY = '40336421-a348c8518e766dd2004df0c10';
const BASE_URL = 'https://pixabay.com/api';
const per_page = 12;

export const fetchGalleryItems = async (searchText, pages) => {
  return await axios.get(
    `${BASE_URL}/?q=${searchText}&key=${API_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${pages}`
  );
};
