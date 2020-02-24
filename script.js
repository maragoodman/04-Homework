var generateBtn = document.querySelector("#generate");
var passwordResult = "";
// create array for lowercase english chars
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = lowerCaseLetters.split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upperCaseLetters.split("");
var numbers = "0123456789";
var numbersArray = numbers.split("");
var symbols = "!@#$%^&&*()";
var symbolsArray = symbols.split("");
var numOfChars;

//Store the character information in seperate variables
// var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
// var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "0123456789";
// var symbols = "!@#$%^&&*()";
// var validCriteria = "";

//Check if an input for a character is pressed and if it is add to the validCriteria variable
function generateValidCharacters() {
  var generateLowerCase = document.getElementById("inputLowerCase").checked;
  var generateUpperCase = document.getElementById("inputUpperCase").checked;
  var generateNumbers = document.getElementById("inputNumbers").checked;
  var generateSymbols = document.getElementById("inputSpecials").checked;

  if (generateLowerCase) {
    numOfChars += lowerCaseLetters;
  } else if (generateUpperCase) {
    numOfChars += upperCaseLetters;
  } else if (generateNumbers) {
    numOfChars += numbers;
  } else if (generateSymbols) {
    numOfChars += symbols;
  } else {
    alert("Please include at least one type of character.");
  }
}
// generate password
function generatePassword() {
  getPrompts();
  var pass = buildPassword();
  return pass;
}
function getPrompts() {
  // get prompts from user
  // length 8 -128
  numOfChars = prompt("how many charecters do you want?");
}
function buildPassword() {
  // check for number and proper length of pass
  if (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128) {
    for (var i = 0; i < numOfChars; i++) {
      // TO-DO: check for user password preference
      addCharFromArray(generateValidCharacters);
    }
  }
  return passwordResult;
}
// add char from array func
function addCharFromArray(arr) {
  // build pass
  passwordResult += getRandomFromArray(lowerCaseArray);
}
// utility func to get a random element from array
function getRandomFromArray(arr) {
  return arr[parseInt(Math.random() * arr.length)];
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
