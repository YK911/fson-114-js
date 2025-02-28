export const playerInfo = {
  player: 'Mango',
  time: 150,
};

// export default playerInfo;

export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error.message);
  }
};

export const load = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error.message);
  }
};

// export default {
//   save: save,
//   load: load,
// };

class LSInterface {
  constructor() {}

  load = key => {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error.message);
    }
  };
  save = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error.message);
    }
  };
}

// export default LSInterface;
