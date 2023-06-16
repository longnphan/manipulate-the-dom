let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const mainTitleEl = document.querySelector("#main-title");
  mainTitleEl.textContent = "Hi, I'm DOM.";

  // Part 2
  document.body.style.backgroundColor = "goldenrod";

  // Part 3
  const favThingsEl = document.getElementById("favorite-things");
  favThingsEl.removeChild(favThingsEl.lastElementChild);

  // Part 4
  const specialClass = document.querySelectorAll(".special-title");
  for (let item of specialClass) {
    item.style.fontSize = "2rem";
  }

  // Part 5
  const pastRaces = document.querySelectorAll("#past-races li");
  for (let item of pastRaces) {
    if (item.textContent.toLowerCase() === "chicago") {
      item.parentNode.removeChild(item);
    }
  }

  // Part 6
  const pastRacesEl = document.getElementById("past-races");
  let newLi = document.createElement("li");
  newLi.textContent = "Denver";
  pastRacesEl.appendChild(newLi);

  // Part 7
  const mainEl = document.querySelector(".main");
  let newDiv = document.createElement("div");
  newDiv.classList.add("blog-post");

  let newh1 = document.createElement("h1");
  newh1.textContent = "Denver";
  newDiv.appendChild(newh1);

  let newP = document.createElement("p");
  newP.textContent = "I RELAXED AND DID'T DO MUCH";
  newDiv.appendChild(newP);
  mainEl.appendChild(newDiv);

  // Part 8
  const quoteEl = document.querySelector("#quote-title");
  quoteEl.addEventListener("click", randomQuote);

  // Part 9
  const blogPostClass = document.querySelectorAll(".blog-post");

  for (item of blogPostClass) {
    item.addEventListener("mouseout", function (e) {
      if (e.target.localName !== "div") return;
      e.target.classList.toggle("purple");
    });

    item.addEventListener("mouseenter", function (e) {
      if (e.target.localName !== "div") return;
      e.target.classList.toggle("red");
    });
  }
});
