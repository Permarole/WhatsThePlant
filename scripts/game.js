class Game {
    constructor(plantsData) {
        this.colorProperties = getComputedStyle(document.body);
        this.plantsData = plantsData;
        this.game = document.querySelector(".game");
        this.gameImage = document.getElementById("gameImage");
        this.answersButtons = document.querySelectorAll(".game__answers__item");
        this.submitButton = document.getElementById("answerSubmit");
        this.descriptionParagraph = document.querySelector(".game_description");
        this.restartButton = document.querySelector(
            ".game_imageContainer__restart"
        );
        this.plantsInfos = this.getplantsInfos();
        this.plantToDefine = this.getOnePlant();
        this.plantDescription = this.getDescription();
        this.initDescription();
        this.eventListener = this.initEventListenerOnSubmit();
        this.restartEvent = this.initEventListenerOnRestart();
        this.initImage();
        this.initButton();
    }

    reset() {
        this.displayPlantDescription();
        this.resetButton();
        this.displaySubmit();
        this.displayRestartButton();
        this.plantsInfos = this.getplantsInfos();
        this.plantToDefine = this.getOnePlant();
        this.plantDescription = this.getDescription();
        this.initImage();
        this.initButton();
        this.initDescription();
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
            index++;
        }
    }

    initDescription() {
        this.descriptionParagraph.innerHTML = this.plantDescription;
        console.log(this.descriptionParagraph);
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

    getDescription() {
        console.log(
            this.plantToDefine[Object.keys(this.plantToDefine)[0]].description
        );
        return this.plantToDefine[Object.keys(this.plantToDefine)[0]]
            .description;
    }

    displayPlantDescription() {
        this.descriptionParagraph.classList.toggle("none");
    }

    displayRestartButton() {
        this.restartButton.classList.toggle("none");
    }

    displaySubmit() {
        this.submitButton.classList.toggle("none");
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
        this.submitButton.addEventListener("click", () => {
            this.handleSubmit();
        });
    }

    initEventListenerOnRestart() {
        this.restartButton.addEventListener("click", () => {
            this.reset();
        });
    }

    handleSubmit() {
        /* handle game's behaviors while submitted :
        - check wich button has been checked 
        - calls updateButton  (cf updateGame descripton)*/
        console.log(this.isCheckeded());
        if (this.isCheckeded()) {
            for (let answerButton of this.answersButtons) {
                console.log(answerButton);
                if (answerButton.children[0].checked) {
                    this.updateButton(answerButton, true);
                } else {
                    this.updateButton(answerButton);
                }
            }

            this.displayPlantDescription();
            this.displayRestartButton();
            this.displaySubmit();
        }
    }

    isCheckeded() {
        for (let button of this.answersButtons) {
            if (button.children[0].checked) {
                return true;
            }
        }
        return false;
    }

    updateButton(button, checked = false) {
        // Update button background color based on checked value and answer correctness
        if (checked && this.checkAnswer(button.children[0])) {
            button.children[1].classList.toggle("rightAnswer");
        } else if (checked && !this.checkAnswer(button.children[0])) {
            button.children[1].classList.toggle("wrongAnswer");
        } else if (this.checkAnswer(button.children[0])) {
            button.children[1].classList.toggle("rightAnswer");
        } else {
            button.children[1].classList.toggle("notAnswered");
        }
        console.log(button.children[1].classList);
    }

    resetButton() {
        for (let answerButton of this.answersButtons) {
            answerButton.children[1].classList.remove("rightAnswer");
            answerButton.children[1].classList.remove("notAnswered");
            answerButton.children[1].classList.remove("wrongAnswer");
        }
    }

    checkAnswer(clicked) {
        /* Return boolean
        Check input checked value is equal to plant name to define */
        return (
            clicked.value ===
            this.plantToDefine[Object.keys(this.plantToDefine)].name
        );
    }
}

export { Game };
