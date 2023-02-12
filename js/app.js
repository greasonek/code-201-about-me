'use strict';

let score = 0;

let yourName = prompt('Welcome to my page! What is your name?');
alert('Thanks ' + yourName + ', I\'m happy you\'re here! Let\'s play a guessing game to see how well you know me. Please respong with \'yes\' or \'no\'');

let homeState = prompt('Do you think I\'m from Washington state?');
// console.log(homeState);
// console.log(typeof homeState);

if (homeState.toLowerCase() === 'yes' || homeState.toLowerCase() === 'y') {
  alert('Wrong! I am originally from North Carolina.');
} else if (homeState.toLowerCase() === 'no' || homeState.toLowerCase() === 'n' ) {
  alert('Correct! I am originally from North Carolina.');
  score++;
  console.log(score);
} else {
  alert('Please respond with \'yes\' or \'no\' only!');
}

let college = prompt('Do you think I graduated college?');
// // console.log(college);
// // console.log(typeof college);

if (college.toLowerCase() === 'yes' || college.toLowerCase() === 'y') {
  alert('Correct! I graduated from Appalachian State University.');
  score++;
} else if (college.toLowerCase() === 'no' || college.toLowerCase() === 'n') {
  alert('Wrong! I graduated from Appalachian State University.');
} else {
  alert('Please respond with \'yes\' or \'no\' only!');
}

let cannabis = prompt('Do you think my dream job was to work in cannabis?');
// // console.log(cannabis);
// // console.log(typeof cannabis);

if (cannabis.toLowerCase() === 'yes' || cannabis.toLowerCase() === 'y') {
  alert('Nope! I decided to move to Colorado and work in cannabis one month before graduating college.');
} else if (cannabis.toLowerCase() === 'no' || cannabis.toLowerCase() === 'n') {
  alert('Correct! I decided to move to Colorado and work in cannabis one month before graduating college.');
  score++;
} else {
  alert('Please respond with \'yes\' or \'no\' only!');
}

let travel = prompt('Do you think I enjoy travelling?');
// // console.log(travel);
// // console.log(typeof travel);

if (travel.toLowerCase() === 'yes'|| travel.toLowerCase() === 'y' ) {
  alert('Correct! I live to travel.');
  score++;
} else if (travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n') {
  alert('Wow. It\'s like you don\'t even know me.');
} else {
  alert('Please respond with \'yes\' or \'no\' only!');
}

let goal = prompt('Do you think I will become a software engineer?');
// // console.log(goal);
// // console.log(typeof goal);

if (goal.toLowerCase() === 'yes' || goal.toLowerCase() === 'y') {
  alert('Me too! Thanks for believing in me friend.');
  score++;
} else if (goal.toLowerCase() === 'no' || goal.toLowerCase() === 'n') {
  alert('How rude!');
}else {
  alert('Please respond with \'yes\' or \'no\' only!');
}

// let myNumber = 7;
// let attempts = 3;
// let yourGuess = parseInt(prompt('I\'m thinking of a number between 1 and 10, can you guess what it is?'));
// // if (yourGuess === myNumber){
// //   alert ('You got it!');
// //   score++;
// // }
// while (myNumber != yourGuess) {
//   if (!attempts) {
//     alert ('You\'re out of guesses');
//     break;
//   }
//   if (yourGuess < myNumber) {
//     yourGuess = prompt('Too low! Guess again...');
//     attempts--;
//   } else if (yourGuess > myNumber) {
//     yourGuess = prompt('Too high! Guess again');
//     attempts--;
//   }
// }
// if (yourGuess == myNumber){
//   alert ('You got it!');
//   score++;
// }

// let places = ['Scotland', 'Ireland', 'Japan', 'Norway'];
// let guesses = 6;
// let userGuess = prompt('What is my #1 place I want to visit most?');
// let guessRight = false;

// while (guesses > 0) {
//   for (let i=0; i < places.length; i++) {
//     let currentplace = places[i];
//     // if (yourGuess.toLowerCase() !== currentplace.toLowerCase()) {
//     console.log (userGuess, currentplace);
//     if (userGuess.toLowerCase() === currentplace.toLowerCase()) {
//       alert(`You got it! I would love to go ${userGuess}`);
//       guessRight = true;
//       break; }
//   }
//   if (guessRight) break;

//   guesses = guesses-1;
//   if (!guesses) {
//     alert('You\'re out of guesses!');
//   }
//   else {
//     userGuess = prompt('I\'d love to go there but that\'s not my #1, guess again!');
//   }
// }

alert (`You got a score of ${score} out of 7`);
console.log(score);
