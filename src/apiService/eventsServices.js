import axios from 'axios';
const url = 'http://localhost:8080/events';

const eventiaServices = {
  getAllEvents() {
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  getEventById(id) {
    return axios
      .get(url + `/${id}`)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  getHighlightEvents(name) {
    return axios
      .get(url + `/highlights?name=${name}`)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  getNotAvailable() {
    return axios
      .get(url + '/notAvailable')
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  getAvailable() {
    return axios
      .get(url + '/available ')
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
};
export default eventiaServices;
