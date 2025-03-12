import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { POKE_URL } from "./config";
import "../common.css";

/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

function fetchPokemon(pokemonId) {
  return fetch(`${POKE_URL}/${pokemonId}`).then(response => {
    if (!response.ok) {
      throw new Error(response.message);
    }

    return response.json();
  });
}

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const {
    query: { value: searchQuery },
  } = form.elements;

  if (searchQuery.trim() === "") {
    iziToast.warning({
      message: "Please, enter pokemon name",
      position: "topRight",
    });

    return;
  }

  fetchPokemon(searchQuery.trim())
    .then(data => {
      console.log(data);

      renderPokemonCard(data);
    })
    .catch(error => {
      onFetchError(error);
    })
    .finally(() => {
      form.reset();
    });
}

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  const abilityListItems = abilities
    .map(item => `<li class="list-group-item">${item.ability.name}</li>`)
    .join("");

  const markup = `<div class="pokemon-card">
      <img src="${sprites.front_default}" class="pokemon-image" alt="${name}" >

      <div class="pokemon-info">
        <h2 class="pokemon-title">${name}</h2>
        <p><span class="bold-text">Вага:</span> ${weight}</p>
        <p><span class="bold-text">Зростання:</span> ${height}</p>
        <h5 class="abilities-title">Уміння</h5>
        <ul class="abilities-list">${abilityListItems}</ul>
      </div>
    </div>`;

  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  console.log(error);

  iziToast.error({
    message: "Упс, щось пішло не так і ми не знайшли вашого покемона!",
    position: "topRight",
  });
}
