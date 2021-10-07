import { plantsArray } from "./scriptJSON.js";
import { Game } from "./game.js";

let game = new Game();

plantsArray.then((data) => {
	const plantsData = data;
	game.init(plantsData);
	// wait for click on submit
});
