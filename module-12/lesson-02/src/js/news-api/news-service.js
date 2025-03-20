import axios from "axios";
// const apiKey = import.meta.env.VITE_API_KEY;
import { BASE_URL, API_KEY, PER_PAGE } from "./config.js";

export async function fetchNews(searchQuery, currentPage = 1) {
  const options = new URLSearchParams({
    q: searchQuery,
    apiKey: API_KEY,
    language: "en",
    pageSize: PER_PAGE,
    page: currentPage,
  });
  const url = `${BASE_URL}/everything?${options}`;

  const {
    data: { articles, totalResults, status, message = "" },
  } = await axios.get(url);

  if (status !== "ok") {
    throw new Error(message);
  }

  if (articles.length === 0) {
    throw new Error("No articles found");
  }

  return { articles, totalResults };
}
