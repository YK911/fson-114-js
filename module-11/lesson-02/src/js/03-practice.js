import "./axiosConfig/config";
import { breedRefs } from "./refs";

import { fetchBreeds, fetchCatInfo } from "./axiosConfig/services";
import "../common.css";

/**
 * https://thecatapi.com/
 *
 * 1) Створити сторінку яка при завантаженні робить запит на бекенд і оримує
 *  всі доступні breeds. https://api.thecatapi.com/v1/breeds
 *
 * 2) В інтерфейсі є форма пошуку з прив'язаним datalist з завантаженими breeds.
 *
 * 3) Користувач в формі вводить або обирає необхідний breed і при сабміті форми
 *  виконується GET запит за зображенням.
 *
 * 4) Після запиту під формою відображається картка з зображенням.
 *
 * 5) Під час запиту під формую відображається loader
 */

// Axios config

fetchBreeds();
breedRefs.form.addEventListener("submit", onSubmit);

// Functions

function renderCatCard({ name, image }) {
  breedRefs.card.innerHTML = `<div class="card">
        <img
          src="${image}"
          class="card-image"
          alt="${name}"
        />
        <div class="card-body">
          <h2 class="card-title">${name}</h2>
        </div>
      </div>`;
}

function onSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;

  const { breedInput } = form.elements;

  const selectedBreed = [...breedRefs.list.options].find(
    option => option.value === breedInput.value
  );

  const breedId = selectedBreed?.dataset?.id;

  const options = {
    params: {
      breed_ids: breedId,
    },
  };
  breedRefs.loader.classList.remove("hidden");
  breedRefs.card.innerHTML = "";

  fetchCatInfo(options)
    .then(catInfo => {
      if (catInfo[0].breeds.length === 0) {
        throw new Error("Зображення не знайдено 🫠");
      }

      renderCatCard({
        name: catInfo[0].breeds[0].name,
        image: catInfo[0].url,
      });
    })
    .catch(msg => {
      alert(msg);
    })
    .finally(() => {
      form.reset();
      breedRefs.loader.classList.add("hidden");
    });
}
