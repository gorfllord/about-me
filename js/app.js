'use strict';
let userName = prompt('What\'s your name?');
alert('Welcome, ' + userName + '! Answer the following questions with either Yes/No or Y/N');
let tryAgain = 'Sorry, I need a Yes/No or Y/N answer.';
let score = 0;
let yesAnswer = ['yes', 'y'];
let noAnswer = ['no', 'n'];
let answer1 = prompt('Is my favorite color purple?').toLowerCase();
function checkAnswer(answer, rightAnswer, wrongAnswer) {
  if (answer === rightAnswer[0] || answer === rightAnswer[1]) {
    //console.log('Correct!');
    alert('Correct!');
    score++;
  } else if (answer === wrongAnswer[0] || answer === wrongAnswer[1]) {
    //console.log('Incorrect!');
    alert('Incorrect!');
  } else {
    //console.log(tryAgain);
    alert(tryAgain);
  }
}
checkAnswer(answer1, yesAnswer, noAnswer);
let answer2 = prompt('Do I mix local concerts as a hobby?').toLowerCase();
checkAnswer(answer2, yesAnswer, noAnswer);
// if (answer2 === 'yes' || answer2 === 'y') {
//   //console.log('Correct!');
//   alert('Correct!');
//   rightAnswer++;
// } else if (answer2 === 'no' || answer2 === 'n') {
//   //console.log('Incorrect!');
//   alert('Incorrect!');
// } else {
//   //console.log(tryAgain);
//   alert(tryAgain);
// }
let answer3 = prompt('Do I have a cat?').toLowerCase();
checkAnswer(answer3, yesAnswer, noAnswer);
// if (answer3 === 'yes' || answer3 === 'y') {
//   console.log('Correct!');
//   alert('Correct!');
//   rightAnswer++;
// } else if (answer3 === 'no' || answer3 === 'n') {
//   console.log('Incorrect!');
//   alert('Incorrect!');
// } else {
//   //console.log(tryAgain);
//   alert(tryAgain);
// }
let answer4 = prompt('Have I lived outside of Washington?').toLowerCase();
checkAnswer(answer4, noAnswer, yesAnswer);
// if (answer4 === 'no' || answer4 === 'n') {
//   console.log('Correct!');
//   alert('Correct!');
//   rightAnswer++;
// } else if (answer4 === 'yes' || answer4 === 'y') {
//   console.log('Incorrect!');
//   alert('Incorrect!');
// } else {
//   //console.log(tryAgain);
//   alert(tryAgain);
// }
let answer5 = prompt('Do I play D&D?').toLowerCase();
checkAnswer(answer5, yesAnswer, noAnswer);
// if (answer5 === 'yes' || answer5 === 'y') {
//   console.log('Correct!');
//   alert('Correct!');
//   rightAnswer++;
// } else if (answer5 === 'no' || answer5 === 'n') {
//   console.log('Incorrect!');
//   alert('Incorrect!');
// } else {
//   //console.log(tryAgain);
//   alert(tryAgain);
// }
function numberQuestion() {
  let attempts = 4;
  let answer6 = parseInt(prompt(`I'm thinking of a number between 1 and 10. What is it? I'll give you ${attempts} chances.`));
  for (let i = 0; i < attempts;) {
    if (answer6 === 7) {
      i = attempts;
      score++;
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
}
numberQuestion();

function topTenQuestion() {
  let attempts = 6;
  let question7Choices = ['Chrono Trigger', 'Chrono Cross', 'Xenoblade Chronicles', 'The Legend of Zelda: Majora\'s Mask', 'Final Fantasy VI', 'Super Metroid', 'Earthbound', 'Horizon Zero Dawn', 'Donkey Kong Country 2', 'Tales of Phantasia'];
  let answer7 = prompt(`What's one of my top 10 video games? I'll give you ${attempts} guesses.`);
  while (attempts > 0) {
    for (let i = 0; i < 10; i++) {
      if (answer7.toLowerCase() === question7Choices[i].toLowerCase()) {
        i = 10;
        attempts = 0;
        score++;
        alert('Correct!');
      }
    }
    if (attempts > 0) {
      alert('Sorry, try again!');
      attempts--;
      answer7 = prompt(`What's one of my top 10 favorite video games? You have ${attempts} guesses remaining.`);
    }
  }
  let topTenMessage = 'My top 10 favorite video games are ';
  for (let i = 0; i < question7Choices.length; i++) {
    if (i < question7Choices.length - 1) {
      topTenMessage += `${question7Choices[i]}, `;
    } else if (i === question7Choices.length - 1) {
      topTenMessage += `and ${question7Choices[i]}.`;
    }
  }
  alert(topTenMessage);
}
topTenQuestion();

alert('Well, ' + userName + ', you got ' + score + ' right.');
