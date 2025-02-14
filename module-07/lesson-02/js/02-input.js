/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName = document.querySelector(".js-user-name");
console.dir(userName);

userName.addEventListener("input", event => {
  console.log("Input:", event.data);

  const input = event.currentTarget;
  const result = input.value.replace(" ", "+");

  input.value = result;
});

userName.addEventListener("blur", event => {
  const input = event.currentTarget;
  console.log("Blur:", input.value);
});

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */
userName.addEventListener("blur", onBlur);

function onBlur(event) {
  const input = event.target;
  if (input.value === "") {
    alert("⚠️ Please enter your name");
    return;
  }

  alert(`Hello user: ${input.value}`);
  input.value = "";
  fetchData();
}

let value = "";

function fetchData() {
  value = "Some text";

  return 1 + 2;
}

function render() {
  desc.textContent = value;
}

const result = fetchData();

renderBtn.onclick = () => {
  render();
  fetchData();
};
renderBtn.onclick = null;
