/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

const numbers = [
  1000,
  ...[1, 2, 3, "qwe"],
  2000,
  ...[4, 5, 6],
  3000,
  ...[7, 8, 9],
  ...[...[10, 11, 12]],
];
// console.table(numbers);

const temperatureMonday = [10, 12, 11];
const temperatureTuesday = [8, 8, 9];
const temperatureWednesday = [12, 10, 8];

const temperatureByThreeDay = [
  ...temperatureMonday,
  ...temperatureTuesday,
  ...temperatureWednesday,
];
// console.log("temperatureByThreeDay:", temperatureByThreeDay);

const user = {
  name: "Mango",
  city: "Kyiv",
  ...{
    city: "Lviv",
    street: "Mazepu",
    building: 10,
  },
};
// console.log("user:", user);

const registeredUser = {
  nickname: "YK",
  email: "example@email.com",
  phone: "+38 099 123-45-67",
};

const updateProfile = {
  nickname: "Ajax",
  phone: "+38 077 123-45-67",
};

const updatedInfo = {
  ...registeredUser,
  ...updateProfile,
};
// console.log("updatedInfo:", updatedInfo);

/**
 * Пошук найменшої або найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

const minTemp = Math.min(...temps);
// console.log("minTemp:", minTemp);
const maxTemp = Math.max(...temps);
// console.log("minTemp:", maxTemp);

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

// console.log("a: ", a);
// console.log("b: ", b);
// console.log(a[0] === b[0]);

a[0].x = 1000;

// console.log(b[0].x);

/**
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/**
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = { ...objA, ...objB };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

function showParams(a, b, c, ...args) {
  // console.log(arguments);
  console.log("showParams  args:", args);
}

// showParams("a", 1, true, { x: 10 }, [1, 2, 3]);
