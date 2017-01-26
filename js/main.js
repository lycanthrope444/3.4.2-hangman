(function(){
"use strict";

var guessword ="";

var turns = 8;
//sets up buttons
var submitGuess = document.querySelector(".button");
submitGuess.addEventListener("click", function(){
  console.log("Submit Clicked");
});
//creates random word
function wordRandomizer(){
  return Math.floor(Math.random()*(100));
}


//used to make sure word is greater than 3
function cullWords(possibleWord){
  if (possibleWord.length > 2){
    return true;
  }
}

function wordChecker(){
  guessword = commonWords[wordRandomizer()];
  while (cullWords(guessword) !== true){
    guessword = commonWords[wordRandomizer()];
  }
  return guessword;
}

wordChecker();
console.log(guessword);
//used to start/reset the game
function gameStart(){

}







}());
