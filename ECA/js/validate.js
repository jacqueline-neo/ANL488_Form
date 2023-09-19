const form = document.querySelector('.requires-validation');

form.addEventListener('submit', function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    // Form is valid
    event.preventDefault();

    // Get the selected event
    const eventSelect = document.querySelector('.form-select');
    const selectedEvent = eventSelect.options[eventSelect.selectedIndex].text;

    // Get other input values (age, gender, etc.)
    const age = document.querySelector('input[name="age"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const occupation = document.querySelector('select[name="occupation"]').value;
    const hypertension = document.querySelector('input[name="hypertension"]:checked').value;
    const smoking = document.querySelector('input[name="smoking"]:checked').value;
    const diagnosisCategory = document.querySelector('input[name="diagnosis_category"]').value;

    // Modify the success message based on the input values and context
    let successMessage = 'Thank you for your submission.\n\n';
    successMessage += 'Age: ' + age + '\n';
    successMessage += 'Gender: ' + gender + '\n';
    successMessage += 'Occupation: ' + occupation + '\n';
    successMessage += 'Hypertension: ' + hypertension + '\n';
    successMessage += 'Smoking: ' + smoking + '\n';
    successMessage += 'Diagnosis Category: ' + diagnosisCategory + '\n';
    successMessage += 'Selected Event: ' + selectedEvent;

    // Update the success modal body with the modified message
    const successModalBody = document.querySelector('.modal-body');
    successModalBody.textContent = successMessage;

    // Show the success modal
    $('#success-modal').modal('show');
  }

  form.classList.add('was-validated');
});

