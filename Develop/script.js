function generatePassword() {
  let textLength = prompt("How many characters?", "10");
  // checking for correct text length
  if (textLength >= 128) {
    alert("password must be less than 128 characters");
  } else if (textLength <= 8) {
    alert("password must be longer than 8 characters");
  } else {
    //setting up lists of characters and confirming what is selected.
    let passwordParam = {
      uppercase: confirm("Confirm uppercase characters?"),
      lowercase: confirm("Confirm lowercase characters?"),
      numeric: confirm("Confirm numbers?"),
      specialCharacters: confirm("Confirm special characters?"),
    };
    let lowercaseList = [
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
      "z",
    ];
    let uppercaseList = [
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
      "Z",
    ];
    let numericList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let specialCharacterList = [
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
    ];
    let possibleCharacters = [];
    let passwordArray = [];

    if (passwordParam.uppercase) {
      possibleCharacters.push(...uppercaseList);
    }
    if (passwordParam.lowercase) {
      possibleCharacters.push(...lowercaseList);
    }
    if (passwordParam.numeric) {
      possibleCharacters.push(...numericList);
    }
    if (passwordParam.specialCharacters) {
      possibleCharacters.push(...specialCharacterList);
    }
    function randomCharacter() {
      return possibleCharacters[
        Math.floor(Math.random() * possibleCharacters.length)
      ];
    }

    for (let i = 0; i < textLength; i++) {
      passwordArray.unshift(randomCharacter());
    }
    console.log(passwordArray);
    return passwordArray.join("");
  }
}
// Assignment Code, DO NOT EDIT ANYTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
