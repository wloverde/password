// Assignment Code
var generateBtn = document.querySelector("#generate");

// list of password letters ands symbols
var letters = "qazwsxedcrfvtgbyhnujmikolp".split('');
var symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split('');
// add quotation mark to symbols array
symbols.push('"'); 

// Write password to the #password input
function generatePassword(){
  var newPass = '';
  var charArray = [];
  // I am presented with a series of prompts for password criteria
  // I select which criteria to include in the password
  var special = confirm("Would you like to use SPECIAL characers?");
  var upper = confirm("Would you like to use UPPERCASE letters?");
  var lower = confirm("Would you like to use LOWERCASE letters?");
  var number = confirm("Would you like to use NUMBERS?");
  
  // input should be validated and at least one character type should be selected
  if (!upper && !lower && !number && !special){
    alert("Password must contain at least 1 character type. Please try again")
    // return to shut function down early
    return
  };
  var passLength = prompt("How many Characters would you like your password to be?");
  var minLength = passLength < 8;
  var maxLength = passLength > 128;
  // assign confirmed characters into charArray
  
  if (upper){
    for (var i = 0; i < letters.length; i++){
      charArray.push(letters[i].toUpperCase())
    } 
  } 
  if (lower){
    for (var i = 0; i < letters.length; i++){
      charArray.push(letters[i])
    } 
  }
  if (number){
    for (var i = 0; i < 9; i++){
      charArray.push(i.toString())
    } 
  }
  if (special){
    for (var i = 0; i < symbols.length; i++){
      charArray.push(symbols[i])
    } 
  }
  
  // Length of password must be at least 8 characters and no more than 128 characters
  if ( minLength || maxLength){
    alert("Passwords must be between 8 and 128 characters long");
  } else if (!minLength && !maxLength){
    // password correct length, generate password
    for (var i=0; i < passLength; i++){
      console.log("charArray: "+ charArray + "\n " + charArray.length +"\n index number: "+ Math.floor(Math.random()*charArray.length) + "\n Random Character: "+ charArray[Math.floor(Math.random()*charArray.length)] + "\n newPass: " + newPass);
      newPass = newPass.concat(charArray[Math.floor(Math.random()*charArray.length)]);
    }
  } else {
    alert("INVALID INPUT: please type a number bewteen 8 and 128");
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
