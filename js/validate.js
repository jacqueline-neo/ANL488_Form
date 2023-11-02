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
    const treatmentCategory = document.querySelector('input[name="treatment_category"]').value;

    // Modify the success message based on the input values and context
    let successMessage = 'Thank you for your submission.\n\n';
    successMessage += 'Age: ' + age + ',\n';
    successMessage += 'Gender: ' + gender + ',\n';
    successMessage += 'Occupation: ' + occupation + ',\n';
    successMessage += 'Hypertension: ' + hypertension + ',\n';
    successMessage += 'Smoking: ' + smoking + ',\n';
    successMessage += 'Diagnosis Category: ' + diagnosisCategory + ',\n';

    if (treatmentCategory) {
      successMessage += 'Treatment Category: ' + treatmentCategory;
    } else {
      successMessage += 'Treatment Category: Not specified';
    }

    successMessage += '\nPlease refer to: <a class="nav-link" href="index.html#tips-section">Tips for CKD Management</a> for the recommended call-to-action';

    // Update the success modal body with the modified message
    const successModalBody = document.querySelector('.modal-body');
    successModalBody.innerHTML = successMessage;

    // Show the success modal
    $('#success-modal').modal('show');
  }

  form.classList.add('was-validated');
});

document.addEventListener("DOMContentLoaded", function () {
  const ckdYesRadio = document.getElementById("ckdYes");
  const ckdNoRadio = document.getElementById("ckdNo");
  const treatmentCategorySection = document.getElementById("treatmentCategorySection");
  const diagnosisCategorySection = document.getElementById("diagnosisCategorySection");

  // Function to show or hide sections based on the CKD question
  function toggleSections() {
    if (ckdYesRadio.checked) {
      treatmentCategorySection.style.display = "block";
      diagnosisCategorySection.style.display = "none";
    } else if (ckdNoRadio.checked) {
      treatmentCategorySection.style.display = "none";
      diagnosisCategorySection.style.display = "block";
    }
  }

  // Initial call to set the initial state
  toggleSections();

  // Add event listeners to the CKD radio buttons to handle changes
  ckdYesRadio.addEventListener("change", toggleSections);
  ckdNoRadio.addEventListener("change", toggleSections);
});
