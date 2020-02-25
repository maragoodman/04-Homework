var generateBtn = document.querySelector("#generate");
var passwordResult = "";
// create array for lowercase english chars
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&&*()";
var numOfChars;
var possiblePasswordCharacters = "";
//Get the checkboxes and store them in variables
var generateLowerCase = document.getElementById("inputLowerCase");
var generateUpperCase = document.getElementById("inputUpperCase");
var generateNumbers = document.getElementById("inputNumbers");
var generateSymbols = document.getElementById("inputSymbols");
//Check if an input for a character is pressed and if it is add to the validCriteria variable
function generateValidCriteria() {
  if (generateLowerCase.checked) {
    possiblePasswordCharacters += lowerCaseLetters;
  }
  if (generateUpperCase.checked) {
    possiblePasswordCharacters += upperCaseLetters;
  }
  if (generateNumbers.checked) {
    possiblePasswordCharacters += numbers;
  }
  if (generateSymbols.checked) {
    possiblePasswordCharacters += symbols;
  }
}
// generate password
function generatePassword() {
  possiblePasswordCharacters = "";
  getPrompts();
  generateValidCriteria();
  buildPassword();
  return passwordResult;
}
function getPrompts() {
  // get prompts from user
  // length 8 -128
  numOfChars = prompt("how many charecters do you want?");
}
function buildPassword() {
  // check for number and proper length of pass
  if (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128) {
    if (
      generateLowerCase.checked ||
      generateUpperCase.checked ||
      generateNumbers.checked ||
      generateSymbols.checked
    ) {
      // TO-DO: check for user password preference
      possiblePasswordCharacters.split("");
      addCharFromArray(numOfChars);
    } else {
      alert("Error, please define password criteria.");
    }
  }
}

// add char from array func
function addCharFromArray(length) {
  // build pass
  for (var i = 0; i < length; i++) {
    passwordResult += getRandomFromArray(possiblePasswordCharacters);
  }
}
// utility func to get a random element from array
function getRandomFromArray(arr) {
  return arr[parseInt(Math.floor(Math.random() * arr.length))];
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordResult = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
