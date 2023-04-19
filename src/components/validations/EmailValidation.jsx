function EmailValidation() {
  var emailField = document.getElementById("user-email");
  var emailError = document.getElementById("error-msg");
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (validEmail.test(emailField.value)) {
    emailError.innerHTML = "";
  } else {
    emailError.innerHTML = "Email is invalid";
    return false;
  }
}
export default EmailValidation;
