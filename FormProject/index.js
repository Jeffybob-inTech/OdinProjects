const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const passwordConformation = document.getElementById("passwordConformation");
const passwordConformationErrorText = document.getElementById("passwordConformationErrorText");
const signUpForm = document.getElementById("signUpForm")
const submitButton = document.getElementById("submitButton");
const invalidInput = document.querySelectorAll('input:invalid');

passwordInput.addEventListener("input", function(){
  passwordConformation.pattern = this.value;
  console.log(this.value)
})
submitButton.addEventListener("click", function(){
  if(passwordConformation.value != passwordInput.value){
    passwordConformation.setCustomValidity("Passwords must match")
  }
  else if(passwordConformation.value == passwordInput.value){
    passwordConformation.setCustomValidity("")
    passwordConformation.reportValidity();
  }
})
