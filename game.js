class Game {
	constructor(plantsData) {
		this.colorProperties = getComputedStyle(document.body);
		this.plantsData = plantsData;
		this.game = document.querySelector(".game");
		this.gameImage = document.getElementById("gameImage");
		this.answersButtons = document.querySelectorAll(".game__answers__item");
		this.submitButton = document.getElementById("answerSubmit");
		this.plantsInfos = this.getplantsInfos();
		this.plantToDefine = this.getOnePlant();
		this.eventListener = this.initEventListenerOnSubmit();
	}

	init() {
		/* Init content in :document div :
        - set image
        - set value background color for the buttons */

		this.initImage();
		this.initButton();
	}

	initImage() {
		/* Init content in document div : set image source*/
		this.gameImage.src =
			this.plantToDefine[Object.keys(this.plantToDefine)[0]].picture;
	}

	initButton() {
		/* For every button selected in this.answersButtons:
         set value from this.plantsInfos and set span's text and background color depending on darkmode */
		let index = 0;
		for (let button of this.answersButtons) {
			let plant = this.plantsInfos[index];
			button.children[0].value = plant[Object.keys(plant)[0]].name; // children[0] >>>> input, set value
			button.children[1].innerHTML = plant[Object.keys(plant)[0]].name; // children[1] >>>> span,  set yext
			if (button.children[1].classList.contains("darkModeButton")) {
				// check for class darkModeButton
				// set dark background
				button.children[1].style.backgroundColor =
					this.colorProperties.getPropertyValue(
						"--button-dark-color"
					);
			} else {
				// set default background
				button.children[1].style.backgroundColor =
					this.colorProperties.getPropertyValue("--bg-color");
			}
			index++;
		}
	}

	getplantsInfos() {
		/* get 4 random element from this.plantsData :
        using set : get 4 uniques elements from this.plantsData
        return an array thanks to the method Array.from() */
		const set = new Set();
		while (set.size < 4) {
			set.add(
				this.plantsData[
					Object.keys(this.plantsData)[
						Math.floor(Math.random() * this.plantsData.length)
					]
				]
			);
		}
		return Array.from(set);
	}

	getOnePlant() {
		/* return one plant from this.plantsData using one random name of this.plantName */
		let plant =
			this.plantsInfos[
				Math.floor(Math.random() * this.plantsInfos.length)
			];

		return plant;
	}

	initEventListenerOnSubmit() {
		/* init event listener on submit button, call function handleSubmit on Click */
		this.submitButton.addEventListener("click", this.handleSubmit);
	}

	handleSubmit() {
		/* handle game's behaviors while submitted :
        - check wich button has been checked 
        - calls updateButton  (cf updateGame descripton)*/
		for (let answerButton of this.answersButtons) {
			if (answerButton.children[0].checked) {
				this.updateButton(answerButton, true);
			} else {
				this.updateButton(answerButton);
			}
		}

		this.displayPlantDescription();
	}

	updateButton(button, checked = false) {
		// Update button background color based on checked value and answer correctness
		if (checked && this.checkAnswer(button.children[0])) {
			button.children[1].style.backgroundColor =
				this.colorProperties.getPropertyValue("--primary-color");
		} else if (checked && !this.checkAnswer(button.children[0])) {
			button.children[1].style.backgroundColor =
				this.colorProperties.getPropertyValue("--accent-color");
		} else {
			button.children[1].style.backgroundColor =
				this.colorProperties.getPropertyValue("--button-dark-color");
		}
	}

	displayPlantDescription() {
		this.game.append(`<p>${this.plantToDefine.description}</p>`);
	}

	checkAnswer(clicked) {
		/* Return boolean
        Check input checked value is equal to plant name to define */
		return clicked.value === this.plantToDefine.name;
	}
}

export { Game };
