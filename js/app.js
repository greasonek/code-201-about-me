'use strict';

let yourName = prompt('Welcome to my page! What is your name?');
alert('Thanks ' + yourName + ', I\'m happy you\'re here! Let\'s play a guessing game to see how well you know me. Please respong with \'yes\' or \'no\'');

let homeState = prompt('Do you think I\'m from Washington state?');
// console.log(homeState);
// console.log(typeof homeState);

if (homeState.toLowerCase() === 'yes' || homeState.toLowerCase() === 'y') {
  alert('Wrong! I am originally from North Carolina.');
} else if (homeState.toLowerCase() === 'no' || homeState.toLowerCase() === 'n' ) {
  alert('Correct! I am originally from North Carolina.');
} else {
  alert('Please respond with \'yes\' or \'no\' only!');
}

let college = prompt('Do you think I graduated college?');
// // console.log(college);
// // console.log(typeof college);

if (college.toLowerCase() === 'yes' || college.toLowerCase() === 'y') {
  alert('Correct! I graduated from Appalachian State University.');
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
} else {
  alert('Please respond with \'yes\' or \'no\' only!');
}

let travel = prompt('Do you think I enjoy travelling?');
// // console.log(travel);
// // console.log(typeof travel);

if (travel.toLowerCase() === 'yes'|| travel.toLowerCase() === 'y' ) {
  alert('Correct! I live to travel.');
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
} else if (goal.toLowerCase() === 'no' || goal.toLowerCase() === 'n') {
  alert('How rude!');
}else {
  alert('Please respond with \'yes\' or \'no\' only!');
}

