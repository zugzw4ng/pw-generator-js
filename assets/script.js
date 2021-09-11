var generateBtn = document.querySelector("#generate");
var upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberSet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialSet = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "}", "~"];

function generatePassword() {
  var passwordLength = Number(prompt("Choose a password length between 8-128"));
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length is invalid. Must be a number between 8-128");
    return;
  }
  
  var passwordChars = [];

  var upperBool = confirm("Would you like to use uppercase letters?");
  if (upperBool) {
    passwordChars = passwordChars.concat(upperSet);
  }
    
  var lowerBool = confirm("Would you like to use lowercase letters?");
  if (lowerBool) {
    passwordChars = passwordChars.concat(lowerSet);
  }
  var numberBool = confirm("Would you like to use numbers?");
  if (numberBool) {
    passwordChars = passwordChars.concat(numberSet);
  }
  var specialBool = confirm("Would you like to use special characters?");
  if (specialBool) {
    passwordChars = passwordChars.concat(specialSet);
  }
  
  while (!upperBool && !lowerBool && !numberBool && !specialBool) {
    alert("Password must contain at least one character type. Try again")
    return;
  }
  var password = "";  
  for (var i = 0; i < passwordLength; i++) {
    password = password += passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;

}
writePassword();
console.log(generatePassword);
generateBtn.addEventListener("click", writePassword);