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
  var passLength = prompt("How many Characters would you like your password to be?");
  var minLength = passLength < 8;
  var maxLength = passLength > 128;
  // Length of password must be at least 8 characters and no more than 128 characters
  if ( minLength || maxLength){
    alert("Passwords must be between 8 and 128 characters long");
  } else if (!minLength && !maxLength){
    // User selects which criteria to include in the password
    // assign confirmed characters into charArray
    if (confirm("Would you like to use UPPERCASE letters?")){
      for (var i = 0; i < letters.length; i++){
        charArray.push(letters[i].toUpperCase())
      } 
    } 
    if (confirm("Would you like to use LOWERCASE letters?")){
      for (var i = 0; i < letters.length; i++){
        charArray.push(letters[i])
      } 
    }
    if (confirm("Would you like to use NUMBERS?")){
      for (var i = 0; i < 9; i++){
        charArray.push(i.toString())
      } 
    }
    if (confirm("Would you like to use SPECIAL characers?")){
      for (var i = 0; i < symbols.length; i++){
        charArray.push(symbols[i])
      } 
    }
    if (charArray.length === 0){
      alert("Password must contain at least 1 character type. Please try again")
      // return to shut function down early
      return
    }

    for (var i=0; i < passLength; i++){
      // console.log("charArray: "+ charArray + "\n " + charArray.length +"\n index number: "+ Math.floor(Math.random()*charArray.length) + "\n Random Character: "+ charArray[Math.floor(Math.random()*charArray.length)] + "\n newPass: " + newPass);
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
