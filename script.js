// // Assignment Code
// document.getElementById("btn").onclick = prompt(
//   "Please select Random Password critera"
// );

function promptUser() {
  var txt;
  var criteriaCheck = prompt("Please enter random password criteria");
  if (criteriaCheck == null || criteriaCheck == "") {
    confirm("User cancelled the prompt, using default criteria");
  } else {
    confirm("We will use " + criteriaCheck + " as your password criteria");
  }
}

lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
criteria = lowerCase.concat(upperCase, numbers);
var generateBtn = document.querySelector("#generate");

// var criteria = prompt("Please enter your password criteria");
// var criteria = [charaters];

// var charaters = [
//   [true, "Numbers", "0123456789"],
//   [true, "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
//   [true, "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
//   [true, "Symbols", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"]
// ];

//Generate password function
function generatePassword(passwordLength) {
  var pwd = "";
  function randomPassword() {
    for (var i = 0; i < passwordLength; i++) {
      pwd += criteria[Math.floor(Math.random() * criteria.length)];
    }
    return pwd;
  }
  password = randomPassword();
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(129);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
