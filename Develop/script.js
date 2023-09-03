// Assignment code here
function generatePassword(){

  //Questions for user
  var casesen = confirm("Do you want password to be all UPPERCASE?")
  var numerin = confirm("Do you want password to contian numbers?")
  var specialC = confirm("Do you want password to contain Special Charaters?")
  var howlong = prompt("Pick a length for the password between 8 and 100 characters?")
  var possiblecharUpper = "";
  var possiblecharLower = "";
  var possiblecharNum = "";
  var possiblecharSpec = "";
  var possiblecharall = "";

  var pw = "";

   // alert user if length for password is not met and stop code

  if (howlong < 8){
    return alert("Length of password has to be greater than 8, try again");
  }


// Possible Characters for password based on question 1
  if (casesen == false){
    possiblecharall = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    possiblecharLower = "abcdefghijklmnopqrstuvwxyz"
    possiblecharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }else{
    possiblecharall = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    possiblecharUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  
  // additional possible characters for password based on question 2
  if (numerin !== false){
    possiblecharall =  "0123456789" + possiblecharall 
    possiblecharNum =  "0123456789"
  }

  // additional possible characters for password based on question 3
  if (specialC !== false){
    possiblecharall = "!@#$%^&*()" + possiblecharall 
    possiblecharSpec = "!@#$%^&*()"
  }

  //check to see if possible characters is building correctly but comment out  after
  //alert(possiblecharall);
  
  //loop to create a password based on question results and possible characters. 
  //Make sure to have password contain at least one value from each questions answered true
  
  for (var i = 0; i < howlong; i++){

    if (i == 1 && casesen == false){
      pw = pw + possiblecharLower[Math.floor(Math.random() * possiblecharLower.length)];
    }else if (i == 2 && casesen == false){
      pw = pw + possiblecharUpper[Math.floor(Math.random() * possiblecharUpper.length)];
    }else if (i == 3 && casesen !== false){
      pw = pw + possiblecharUpper[Math.floor(Math.random() * possiblecharUpper.length)];
    }else if (i == 5 && numerin !== false){
      pw = pw + possiblecharNum[Math.floor(Math.random() * possiblecharNum.length)];
    }else if (i == 7 && specialC !== false){
      pw = pw + possiblecharSpec[Math.floor(Math.random() * possiblecharSpec.length)];
    }else {
      pw = pw + possiblecharall[Math.floor(Math.random() * possiblecharall.length)];
    }
   }


  return pw;
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
