const plantSubmit = document.getElementById('plantSubmit');
const plantInputs = document.querySelectorAll('.plant__property');
const radioButtons = document.querySelectorAll('input[type="radio"]');

plantSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  for (let input of plantInputs) {
    if (
      input.value === null ||
      input.value.length === 0 ||
      input.value === 'default'
    ) {
      alert(`Please provide plant ${input.dataset.formName} before submission`);
      return;
    }
  }

  alert('Thank you for your submission, we will review it very soon !');
});
