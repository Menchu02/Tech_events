import axios from "axios";
const url = "http://localhost:8080/events";

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
  joinEvent(id) {
    return axios
      .get(url + "/joinEvent")
      .then((res) => res.data)
      .catch((error) => console.error(error));
  },
};
export default eventiaServices;
