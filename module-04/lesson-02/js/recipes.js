const popularRecipesListEl = document.querySelector(".js-popular-recipes");

async function getPopularRecipes() {
  const response = await fetch(
    "https://tasty-treats-backend.p.goit.global/api/recipes/popular"
  );
  const data = await response.json();
  return data;
}

const result = await getPopularRecipes();
// console.log("result:", result);

function ceatePopularRecipesMarkup(data = []) {
  return data
    .map(({ _id, title, description, preview, popularity }) => {
      return `<li class="popular-recipes-item" id="${_id}">
              <img
                class="popular-recipes-thumb"
                src="${preview}"
                alt="${title}"
                width="64"
                height="64"
              />
              <h3 class="popular-recipes-subtitle">${title}</h3>
              <p class="popular-recipes-desc">${description}</p>
            </li>`;
    })
    .join("");
}

const markup = ceatePopularRecipesMarkup(result);
// console.log("markup:", markup);
popularRecipesListEl.insertAdjacentHTML("beforeend", markup);
