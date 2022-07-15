'use strict';
//DOM- document object moodel
// -it allow javascript to access html element and manipulate thm
// console.log(document.querySelector('.message').textContent);

// //DOM by go to the document and pass in the class name in text content
// document.querySelector('.message').textContent = 'GuessBiatch😊';
// document.querySelector('.between').textContent = '💕1-100';
// document.querySelector('.number').textContent = 100;
// document.querySelector('.score').textContent = 50;
// //DOM by go to the document and pass in the class name in value content
// document.querySelector('.guess').value = 23;

//===================GAME BUILD PART====================//

//decalre secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//make a function for too many duplicate code
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
// CODE REACT in DOM using event listener
//eventlistener is happen when we perform action in browser ex.mouse click, key press
//eventlistener w8 for the event to happen and then perform action
//addEventlistener needs2 argument 1.Event 2.execute some code after event(function)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'Not a secretNumber!😒';
    displayMessage('Not a secretNumber!😒');
    //when player win
  } else if (guess === secretNumber) {
    displayMessage('Correct Number😎');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //when guess is wrong //get rid of duplicate code
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high 🤦‍♂️' : 'Too low 😿');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('U Lost the Game🍭');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high 🤦‍♂️';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'U Lost the Game🍭';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     //when guess to low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low 😿';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'U Lost the Game🍭';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
