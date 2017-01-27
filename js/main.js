(function(){
"use strict";

var guessword ="";
var turns = 8;
var spaceDisplay = document.getElementById("guessspace");
var playerInput = document.getElementById("guessletter");
var spaceArray;
var formerGuesses = [];
var playerGuess;
var scorecard =[];

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

//checking logic in array
// function searchWin(searchletter, wordArray){
//   wordArray.forEach(function(letter){
//     if(searchletter === letter){
//       console.log("letter found");
//     }
//     // else {
//     //   console.log("letter not found");
//     //   maybe update gallows here
//     // }
//   });
//
// }
//this compare the player's entry to the objective and returns an array with the result
function scorecardUpdater(searchletter, wordArray){
  var arraySearch;
  arraySearch = wordArray.map(function(letter){
    if(searchletter === letter){
      return letter;
    } else {
      return "_";
    }
  });
  console.log(arraySearch);
  return arraySearch;
}

// This takes the currecnt score card and compares it to the new search, updating it to contain the past results
function scoreUpkeep(currentScore, scoreUpdate, currentObjective){
  var updatedScore;
  updatedScore = currentObjective.map(function(arrayLetter, index, array){
    if (currentObjective[index] === currentScore[index] || currentObjective[index] === scoreUpdate[index]){
      return arrayLetter;
    } else{
        return "_";
    }
  });
  return updatedScore;
}

//takes the information for the turn and processes it
function turnProcessor(){
  //takes player input
  playerGuess = playerInput.value;
  console.log(playerGuess);
  //compares to word & updates
  // searchWin(playerGuess, guessword);
  scorecard = scoreUpkeep(scorecard, scorecardUpdater(playerGuess, guessword), guessword);
  spaceDisplay.textContent = scorecard;


  console.log(scorecard);
  //updates gallows

  //updates playerguesses

  //updates turns left
  turns -= 1;
  console.log(turns);
  //checks for win condition
  winChecker(guessword, scorecard);

  console.log("Turn Processed");
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
    console.log("Playerwins");
  } else if(turns === 0){
    console.log("You've been hanged");
  } else {
    console.log("Player has not won");
  }
}

gameStart();

}());
