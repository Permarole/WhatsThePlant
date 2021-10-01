import { plantsArray } from "./scriptJSON.js";
import { Game } from "./game.js"

plantsArray.then((data) => {
	const plantsData = data;
	let game = new Game(plantsData);
    game.init()
    // wait for click on submit
});


