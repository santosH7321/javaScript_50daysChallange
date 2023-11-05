//Write a function to validate a form on submit event.

function validateForm(event) {
    event.preventDefault(); // prevent the form from submitting
    const form = event.target; // get the form element
    let isValid = true; // initialize a flag for validation
    
    // loop through the form elements
    for (let i = 0; i < form.elements.length; i++) {
      const input = form.elements[i];
      const value = input.value.trim(); // trim the input value
      
      // if input is required and empty
      if (input.hasAttribute("required") && value === "") {
        isValid = false; // mark validation as failed
        input.classList.add("invalid"); // add invalid class to input
      } else {
        input.classList.remove("invalid"); // remove invalid class from input
      }
    }
    
    // show success or error message based on validation
    const message = document.getElementById("message");
    if (isValid) {
      message.classList.remove("error");
      message.innerText = "Form submitted successfully!";
    } else {
      message.classList.add("error");
      message.innerText = "Please fill out all required fields.";
    }
  }
  
  // Test case: attach the validateForm function to the submit event of a form element
  const form = document.getElementById("myForm");
  form.addEventListener("submit", validateForm);