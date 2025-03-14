import axios from "axios";
import { populateDatalist } from "../renders";

export function fetchBreeds() {
  axios
    .get("/breeds")
    .then(response => response.data)
    .then(breeds => {
      populateDatalist(breeds);
    })
    .catch(() => {});
}

export function fetchCatInfo(options) {
  return axios.get("/images/search", options).then(response => response.data);
}
