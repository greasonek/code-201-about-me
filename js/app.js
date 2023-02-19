'use strict';

let score = 0;
function getName(userName) {
  return(userName);
}

let userName = prompt('What is your name?');

if (userName){
  console.log(getName);
  alert('Thanks ' + userName + ', I\'m happy you\'re here! Let\'s play a guessing game to see how well you know me. Please respond with \'yes\' or \'no\'');
}
// let yourName = prompt('Welcome to my page! What is your name?');
// alert('Thanks ' + yourName + ', I\'m happy you\'re here! Let\'s play a guessing game to see how well you know me. Please respond with \'yes\' or \'no\'');
function homeState(){
  let userInput = prompt('Do you think I\'m from Washington state?');
  if (userInput === 'no' || userInput === 'n'){
    alert('Correct! I am originally from North Carolina.');
    console.log('Correct! I am originally from North Carolina.');
  } else if (userInput === 'yes' || userInput === 'y'){
    alert('Wrong! I am originally from North Carolina.');
    score++;
  }
}
homeState();
// let homeState = prompt('Do you think I\'m from Washington state?');
// // console.log(homeState);
// // console.log(typeof homeState);

// if (homeState.toLowerCase() === 'yes' || homeState.toLowerCase() === 'y') {
//   alert('Wrong! I am originally from North Carolina.');
// } else if (homeState.toLowerCase() === 'no' || homeState.toLowerCase() === 'n' ) {
//   alert('Correct! I am originally from North Carolina.');
//   score++;
//   console.log(score);
// } else {
//   alert('Please respond with \'yes\' or \'no\' only!');
// }
function college() {
  let userInput = prompt('Do you think I graduated college?');
  if (userInput === 'no' || userInput === 'n') {
    alert('Wrong! I graduated from Appalachian State University.');
    console.log('Wrong! I graduated from Appalachian State University.');
  } else if (userInput === 'yes' || userInput === 'y') {
    alert('Correct! I graduated from Appalachian State University.');
    score++;
  }
}
college();
// let college = prompt('Do you think I graduated college?');
// // // console.log(college);
// // // console.log(typeof college);

// if (college.toLowerCase() === 'yes' || college.toLowerCase() === 'y') {
//   alert('Correct! I graduated from Appalachian State University.');
//   score++;
// } else if (college.toLowerCase() === 'no' || college.toLowerCase() === 'n') {
//   alert('Wrong! I graduated from Appalachian State University.');
// } else {
//   alert('Please respond with \'yes\' or \'no\' only!');
// }
function cannabis() {
  let userInput = prompt('Do you think my dream job was to work in cannabis?');
  if (userInput === 'no' || userInput === 'n') {
    alert('Correct! I decided to move to Colorado and work in cannabis one month before graduating college.');
    console.log('Correct! I decided to move to Colorado and work in cannabis one month before graduating college.');
    score++;
  } else if (userInput === 'yes' || userInput === 'y') {
    alert('Nope! I decided to move to Colorado and work in cannabis one month before graduating college.');
  }
}
cannabis();
// let cannabis = prompt('Do you think my dream job was to work in cannabis?');
// // // console.log(cannabis);
// // // console.log(typeof cannabis);

// if (cannabis.toLowerCase() === 'yes' || cannabis.toLowerCase() === 'y') {
//   alert('Nope! I decided to move to Colorado and work in cannabis one month before graduating college.');
// } else if (cannabis.toLowerCase() === 'no' || cannabis.toLowerCase() === 'n') {
//   alert('Correct! I decided to move to Colorado and work in cannabis one month before graduating college.');
//   score++;
// } else {
//   alert('Please respond with \'yes\' or \'no\' only!');
// }
function travel() {
  let userInput = prompt('Do you think I enjoy travelling?');
  if (userInput === 'no' || userInput === 'n') {
    alert('Wow. It\'s like you don\'t even know me.');
    console.log('Wow. It\'s like you don\'t even know me.');
  } else if (userInput === 'yes' || userInput === 'y') {
    alert('Correct! I live to travel.');
    score++;
  }
}
travel();
// let travel = prompt('Do you think I enjoy travelling?');
// // // console.log(travel);
// // // console.log(typeof travel);

// if (travel.toLowerCase() === 'yes'|| travel.toLowerCase() === 'y' ) {
//   alert('Correct! I live to travel.');
//   score++;
// } else if (travel.toLowerCase() === 'no' || travel.toLowerCase() === 'n') {
//   alert('Wow. It\'s like you don\'t even know me.');
// } else {
//   alert('Please respond with \'yes\' or \'no\' only!');
// }
function goal() {
  let userInput = prompt('Do you think I will become a software engineer?');
  if (userInput === 'no' || userInput === 'n') {
    alert('How rude!');
    console.log('How rude!');
  } else if (userInput === 'yes' || userInput === 'y') {
    alert('Me too! Thanks for believing in me friend.');
    score++;
  }
}
goal();
// let goal = prompt('Do you think I will become a software engineer?');
// // // console.log(goal);
// // // console.log(typeof goal);

// if (goal.toLowerCase() === 'yes' || goal.toLowerCase() === 'y') {
//   alert('Me too! Thanks for believing in me friend.');
//   score++;
// } else if (goal.toLowerCase() === 'no' || goal.toLowerCase() === 'n') {
//   alert('How rude!');
// }else {
//   alert('Please respond with \'yes\' or \'no\' only!');
// }
function numberGuess(guessNumber){

  let myNumber = 7;
  let attempts = 4;

  while(attempts){
    let response = prompt(`I'm thinking of a number between 1 and 10, can you guess what it is? You have ${attempts} chances to guess it right`);
    attempts--;

    if(response > myNumber){
      alert('Too high!');
    } else if (response < myNumber){
      alert('Too low!');
    } else {
      (response === myNumber);
      alert('You got it! Good job!');
      score++;
      break;
    }
    if(!attempts){
      alert('You\'ve run out of attempts!');
    }
  }
}
numberGuess();

function countries(){

  let places = ['Scotland', 'Ireland', 'Japan', 'Norway'];
  let guesses = 6;
  let userGuess = prompt('What is my #1 place I want to visit most?');
  let guessRight = false;

  while (guesses > 0) {
    for (let i=0; i < places.length; i++) {
      let currentplace = places[i];
      // if (yourGuess.toLowerCase() !== currentplace.toLowerCase()) {
      console.log (userGuess, currentplace);
      if (userGuess.toLowerCase() === currentplace.toLowerCase()) {
        alert(`You got it! I would love to go ${userGuess}.`);
        guessRight = true;
        break; }
      score++;
    }
    if (guessRight) break;

    guesses = guesses-1;
    if (!guesses) {
      alert('You\'re out of guesses!');
    }
    else {
      userGuess = prompt('I\'d love to go there but that\'s not my #1, guess again!');
    }
  }
}
countries();

alert (`You got a score of ${score} out of 7`);
console.log(score);
