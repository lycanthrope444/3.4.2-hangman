(function(){
"use strict";

var guessword ="";

var turns = 8;

function wordRandomizer(){
  return Math.floor(Math.random()*(100));
}

function gameStart(){

}

console.log(wordRandomizer());

guessword = commonWords[wordRandomizer()];

console.log(guessword);





}());
