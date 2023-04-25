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
  userRegister(data) {
    return axios
      .post(url + `/register`, data)
      .then((res) => {
      console.log('registrado', res);})
      .catch((error) => {
      console.log('No registrado', error);
      });
  },
  userLogin(data) {
    return axios.post(url + `/login`, data)
      .then((res)=> res.data)
      .catch((error) => console.log(error))
  },
};
export default eventiaServices;
