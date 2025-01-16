/**
 * Методи масиву
 *
 * - join()
 * - split()
 * - slice()
 * - concat()
 * - indexOf()
 * - push() | pop()
 * - shift() | unshift()
 */

// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

// const joinArr = courses.join("");
// console.log("joinArr:", joinArr);

// const str = "JavaScript is awesome!";
// console.log("str:", str);
// const arrFromStr = str.split(" ");
// const reversedArr = arrFromStr.reverse();
// const reversedStr = reversedArr.join(" ");
// console.log("reversedStr:", reversedStr);

// const updatedCourses = courses.slice(0, -1);
// console.log("updatedCourses:", updatedCourses);
// console.log(courses === updatedCourses);

// const newCourses = ["Design", "Python", "Math"];

// const updatedCourses = courses.concat(newCourses);
// const updatedCourses = newCourses.concat(courses);
// console.table(updatedCourses);
// const searchIdx = courses.indexOf("JavaScript");
// console.log("searchIdx:", searchIdx);

// const arr1 = courses.slice(0, searchIdx + 1).join("-");
// console.log("arr1:", arr1);

// const arr2 = courses.slice(searchIdx + 1).join(",");
// console.log("arr2:", arr2);

// const resultStr = arr1 + " | " + arr2;
// console.log("resultStr:", resultStr);

// FIFO -> First in Forst Out || queue
// LIFO -> Last in First Out  || stack
const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
courses.push("Java");
const res1 = courses.push("Design", "Python");
// console.log("res1:", res1);

// console.log("courses:", courses);
const res2 = courses.pop();
// console.log("courses:", courses);
// console.log("res2:", res2);
courses.shift();
console.log("courses:", courses);
