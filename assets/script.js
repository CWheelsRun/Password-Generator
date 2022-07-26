// Assignment code here

function generatePassword() {

// create arrays for each type of character

  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", ",", "<", ".", ">", "?"];

  // empty arrays for user input and created password

  var inputArray = [];
  var outputArray = [];

  // call on the user for length of password and character types

    var numofCharacters = prompt("How many characters do you want between 8 and 128?");
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");
    var number = confirm("Do you want numbers?");
    var symbol = confirm("Do you want special characters or symbols?");

  // test for proper criteria (length between 8 and 128 & at least one character type chosen)

  if (numofCharacters < 8) {
    alert("Password must have 8 or more characters!");
  }

  if (numofCharacters > 128) {
    alert("Password must have no more than 128 characters!");
  }

  if (!upper && !lower && !number && !symbol) {
    alert('Password must include at least one type of character!');
  }

  // begin creating the "input array" based on the choices made in the prompt/confirmations

  if (upper){
    inputArray = inputArray.concat(upperArray);
  }

  if (lower){
    inputArray = inputArray.concat(lowerArray);
  }

  if (number){
    inputArray = inputArray.concat(numberArray);
  }

  if (symbol){
    inputArray = inputArray.concat(symbolArray);
  }

  // generate output array based on parameters set by said choices

  for (var i = 0; i < numofCharacters; i++) {
    outputArray.push (inputArray[Math.floor(Math.random() * inputArray.length)]);
  }

  return outputArray.join("") ;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
