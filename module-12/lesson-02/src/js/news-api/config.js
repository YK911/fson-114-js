import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://newsapi.org/v2";
export const PAGE_SIZE = 4;

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["X-Api-Key"] = API_KEY;
