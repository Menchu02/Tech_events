import axios from "axios";
const url = "http://localhost:8080/events";

const eventiaServices = {
  getAllEvents(name = "") {
    return axios
      .get(url + `?name=${name}`)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  getEventById(id) {
    return axios
      .get(url + `/${id}`)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  deleteById(id) {
    return axios
      .delete(url + `/${id}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  },
  getHighlightEvents(name) {
    return axios
      .get(url + `/highlights?name=${name}`)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  getNotAvailable(name) {
    return axios
      .get(url + `/notAvailable?name=${name}`)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  getAvailable(name) {
    return axios
      .get(url + `/available?name=${name}`)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
  joinEvent(id) {
    return axios
      .get(url + "/joinEvent")
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
};
export default eventiaServices;
