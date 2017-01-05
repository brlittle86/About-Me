'use strict';

//confirm readiness of user to play.
var answer1 = confirm('Are you ready to play a guessing game?');
if (answer1) {
  console.log('Woo! User is ready!');
} else {
  console.log('User is apparently not ready...');
}

//acquire user's name.
var user = prompt('What is your name?');
if (user) {
  console.log('User name is: ' + user);
} else {
  console.log('User name is invalid or null!');
}

//variables to be used through the code.
var response;
var feedback;
var correct = 0;

//arrays containing the questions, answers, and answer key, organized so that the array position of each item corresponds to the strings in the same array position in the other arrays.
var questions = ['Do you think Brandon is secretly a ninja?', 'Does Brandon have any pets?', 'Is Brandon adventurous with his food?', 'Do you think that Brandon knows any other languages beyond English?', 'Do you think that Brandon is over the age of 30?'];
var yesAnswers = ['He\'d like to think so!', 'He does not, but he likes cats!', 'He has tried a wide variety of exotic foods, such as dog in Korea and snake in Arizona.', 'Brandon speaks Korean and has studied Japanese since before High School.', 'He is currently 30!'];
var noAnswers = ['You are probably right!', 'He wishes he had a cat', 'Sorry, but Brandon will try anything.', 'That\'s where you\'re wrong, buddy!', 'Thank you, but he is currently 30.'];
var corAns = [['n', 'no'],['n', 'no'],['y', 'yes'],['y', 'yes'],['y', 'yes']];

//This loop pulls the question, assesses the user's response, pulls the appropriate feedback and checks correctness for each of the array positions in the questions array, then writes the question, answer, and feedback to the webpage.
for (var count = 0; count < questions.length; count++) {
  var answer = prompt(questions[count]).toLowerCase();
  if (answer === 'y' || answer === 'yes') {
    feedback = yesAnswers[count];
    alert(feedback);
    document.write('<p class="guess">' + questions[count] + ' ' + user + ' said: ' + answer + '. ' + feedback + '</p>');
  } else if (answer === 'n' || answer === 'no') {
    feedback = noAnswers[count];
    alert(feedback);
    document.write('<p class="guess">' + questions[count] + ' ' + user + ' said: ' + answer + '. ' + feedback + '</p>');
  } else {
    alert('Invalid response given. Please try again.');
    count--;
  }

  if (answer === corAns[count][0] || answer === corAns[count][1]) {
    correct++;
  }
}

//This loop generates a random number, then gives the user 4 total tries to guess the number, with feedback to guide the user towards the correct answer.
var randomNum = Math.floor((Math.random() * 10) + 1);
for (var guess = 4; guess >= 1; guess--) {
  var answer7 = prompt('Can you guess a random number between 1 and 10? You have ' + (guess - 1) + ' more tries.');
  console.log(user + ' entered: ' + answer7);
  if (parseInt(answer7) === randomNum) {
    feedback = 'Congratulations on guessing the number!';
    alert(feedback);
    guess = 0;
    correct++;
    document.write('<p class="guess">' + feedback + '</p>');
  } else if (guess > 1) {
    if (parseInt(answer7) > randomNum) {
      alert('Your guess was too high! Try again!');
    } else {
      alert('Your guess was too low! Try again!');
    }
  } else {
    alert('You are out of tries! The answer was ' + randomNum);
    document.write('<p class="guess">' + user + ' was unable to guess the number ' + randomNum + '</p>');
  }
}

//This loop asks the user to guess an answer from an array of strings. The user is given 6 attempts, and whether successful or not, the contents of the array is displayed to the user and written to the webpage.
var question8 = ['oreos', 'sour patch kids', 'peanut butter m&ms', 'pretzels', 'chips', 'ice cream'];
var confirm = false;
for (var guess = 6; guess >= 1; guess--) {
  var answer8 = prompt('Guess one of my favorite junk foods or candy! You have ' + (guess - 1) + ' more tries.').toLowerCase();
  console.log(user + ' entered: ' + answer8);
  for (var food = 0; food < question8.length; food++) {
    if (answer8 == question8[food]) {
      confirm = true;
      food = question8.length;
    }
  }
  if (confirm === true) {
    feedback = 'That is correct! ' + answer8 + ' is one of my favorite guilty pleasures.';
    alert(feedback);
    alert('Here were the possible correct answers: ' + question8);
    guess = 0;
    correct++;
  } else if (guess > 1) {
    alert('Incorrect! Please try again.');
  } else {
    alert('You are out of tries! Here were the acceptable answers: ' + question8);
  }
}
document.write('<p class="guess">Here are some of my favorite snacks: ' + question8 + '</p>');

//This portion evaluates the user's accuracy for guessing the answers and provides contextual feedback based on how they did.
var result;
if (correct > 5) {
  result = 'Great job!';
} else if (correct >= 3) {
  result = 'You did well for guessing!';
} else {
  result = 'Too bad!';
}
alert(user + ' got ' + correct + ' of 7 questions correct! ' + result);
