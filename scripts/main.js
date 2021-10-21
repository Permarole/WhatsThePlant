import { plantsArray } from "./scriptJSON.js";
import { Game } from "./game.js";

plantsArray.then((data) => {
    const plantsData = data;
    let game = new Game(plantsData);
    // wait for click on submit
});

const indexReset = document.querySelector(".game_imageContainer__restart");
const inputToggle = document.querySelector(".inputToggle");

console.log(indexReset);
console.log(menuToggle);

inputToggle.addEventListener("click", () => {
    indexReset.classList.toggle("indexDown");
});
