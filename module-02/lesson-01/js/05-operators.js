/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

const res1 = true && true;
const res2 = true && false;
const res3 = false && true;
const res4 = false && false;

// console.log("res1:", res1);
// console.log("res2:", res2);
// console.log("res3:", res3);
// console.log("res4:", res4);

// console.log(Boolean(true)); // true

// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false

// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true

/**
 * --------------------------------
 */

// console.log(5 && 4);
// console.log(5 && "mango");
// console.log(0 && "mango");

/**
 * --------------------------------
 */
console.log("\n");

// const res01 = true || true;
// const res02 = true || false;
// const res03 = false || true;
// const res04 = false || false;

// console.log("res01:", res01);
// console.log("res02:", res02);
// console.log("res03:", res03);
// console.log("res04:", res04);

// console.log(false || 5);
// console.log(false || null);
// console.log(null || 0);
// console.log(5 || 0);

/**
 * --------------------------------
 */

// console.log(+"100");
// console.log(!!5);

// 1 Boolean(5) -> true
// 2 !true -> false

// console.log(!false);
// 1 Boolean(false) -> false
// 2 !false -> true

// const response = "ok";
// const userProfile = {
//   hasNotification: false,
// };

// const isValueFalsy = !!response;
// console.log("isValueFalsy:", isValueFalsy);

// if (isValueFalsy) {
//   userProfile.hasNotification = true;
// }
// console.log("userProfile:", userProfile);

/**
 * --------------------------------
 */

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);
