function validatePass() {
  var y = document.forms["Form"]["password"].value;
  var passErr = document.getElementById("error-password");
  if (y.length >= 7) {
    passErr.innerHTML = "";
  }
  passErr.innerText = "Password must be at least 8 characters long";
  return true;
}

export default validatePass;
