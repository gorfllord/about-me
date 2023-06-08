'use strict';
let userName = prompt('What\'s your name?');
alert('Welcome, ' + userName + '! Answer the following questions with either Yes/No or Y/N');
let tryAgain = 'Sorry, I need a Yes/No or Y/N answer.';
let rightAnswer = 0;
let answer1 = prompt('Is my favorite color purple?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  //console.log('Correct!');
  alert('Correct!');
  rightAnswer++;
} else if (answer1 === 'no' || answer1 === 'n') {
  //console.log('Incorrect!');
  alert('Incorrect!');
} else {
  //console.log(tryAgain);
  alert(tryAgain);
}
let answer2 = prompt('Do I mix local concerts as a hobby?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  //console.log('Correct!');
  alert('Correct!');
  rightAnswer++;
} else if (answer2 === 'no' || answer2 === 'n') {
  //console.log('Incorrect!');
  alert('Incorrect!');
} else {
  //console.log(tryAgain);
  alert(tryAgain);
}
let answer3 = prompt('Do I have a cat?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  console.log('Correct!');
  alert('Correct!');
  rightAnswer++;
} else if (answer3 === 'no' || answer3 === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  //console.log(tryAgain);
  alert(tryAgain);
}
let answer4 = prompt('Have I lived outside of Washington?').toLowerCase();
if (answer4 === 'no' || answer4 === 'n') {
  console.log('Correct!');
  alert('Correct!');
  rightAnswer++;
} else if (answer4 === 'yes' || answer4 === 'y') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  //console.log(tryAgain);
  alert(tryAgain);
}
let answer5 = prompt('Do I play D&D?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y') {
  console.log('Correct!');
  alert('Correct!');
  rightAnswer++;
} else if (answer5 === 'no' || answer5 === 'n') {
  console.log('Incorrect!');
  alert('Incorrect!');
} else {
  //console.log(tryAgain);
  alert(tryAgain);
}
let attempts = 4;
let answer6 = parseInt(prompt(`I'm thinking of a number between 1 and 10. What is it? I'll give you ${attempts} chances.`));
for (let i = 0; i < attempts;) {
  if (answer6 === 7) {
    i = attempts;
    rightAnswer++;
  } else if (answer6 < 7) {
    alert('Too low!');
    i++;
    answer6 = parseInt(prompt(`I'm thinking of a number between 1 and 10. What is it? You have ${attempts - i} chances left!`));
  } else if (answer6 > 7) {
    alert('Too high!');
    i++;
    answer6 = parseInt(prompt(`I'm thinking of a number between 1 and 10. What is it? You have ${attempts - i} chances left!`));
  } else {
    alert('Sorry, that\'s not a number!');
    i++;
    answer6 = parseInt(prompt(`I'm thinking of a number between 1 and 10. What is it? You have ${attempts - i} chances left!`));
  }
}
alert('The answer was 7!');
attempts = 6;
let question7Choices = ['Chrono Trigger', 'Chrono Cross', 'Xenoblade Chronicles', 'The Legend of Zelda: Majora\'s Mask', 'Final Fantasy VI', 'Super Metroid', 'Earthbound', 'Horizon Zero Dawn', 'Donkey Kong Country 2', 'Tales of Phantasia'];
let answer7 = prompt(`What's one of my top 10 video games? I'll give you ${attempts} guesses.`);
while (attempts > 0) {
  for (let i = 0; i < 10; i++) {
    if (answer7.toLowerCase() === question7Choices[i].toLowerCase()) {
      i = 10;
      attempts = 0;
      rightAnswer++;
      alert('Correct!');
    }
  }
  if (attempts > 0) {
    alert('Sorry, try again!');
    attempts--;
    answer7 = prompt(`What's one of my top 10 favorite video games? You have ${attempts} guesses remaining.`);
  }
}
alert(`My top 10 favorite video games are ${question7Choices[0]}, ${question7Choices[1]}, ${question7Choices[2]}, ${question7Choices[3]}, ${question7Choices[4]}, ${question7Choices[5]}, ${question7Choices[6]}, ${question7Choices[7]}, ${question7Choices[8]}, and ${question7Choices[9]}.`);
alert('Well, ' + userName + ', you got ' + rightAnswer + ' right.');
