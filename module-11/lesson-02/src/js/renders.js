import { breedRefs } from "./refs";

export function populateDatalist(breeds = []) {
  breedRefs.list.innerHTML = "";
  breeds.forEach(({ id, name }) => {
    const option = document.createElement("option");
    option.dataset.id = id;
    option.textContent = name;
    breedRefs.list.append(option);
  });
}
