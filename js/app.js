'use strict';
let userName = prompt('What\'s your name?');
alert('Welcome, ' + userName + '!');
let tryAgain = 'Sorry, I need a Yes/No or Y/N answer.';
let rightAnswer = 0;
let answer1 = prompt('Is my favorite color purple?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  console.log('Correct!');
  alert('Correct!');
  rightAnswer += 1;
} else if (answer1 === 'no' || answer1 === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log(tryAgain);
}
let answer2 = prompt('Do I mix local concerts as a hobby?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  console.log('Correct!');
  alert('Correct!');
  rightAnswer += 1;
} else if (answer2 === 'no' || answer2 === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log(tryAgain);
}
let answer3 = prompt('Do I have a cat?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  console.log('Correct!');
  alert('Correct!');
  rightAnswer += 1;
} else if (answer3 === 'no' || answer3 === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log(tryAgain);
}
let answer4 = prompt('Have I lived outside of Washington?').toLowerCase();
if (answer4 === 'no' || answer4 === 'n') {
  console.log('Correct!');
  alert('Correct!');
  rightAnswer += 1;
} else if (answer4 === 'yes' || answer4 === 'y') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log(tryAgain);
}
let answer5 = prompt('Do I play D&D?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y') {
  console.log('Correct!');
  alert('Correct!');
  rightAnswer += 1;
} else if (answer5 === 'no' || answer5 === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  console.log(tryAgain);
}
alert('Well, ' + userName + ', you got ' + rightAnswer + ' right.');
