// Assignment Code
var generateBtn = document.querySelector("#generate");

// list of password letters ands symbols
var letters = "qazwsxedcrfvtgbyhnujmikolp";
var symbols = " !#$%&'()*+,\\-\"./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function generatePassword() {
  var newPass = '';
  var passPool = '';
  // I am presented with a series of prompts for password criteria
  var passLength = Number(prompt("How many Characters would you like your password to be?"));
  var minLength = passLength < 8;
  var maxLength = passLength > 128;
  // Length of password must be at least 8 characters and no more than 128 characters
  if (isNaN(passLength)) {
    alert("INVALID INPUT: please type a number bewteen 8 and 128");
    return
  }
  if (minLength || maxLength) {
    alert("Passwords must be between 8 and 128 characters long");
    return
  }
  // User selects which criteria to include in the password
  // assign confirmed characters into charArray
  if (confirm("Would you like to use UPPERCASE letters?")) {
    passPool += letters.toUpperCase();
  }
  if (confirm("Would you like to use LOWERCASE letters?")) {
    passPool += letters;
  }
  if (confirm("Would you like to use NUMBERS?")) {
    passPool += '1234567890';
  }
  if (confirm("Would you like to use SPECIAL characers?")) {
    passPool += symbols;
  }
  if (passPool.length === 0) {
    alert("Password must contain at least 1 character type. Please try again")
    // return to shutdown function early
    return
  }

  for (var i = 0; i < passLength; i++) {
    var randomChar = function () {
      return Math.floor(Math.random() * passPool.length);
    }
    newPass += passPool[randomChar()];
  }


  return newPass;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
