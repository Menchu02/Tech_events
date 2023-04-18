import axios from 'axios';
const urlCategories = 'http://localhost:8080/events/categories';

const eventiaCategories = {
  getAllCategories() {
    return axios
      .get(urlCategories)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
};
export default eventiaCategories;
