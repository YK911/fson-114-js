/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
};

// Object.freeze(playlist);

// console.log(playlist);

playlist.name = "My wonderful playlist";

function changePlaylistName(playlist, newName) {
  // playlist = { . . . }
  // newName = "My wonderful playlist"

  playlist.name = newName;
}

changePlaylistName(playlist, "My wonderful playlist");

// console.log("playlist:", playlist.userName);
playlist.createdBy = "Mango";
console.log("playlist:", playlist);

const airplane = {
  manufactor: "Boenig",
  model: "737",
  airname: "UA-PSA",
  crew: {
    count: 3,
    rating: ["senior cabin crew", "junior cabin crew"],
  },
  pilots: [
    {
      capitan: {
        name: "Mango",
        hours: 10_000,
      },
      hasLicence: true,
    },
    {
      copilot: {
        name: "Ajax",
        hours: 1_000,
      },
      hasLicence: true,
    },
  ],
  wings: 2,
  seats: 186,
  cabinClasses: ["1st class", "business class", "econom class"],
  laggageCapacity: 1_500,
  engines: {
    power: 1_000,
    resouce: 100_000,
    fuelConsuption: "100 l/hour",
  },
};

// console.log(airplane.laggageCapacity);
// console.log("Has licence:", airplane.pilots[1].hasLicence);

// console.log("Fuel consumption:", airplane["engines"]["fuelConsuption"]);

const pilots = ["Mango", "Poly"];
pilots["hasLicence"] = true;

// console.log("pilots:", pilots);
// console.log("pilots:", pilots["hasLicence"]);

function checkLicence(pilot) {
  return pilot.hasLicence ? "Horray we can fly" : "❌ Oooops problem";
}

// console.log(checkLicence.name);

/**
 * -----------------------------------
 */
const propertyName = "tracks";

/**
 * -----------------------------------
 */
function foo(values) {
  // console.log(values);
  // console.log(values.a);
  // console.log(values.b);
}
