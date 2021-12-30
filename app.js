const myForm = document.getElementsByClassName("form")[0];

const fName = document.getElementById("fname");
const lName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

const fNameError = document.querySelector("#fname + span.error");
const lNameError = document.querySelector("#lname + span.error");
const emailError = document.querySelector("#email + span.error");
const passwordError = document.querySelector("#password + span.error");

fName.addEventListener("input", function (event) {
  if (fName.validity.valid) {
    fNameError.textContent = ""; // Reset the content of the message
    fNameError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showFError();
  }
});

lName.addEventListener("input", function (event) {
  if (lName.validity.valid) {
    lNameError.textContent = ""; // Reset the content of the message
    lNameError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showLError();
  }
});

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showEError();
  }
});

password.addEventListener("input", function (event) {
  if (password.validity.valid) {
    passwordError.textContent = ""; // Reset the content of the message
    passwordError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showPError();
  }
});

function showFError() {
  if (fName.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    fNameError.textContent = "First Name cannot be empty";
  }
  // Set the styling appropriately
  fNameError.className = "error active";
}
function showLError() {
  if (lName.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    lNameError.textContent = "Last Name cannot be empty";
  }
  // Set the styling appropriately
  lNameError.className = "error active";
}
function showEError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "Email cannot be empty";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "Looks like this is not an email";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}
function showPError() {
  if (password.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    passwordError.textContent = "Password cannot be empty";
  }
  // Set the styling appropriately
  passwordError.className = "error active";
}
// following https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
// need to use label element to be able to show the error message
