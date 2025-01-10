/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

const username = "Jacob Mercer";
console.log(username.startsWith("Ja"));
console.log(username.endsWith("er"));
console.log(username.includes("ob"));

// console.log("username.length:", username.length);

const firstUserNameChar = username[0];
// console.log("firstUserNameChar:", firstUserNameChar);

const lastUserNameChar = username[username.length - 1];
// console.log("lastUserNameChar:", lastUserNameChar);

const res = username.slice();
// console.log("res:", res);

const indexOfSpace = res.indexOf(" ");
// console.log("indexOfSpace:", indexOfSpace);

const firstPhrase = res.slice(0, indexOfSpace);
// console.log("firstPhrase:", firstPhrase);
const lastPhrase = res.slice(indexOfSpace + 1);
// console.log("lastPhrase:", lastPhrase);

const fullPhrase = `${firstPhrase}${lastPhrase}`;
// console.log("fullPhrase:", fullPhrase);

const withoutSpace = res.replace(" ", "");
// console.log("withoutSpace:", withoutSpace);

const allLowerCaseLetters = username.toLowerCase();
// console.log("allLowerCaseLetters:", allLowerCaseLetters);
const allUpperCaseLetters = username.toUpperCase();
// console.log("allLowerCaseLetters:", allUpperCaseLetters);

function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
  // ipsum -> i | I + ipsum | psum = Ipsum
}

const res2 = capitalise("mango");
// console.log("res2:", res2);

const userTextToArr = text.textContent.split(" ");
// console.log("userTextToArr:", userTextToArr);

let transformedStr = "";

for (let index = 0; index < userTextToArr.length; index++) {
  const capitaliseWord = capitalise(userTextToArr[index]);
  transformedStr += capitaliseWord + " ";
}

// console.log(transformedStr.length);
// console.log(transformedStr.trim().length);

// console.log(transformedArr);

// const res3 = transformedArr.join(" ");
// console.log(res3);

const autoFromDB = "BMW";

userNickname.addEventListener("blur", event => {
  const inputValue = event.target.value;

  const isInDB = autoFromDB.toUpperCase() === inputValue.toUpperCase();

  const res = isInDB
    ? "В базі даних автомобіль є"
    : "В базі даних автомобіль відсутній";

  console.log(res);
});
