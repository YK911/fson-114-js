import { refs } from "./refs";

export function appendArticles(articles = []) {
  const markup = articles
    .map(({ urlToImage, title, description, publishedAt, url }) => {
      return `<div class="col">
            <article class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="${urlToImage}"
                    class="ill rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">${title}</h3>
                    <p class="card-text">${description}</p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        ${publishedAt}</small>
                    </p>

                    <a
                      href="${url}"
                      class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>`;
    })
    .join("");

  refs.articleContainer.insertAdjacentHTML("beforeend", markup);
}
