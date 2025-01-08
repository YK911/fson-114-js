/**
 * Блокова область видимості змінних
 */

function f1() {
  const c = 15;
}

if (true) {
  const a = 5;
  // console.log(a);
  // console.log(b);
  // console.log(c);
}

if (true) {
  const b = 10;
  // console.log(a);
  // console.log(b);
  // console.log(c);
}

// console.log(a);
// console.log(b);
// console.log(c);
