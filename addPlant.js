const plantSubmit = document.getElementById('plantSubmit');
const plantInputs = document.querySelectorAll('.plant__property');
const radioButtonsToxic = document.querySelectorAll('.plant_toxic');
const radioButtonsLocal = document.querySelectorAll('.plant_local');

plantSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let errors = [];
  let i = 0;

  for (let input of plantInputs) {
    if (
      input.value === null ||
      input.value.length === 0 ||
      input.value === 'default'
    ) {
      errors[
        i++
      ] = `Please provide plant ${input.dataset.formName} before submission`;
      input.parentElement.classList.add('alert');
      input.parentElement.classList.remove('success');
    } else {
      input.parentElement.classList.remove('alert');
      input.parentElement.classList.add('success');
    }
  }

  if (!radioButtonsToxic[0].checked && !radioButtonsToxic[1].checked) {
    errors[i++] = `Please provide plant toxicity before submission`;
    radioButtonsToxic[0].parentElement.parentElement.classList.add('alert');
    radioButtonsToxic[0].parentElement.parentElement.classList.remove(
      'success'
    );
  } else {
    radioButtonsToxic[0].parentElement.parentElement.classList.remove('alert');
    radioButtonsToxic[0].parentElement.parentElement.classList.add('success');
  }

  if (!radioButtonsLocal[0].checked && !radioButtonsLocal[1].checked) {
    errors[i++] = `Please provide plant location before submission`;
    radioButtonsLocal[0].parentElement.parentElement.classList.add('alert');
    radioButtonsLocal[0].parentElement.parentElement.classList.remove(
      'success'
    );
  } else {
    radioButtonsLocal[0].parentElement.parentElement.classList.remove('alert');
    radioButtonsLocal[0].parentElement.parentElement.classList.add('success');
  }

  if (errors.length > 0) {
    alert(errors[0]);
    return;
  }

  alert('Thank you for your submission, we will review it very soon !');
});
