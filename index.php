<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" media="screen and (min-width: 1000px)" href="desktopStyle.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap" rel="stylesheet">
  <title>What's The Plant</title>
</head>

<body>
  <?php include 'header.php'; ?>
  <section class="game">
    <h3 class="game__intro">Test your knowledge:</h3>
    <div class="game__imageContainer">
      <button class="game_imageContainer__restart none">
        <img src="./assets/restart.svg" alt="">
      </button>
      <img src="./assets/plant_marguerite.jpg" alt="Plant you have to determine" class="game__imageContainer__img" id="gameImage" />
    </div>
    <div class="game__answers">
      <label class="game__answers__item" id="answer1label">
        <input type="radio" id="answer1" value="answer1" name="user_answer" />
        <span class="game__answers__item__text" id="answerText1">lorem</span>
      </label>
      <label class="game__answers__item" id="answer2label">
        <input type="radio" id="answer2" value="answer2" name="user_answer" />
        <span class="game__answers__item__text" id="answerText2">lorem</span>
      </label>
      <label class="game__answers__item" id="answer3label">
        <input type="radio" id="answer3" value="answer3" name="user_answer" />
        <span class="game__answers__item__text" id="answerText3">lorem</span>
      </label>
      <label class="game__answers__item" id="answer4label">
        <input type="radio" id="answer4" value="answer4" name="user_answer" />
        <span class="game__answers__item__text" id="answerText4">lorem</span>
      </label>
    </div>
    <p class="game_description none"></p>
    <input type="Submit" class="game__answers__submit" id="answerSubmit" />
  </section>

  <?php include 'footer.php'; ?>
  <script src="darkMod.js"></script>
  <!-- <script src="scriptJSON.js" type ="module" ></script> -->
  <script src="main.js" type="module"></script>
</body>

</html>