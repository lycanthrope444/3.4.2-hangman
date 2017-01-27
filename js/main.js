(function(){
"use strict";

var guessword ="";
var turns = 8;
var spaceDisplay = document.getElementById("guessspace");
var playerInput = document.getElementById("guessletter");
var spaceArray;
var formerGuesses = [];
var winArray = [];
var playerGuess;
//sets up buttons
var submitGuess = document.querySelector(".button");
submitGuess.addEventListener("click", function(){
  turnProcessor();
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

//changes the guessword to an array
function arrayMaker(word){
  return word.split('');
}


//creates guess spaces in html
function spaceMaker (objective){
  spaceArray = objective.map(function(){
    return "_";
  });
  spaceDisplay.textContent = spaceArray;
}
//takes the information for the turn and processes it
function turnProcessor(){
  console.log("Turn Processed");
  //takes player input
  playerGuess = playerInput.value;
  console.log(playerGuess);
  //compares to word
  
  //checks for win condition

  //updates gallows

  //updates playerguesses

  //updates turns left


}

//used to start/reset the game
function gameStart(){
  wordChecker();
  console.log(guessword);
  spaceMaker(guessword);
}

//used to check for winning
function winChecker(firstArray, secondArray){
  if (firstArray === secondArray){
    //player wins
  }
}

gameStart();

}());
