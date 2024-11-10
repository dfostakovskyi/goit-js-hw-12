import axios from 'axios';

const API_KEY = '46850539-7e4ca2d811908faae801b6294';
const baseURL = "https://pixabay.com/api/";

export async function fetchData(userInput, page = 1, per_page = 15) { 
  const params = {
    key: API_KEY,
    q: userInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page
  };

  const url = `${baseURL}`;

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.statusText : error.message);
  }
}
