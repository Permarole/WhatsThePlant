<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./styles/style.css" />
  <link rel="stylesheet" media="screen and (min-width: 1000px)" href="./styles/desktopStyle.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap" rel="stylesheet">
  <title>What's The Plant</title>
</head>

<body>
  <?php include 'header.php'; ?>
  <section class="addPlant">
    <h3 class="addPlant__intro">Add a new plant</h3>

    <form class="addPlantForm">
      <div class="addPlant__item">
        <label for="addPlant_image" class="addPlant__item__label">Picture
        </label>
        <input type="file" id="addPlant_image" name="addPlant_image" class="addPlant__item__input plant__property" data-form-name="picture" accept="image/png, image/gif, image/jpeg" />
      </div>

      <div class="addPlant__item">
        <label for="addPlant_name" class="addPlant__item__label">Name </label>
        <input type="text" id="addPlant_name" name="addPlant_name" class="addPlant__item__input plant__property" placeholder="Provide plant name" data-form-name="name" autocomplete="off" />
      </div>

      <div class="addPlant__item">
        <label for="addPlant_bioType" class="addPlant__item__label">Biotype
        </label>
        <select id="addPlant_bioType" name="addPlant_bioType" class="addPlant__item__input plant__property" data-form-name="biotype">
          <option value="default" disabled selected>
            ---Select biotype---
          </option>
          <option value="annual">Annual</option>
          <option value="biannual">Biannual</option>
          <option value="perennial">Perennial</option>
        </select>
      </div>

      <div class="addPlant__item">
        <p class="addPlant__item__label">Toxic</p>
        <div>
          <input type="radio" id="toxic_yes" value="yes" name="addPlant_toxic" class="plant_toxic" data-form-name="toxicity" />
          <label for="toxic_yes">Yes</label>
          <input type="radio" id="toxic_no" value="no" name="addPlant_toxic" class="plant_toxic" data-form-name="toxicity" />
          <label for="toxic_no">No</label>
        </div>
      </div>

      <div class="addPlant__item">
        <label for="addPlant_height" class="addPlant__item__label">Height
        </label>
        <input type="text" id="addPlant_height" name="addPlant_height" class="addPlant__item__input plant__property" placeholder="Provide plant height" data-form-name="height" autocomplete="off" />
      </div>

      <div class="addPlant__item">
        <label for="addPlant_color" class="addPlant__item__label">Color
        </label>
        <input type="text" id="addPlant_color" name="addPlant_color" class="addPlant__item__input plant__property" placeholder="Provide plant color" data-form-name="color" autocomplete="off" />
      </div>

      <div class="addPlant__item">
        <p class="addPlant__item__label">Local</p>
        <div>
          <input type="radio" id="local_yes" value="yes" name="addPlant_local" class="plant_local" data-form-name="location" />
          <label for="local_yes">Yes</label>
          <input type="radio" id="local_no" value="no" name="addPlant_local" class="plant_local" data-form-name="location" />
          <label for="local_no">No</label>
        </div>
      </div>

      <input type="submit" value="Submit plant" class="addPlant__submit" id="plantSubmit" />
    </form>
  </section>
  <?php include 'footer.php'; ?>
  <script src="./scripts/darkMod.js"></script>
  <!-- <script src="scriptJSON.js" type ="module" ></script> -->
  <script src="./scripts/addPlant.js"></script>
</body>

</html>