import { format } from "date-fns";
import { truncate } from "./truncateText.js";

export function appendNewsArticles(articles, wrapper) {
  const articlesMarkup = articles
    .map(
      ({ title, description, url, urlToImage, publishedAt }) => `
     <article class="card">
        <img
          class="card-img-top"
          src="${
            urlToImage
              ? urlToImage
              : "https://placehold.co/600x400?text=Hot news"
          }"
          alt="${title}"
        />
        <div class="card-body d-flex flex-column align-items-start">
          <h5 class="card-title">${truncate(title, 30)}</h5>
          <p class="card-text">${truncate(description)}</p>
          <p class="card-text mt-auto">
            <small class="text-body-secondary">${
              publishedAt
                ? `Published at: ${format(publishedAt, "MM.dd.yyyy")}`
                : ""
            }</small>
          </p>
          <a href="${url}" class="btn btn-outline-primary " target="_blank" rel="noopener noreferrer" >Read more</a>
        </div>
      </article>
    `
    )
    .join("");

  wrapper.insertAdjacentHTML("beforeend", articlesMarkup);
}
