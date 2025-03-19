import axios from "axios";
import { populateDatalist } from "../renders";

export async function fetchBreeds() {
  try {
    const { data } = await axios.get("/breeds");
    populateDatalist(data);
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCatInfo(options) {
  try {
    const { data } = await axios.get("/images/search", options);
    // { data, status, statusText, headers, config, request }

    return data;
  } catch (error) {
    console.log(error);
  }
}
