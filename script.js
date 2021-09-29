const gameImage = document.getElementById('gameImage');

const answerInput1 = document.getElementById('answer1');
const answerInput2 = document.getElementById('answer2');
const answerInput3 = document.getElementById('answer3');
const answerInput4 = document.getElementById('answer4');
const answerText1 = document.getElementById('answerText1');
const answerText2 = document.getElementById('answerText2');
const answerText3 = document.getElementById('answerText3');
const answerText4 = document.getElementById('answerText4');
const answerInputs = [answerInput1, answerInput2, answerInput3, answerInput4];
const answerTexts = [answerText1, answerText2, answerText3, answerText4];

const submitButton = document.getElementById('answerSubmit');

plants = [
  {
    name: 'marguerite',
    picture:
      'https://cdn.pixabay.com/photo/2021/01/29/06/28/marguerite-5959944_960_720.jpg',
    bioType: 'annual',
    toxic: false,
    height: '40-100cm',
    flowerColor: 'white',
    local: false,
  },
  {
    name: 'marguerite2',
    picture:
      'https://cdn.pixabay.com/photo/2021/01/29/06/28/marguerite-5959944_960_720.jpg',
    bioType: 'annual',
    toxic: false,
    height: '40-100cm',
    flowerColor: 'white',
    local: false,
  },
  {
    name: 'marguerite3',
    picture:
      'https://cdn.pixabay.com/photo/2021/01/29/06/28/marguerite-5959944_960_720.jpg',
    bioType: 'annual',
    toxic: false,
    height: '40-100cm',
    flowerColor: 'white',
    local: false,
  },
  {
    name: 'marguerite4',
    picture:
      'https://cdn.pixabay.com/photo/2021/01/29/06/28/marguerite-5959944_960_720.jpg',
    bioType: 'annual',
    toxic: false,
    height: '40-100cm',
    flowerColor: 'white',
    local: false,
  },
  {
    name: 'marguerite5',
    picture:
      'https://cdn.pixabay.com/photo/2021/01/29/06/28/marguerite-5959944_960_720.jpg',
    bioType: 'annual',
    toxic: false,
    height: '40-100cm',
    flowerColor: 'white',
    local: false,
  },
  {
    name: 'marguerite6',
    picture:
      'https://cdn.pixabay.com/photo/2021/01/29/06/28/marguerite-5959944_960_720.jpg',
    bioType: 'annual',
    toxic: false,
    height: '40-100cm',
    flowerColor: 'white',
    local: false,
  },
];

function game() {
  // Copy plants array
  const plantsForTurn = plants.slice();
  // Copy radio button inputs array
  const answerInputsForTurn = answerInputs.slice();
  // Copy <span> text array
  const answerTextsForTurn = answerTexts.slice();
  // Initialize plant to guess for the game
  let plantToGuess = undefined;

  // 4 turn loop to assign a plant for each of the 4 radio buttos
  for (let i = 0; i < 4; i++) {
    plantToGuess = assignPlantToInput(
      plantsForTurn,
      plantToGuess,
      answerInputsForTurn,
      answerTextsForTurn,
      i
    );
  }

  console.log(plantToGuess);

  // Submit button on click event listener
  submitButton.addEventListener('click', () => {
    gameSubmit(plantToGuess);
  });
}

// Function assign plant to radio button input
function assignPlantToInput(
  plantsForTurn,
  plantToGuess,
  answerInputsForTurn,
  answerTextsForTurn,
  i
) {
  // Get index of plant to assign
  const plantIndex = getRandomNum(0, plantsForTurn.length);

  // Get index of radio button to assign
  const answerIndex = getRandomNum(0, answerInputsForTurn.length);

  // Store radio button for turn
  const plantRadioButton = answerInputsForTurn[answerIndex];
  // Store radio button text for turn
  const plantText = answerTextsForTurn[answerIndex];

  if (i === 0) {
    // On first turn, plant choosen is the plant to guess
    plantToGuess = plantsForTurn[plantIndex];
    // Change image to plant image to guess
    gameImage.src = plantToGuess['picture'];
    // Change radio button text to plant name
    plantText.innerHTML = plantToGuess['name'];
    // Change radio button value to plant name
    plantRadioButton.value = plantToGuess['name'];
  } else {
    const otherPlant = plantsForTurn[plantIndex];
    // Change radio button text to plant name
    plantText.innerHTML = otherPlant['name'];
    // Change radio button value to plant name
    plantRadioButton.value = otherPlant['name'];
  }

  // At the end of each assignements
  // Remove plant chosen from array to avoid selecting it again
  plantsForTurn.splice(plantIndex, 1);
  // Remove radio button from array to avoid selecting it again
  answerInputsForTurn.splice(answerIndex, 1);
  // Remove radio button text from array to avoid selecting it again
  answerTextsForTurn.splice(answerIndex, 1);

  // Return plant to guess to main game() function
  return plantToGuess;
}

// Function called when submit button is clicked
function gameSubmit(plantToGuess) {
  // Initialized variable to store the radio button which is checked
  let answerInputChecked = undefined;

  // Assign radio button checked to var
  for (let i = 0; i < 4; i++) {
    if (answerInputs[i].checked) {
      answerInputChecked = answerInputs[i];
      break;
    }
  }

  // Check if radio button checked value is equal to plant to guess name
  if (answerInputChecked.value === plantToGuess['name']) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

function getRandomNum(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

game();