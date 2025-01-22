/**
 * Об'єкти
 *
 * - Тип даних за посиланням ✅
 * - Масиви і функції - це об'єкти ✅
 */

/**
 * --------------------------
 */

// ? Клонувати обʼєкти потрібно для забезпечення імутабельністі коду

const accountUserA = {
  name: "Mango",
  age: 12,
  isOnline: false,
  password: "qwe+123",
  playTime: {
    hours: 10,
    minutes: 1,
  },
};

// const accountUserB = accountUserA;
const accountUserB = { ...accountUserA };
// TODO: deep clone

accountUserA.games = ["CS GO", "Dota", "LA2"];
console.log("userA", accountUserA);

const newClone = structuredClone(accountUserA);
console.log("newClone:", newClone);

newClone.playTime.hours = 1;

// console.log(accountUserB === accountUserA);

accountUserB.name = "Poly";
accountUserB.password = "zxc+098";

accountUserB.playTime.hours = 12;

// console.log("userB", accountUserB);

// console.log([] !== []);
// console.log({} !== {});

// const arr = [1, 2, 3];

// function foo() {
//   console.log("hello");
// }
