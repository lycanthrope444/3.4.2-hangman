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
//checks until the word is three or more characters
function wordChecker(){
  guessword = commonWords[wordRandomizer()];
  while (cullWords(guessword) !== true){
    guessword = commonWords[wordRandomizer()];
  }
  guessword = arrayMaker(guessword);
}

wordChecker();
console.log(guessword);
//changes the guessword to an array
function arrayMaker(word){
  return word.split('');
}
//creates guess spaces in html
function spaceMaker (objective){
  objective.forEach(function(){
    
  });
}







//used to start/reset the game
function gameStart(){

}







}());
