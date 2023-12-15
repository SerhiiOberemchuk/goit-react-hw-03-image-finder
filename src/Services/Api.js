import axios from 'axios';

const apiKey = '40336421-a348c8518e766dd2004df0c10';
let pages = 1;
const per_page = 12;
const baseURL = 'https://pixabay.com/api/';

export const fetchGalleryItems = async searchQuery => {
  const response = await axios.get(
    `${baseURL}?q=${searchQuery}&key=${apiKey}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${per_page}&page=${pages}`
  );
  return response.data.hits;
};

export default { fetchGalleryItems };
