import axios from "axios";
import { PAGE_SIZE } from "./config";

export async function fetchNews(searchQuery, currentPage = 1) {
  const params = {
    q: searchQuery,
    language: "en",
    pageSize: PAGE_SIZE,
    page: currentPage,
  };

  try {
    const {
      data: { totalResults, articles },
    } = await axios("/everything", {
      params,
    });

    if (totalResults === 0) {
      throw new Error("No articles found");
    }

    return { articles, totalResults };
  } catch (error) {
    console.log(error);
  }
}
