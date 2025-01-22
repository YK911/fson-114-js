/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = "Mango";
const email = "mango@mail.com";

const credentials = {
  username,
  email,
};

// { username: "Mango", email: "mango@mail.com" }

// console.log(credentials);
// console.log(credentials.username);
// console.log(credentials.email);

/**
 * -------------------------
 */

const inputName = "color";

const objKey =
  "current" + inputName[0].toLocaleUpperCase() + inputName.slice(1);

const colorPickerData = {
  lightness: 0.1,
  darkness: 0.5,
};

colorPickerData[objKey] = "#000000";

console.log(colorPickerData);

// Selected option
const currentOptionIndex = select.options.selectedIndex;

option.textContent = select.options[currentOptionIndex].value;

select.addEventListener("change", selectHandler);

function selectHandler(event) {
  const select = event.currentTarget;
  const currentOptionIndex = select.options.selectedIndex;
  option.textContent = select.options[currentOptionIndex].value;
}
