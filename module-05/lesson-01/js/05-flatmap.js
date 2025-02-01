/**
 * Метод flatMap
 */

const tweets = [
  {
    id: "000",
    likes: 5,
    tags: ["js", "nodejs"],
  },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const tags = tweets.flatMap((tweet, index, array) => {
  return tweet.tags;
});
// console.log(tags);

const updatedTweets = tweets.map((tweet, index, array) => {
  // tweet.likes += 1
  return {
    ...tweet,
    likes: tweet.likes + 1,
    tags: tweet.tags.slice(0, -1),
  };
});
// console.log("updatedTweets  updatedTweets:", updatedTweets);
// console.log("ORIGINAL:", tweets);
const url =
  "https://pixabay.com/api/?key=15249615-5ccf49bef51d4f01888f64cb2&q=yellow+flowers&image_type=photo";

fetch(url)
  .then(resp => {
    return resp.json();
  })
  .then(data => {
    const tags = data.hits[0].tags.split(",");
    console.log("tags:", tags);
  });
