// import "./userProfile.json";
// console.log(profile);

// const userName = "Mango";

// const userProfile = {
//   name: "Mango",
//   age: 24,
//   hobbies: ["tennis", "football", "swimming"],
//   checkAge() {
//     if (this.age < 18) {
//       console.log("Child");
//     } else {
//       console.log("Adult");
//     }
//   },
// };

// function checkAge(age) {
//   if (age < 18) {
//     console.log("Child");
//   } else {
//     console.log("Adult");
//   }
// }

// const res = JSON.stringify(userProfile);
// console.log(JSON.stringify(checkAge));

// const parsedData = JSON.parse(res);
// console.log(" parsedData:", parsedData);

/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

const chief = {
  cook: {
    name: "Heston Chan",
    imgUrl: "https://tasty-treats-backend.p.goit.global/HestonChan.png",
    imgWebpUrl: "https://tasty-treats-backend.p.goit.global/HestonChan.webp",
  },
  topic: {
    name: "Grilled, smoky, delicious barbecue",
    area: "Spanish",
    previewUrl: "https://tasty-treats-backend.p.goit.global/previewDish1.png",
    imgUrl: "https://tasty-treats-backend.p.goit.global/imgDish1.png",
    imgWebpUrl: "https://tasty-treats-backend.p.goit.global/imgDish1.webp",
    previewWebpUrl:
      "https://tasty-treats-backend.p.goit.global/previewDish1.webp",
  },
  _id: "647495d0c825f1570b04182d",
};

const lsData = localStorage.setItem("items", "Part 1, Part 2");
console.log("lsData:", lsData);

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */
const stringifiedNames = JSON.stringify(names);
localStorage.setItem(LS_KEY, stringifiedNames);

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */
const lsNames = localStorage.getItem(LS_KEY);
const parsedLSData = JSON.parse(lsNames);
console.log(" parsedLSData:", parsedLSData);

/**
 * Видалення
 */
setInterval(() => {
  localStorage.removeItem("items");
}, 3000);
/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};
localStorage.setItem("calculator", JSON.stringify(calculator));
const res1 = localStorage.getItem("calculator");
console.log(" res1:", res1);

setInterval(() => {
  localStorage.setItem(LS_KEY, JSON.stringify(chief));
}, 5000);
