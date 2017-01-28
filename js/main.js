(function(){
"use strict";

var guessword ="";
var theHangedBody = {};
var theHangedBodyParts = ['head', 'torso', 'arm1', 'arm2', 'leg1','leg2',];
var turns = theHangedBodyParts.length;
var turnDisplay = document.getElementById("turns-left");
var spaceDisplay = document.getElementById("guessspace");
var playerInput = document.getElementById("guessletter");
var gameRestart = document.getElementById("gameover");
var lastGuess = document.getElementById("failed-guess");
var spaceArray;
var formerGuesses = [];
var playerGuess;
var scorecard =[];
var gameGoing =true;

//sets up buttons
var submitGuess = document.querySelector(".guess");
submitGuess.addEventListener("click", function(){
  turnProcessor();
});
var replayButton = document.querySelector("#replaybutton");
replayButton.addEventListener("click", function(){
  gameStart();
});

//creates a variable for each body playerInput
//http://stackoverflow.com/questions/11807231/how-to-dynamically-create-javascript-variables-from-an-array
//modified from this page - dynamic so it will change if more parts are added
for (var i= 0; i<theHangedBodyParts.length; i++){
  theHangedBody[theHangedBodyParts[i]] = document.getElementById(theHangedBodyParts[i]);
}
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
  spaceDisplay.textContent = spaceArray.join(" ");
}

//checking logic in array
// function searchWin(searchletter, wordArray){
//   wordArray.forEach(function(letter){
//     if(searchletter === letter){
//       console.log("letter found");
//       turns += 1;
//     }
//     // else {
//     //   console.log("letter not found");
//     //   turns -= 1;
//     //   incorrectGuesses += 1;
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

//The hanged - populates the hanged based on the number of incorrect guesses
function theHanged(wrongGuesses, bodyArray){
  for(i=0; i<wrongGuesses; i++){
    theHangedBody[bodyArray[i]].textContent = bodyArray[i];
  }
}


//takes the information for the turn and processes it
function turnProcessor(){
  // if(gameGoing){
    //takes player input
    playerGuess = playerInput.value;
    formerGuesses.push(playerGuess);
    playerInput.value ="";
    console.log(formerGuesses);
    //compares to word & updates

    scorecard = scoreUpkeep(scorecard, scorecardUpdater(playerGuess, guessword), guessword);
    spaceDisplay.textContent = scorecard.join(" ");
    lastGuess.textContent = formerGuesses.join(" ");
    // searchWin(playerGuess, guessword);
    console.log(guessword);
    console.log(scorecard);
    //updates gallows

    //updates playerguesses

    //updates turns left
    turns -= 1;
    theHanged(theHangedBodyParts.length - turns, theHangedBodyParts);
    turnDisplay.textContent = turns;
    //checks for win condition
    winChecker(guessword, scorecard);

    // console.log("Turn Processed");
  // }
  // else {
  //   playerGuess = playerInput.value;
  //   if (playerGuess){
  //     gameStart();
  //   } else {
  //     gameRestart.textContent = "Thanks for playing!";
  //   }
  // }
}

//used to start/reset the game
function gameStart(){
  wordChecker();
  spaceMaker(guessword);
  turnDisplay.textContent = turns;
  // gameGoing = true;
  replayButton.style.visibility ='hidden';
}

//prompt player to play again
function playAgain(){
  // gameGoing = false;
  gameRestart.textContent = "Click Here to play Again";
  replayButton.style.visibility ='visible';
  turns=theHangedBodyParts.length;
}

//used to check for winning
function winChecker(firstArray, secondArray){
  var firstArrayString = firstArray.join("");
  var secondArrayString = secondArray.join("");
  if (firstArrayString === secondArrayString){
    //player wins
    console.log("Playerwins");
    playAgain();
  } else if(turns === 0){
    console.log("You've been hanged");
    playAgain();
  }
}

gameStart();

}());
