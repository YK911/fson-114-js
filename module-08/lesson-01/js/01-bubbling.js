/**
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");

// parent.addEventListener("click", event => {
//   console.log("target", event.target);
//   console.log("currentTarget", event.currentTarget);
// });
parent.addEventListener(
  "click",
  event => {
    console.log("Worked on PARENT");
  },
  true
);

// child.addEventListener("click", event => {
//   console.log("target", event.target);
//   console.log("currentTarget", event.currentTarget);
// });
child.addEventListener(
  "click",
  event => {
    console.log("Worked on CHILD");
  },
  true
);

innerChild.addEventListener("click", event => {
  // event.stopPropagation();
  console.log("target", event.target);

  console.log("currentTarget", event.currentTarget);
});
