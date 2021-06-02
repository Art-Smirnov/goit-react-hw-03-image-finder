import axios from 'axios';

const MY_KEY = '20897782-f4830aa419d01f6c9c7fb4934';
const BASE_URL = 'https://pixabay.com/api/';
//чомусь не працює
// axios.defaults.baseUrl = 'https://pixabay.com/api/';

const fetchImagesWithQuery = async ({
  query = '',
  currentPage = 1,
  pageSize = 12,
}) => {
  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${currentPage}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
  );
  return response.data.hits;
};

const imageApi = {
  fetchImagesWithQuery,
};

export default imageApi;
