/**
 * Деструктуризація об'єкта
 */

const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
  friends: {
    poly: {
      name: "Poly",
      isOnline: false,
    },
    ajax: {
      name: "Ajax",
      isOnline: true,
    },
  },
};

const pers = {
  nickname: "Pers",
  skills: {
    fireball: 100,
    elixir: 30,
  },
};
const { skills: persSkills } = pers;
// console.log("persSkills:", persSkills);

const { skills: userSkills } = user;
// console.log("userSkills:", userSkills);

// console.log(user.username);
// console.log(user.skills.js);
// console.log(user.friends.poly.name);

const { username } = user;
// console.log(" username:", username);

// const { skills } = user;
// console.log(" skills:", skills);

/**
 * Глибока деструктуризація об'єкта
 */

const {
  skills: { html, css, js },
  friends: {
    poly: { name, isOnline },
  },
} = user;

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);
// console.log("isOnline:", isOnline);
// console.log("name:", name);

/**
 * Деструктуризація масива
 */
const arr = [1, 2, 3, 4, 5];

const [, , , , value] = arr;
console.log(" value:", value);
// console.log(rest);

// console.log("first:", first);
// console.log("second:", second);

const car = {
  model: "Honda",
  price: 10_000,
  passengers: [
    {
      maxWeight: 100,
    },
    {
      maxWeight: 200,
    },
    {
      maxWeight: 400,
    },
    {
      maxWeight: 300,
    },
  ],
};

const {
  passengers: [{ maxWeight: firstElement }, { maxWeight: secondElement }],
} = car;
console.log(" one:", firstElement);
console.log(" two:", secondElement);
