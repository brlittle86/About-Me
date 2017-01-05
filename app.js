'use strict';

var answer1 = confirm('Are you ready to play a guessing game?');
if (answer1) {
  console.log('Woo! User is ready!');
} else {
  console.log('User is apparently not ready...');
}

var user = prompt('What is your name?');
if (user) {
  console.log('User name is: ' + user);
} else {
  console.log('User name is invalid or null!');
}

var response;
var feedback;
var correct = 0;

var questions = ['Do you think Brandon is secretly a ninja?', 'Does Brandon have any pets?', 'Is Brandon adventurous with his food?', 'Do you think that Brandon knows any other languages beyond English?', 'Do you think that Brandon is over the age of 30?'];
var yesAnswers = ['He\'d like to think so!', 'He does not, but he likes cats!', 'He has tried a wide variety of exotic foods, such as dog in Korea and snake in Arizona.', 'Brandon speaks Korean and has studied Japanese since before High School.', 'He is currently 30!'];
var noAnswers = ['You are probably right!', 'He wishes he had a cat', 'Sorry, but Brandon will try anything.', 'That\'s where you\'re wrong, buddy!', 'Thank you, but he is currently 30.'];
var corAns = [['n', 'no'],['n', 'no'],['y', 'yes'],['y', 'yes'],['y', 'yes']];

for (var count = 0; count < questions.length; count++) {
  var answer = prompt(questions[count]);
  if (answer === 'y' || answer === 'yes') {
    feedback = yesAnswers[count];
    alert(feedback);
    document.open();
    document.write('<p class="guess">' + questions[count] + ' ' + user + ' said: ' + answer + '. ' + feedback + '</p>');
    document.close();
  } else if (answer === 'n' || answer === 'no') {
    feedback = noAnswers[count];
    alert(feedback);
    document.open();
    document.write('<p class="guess">' + questions[count] + ' ' + user + ' said: ' + answer + '. ' + feedback + '</p>');
    document.close();
  } else {
    alert('Invalid response given. Please try again.');
    count--;
  }
  if (answer === corAns[count][0] || answer === corAns[count][1]) {
    correct++;
  }
}

for (var guess = 4; guess >= 1; guess--) {
  var answer7 = prompt('Can you guess my favorite number? You have ' + (guess - 1) + ' more tries.');
  console.log(user + ' entered: ' + answer7);
  if (parseInt(answer7) === 42) {
    feedback = 'The answer to life, the universe, and everything is 42.';
    alert(feedback);
    guess = 0;
    correct++;
  } else if (guess > 1) {
    if (parseInt(answer7) > 42) {
      alert('Your guess was too high! Try again!');
    } else {
      alert('Your guess was too low! Try again!');
    }
  } else {
    alert('You are out of tries! The answer was 42.');
  }
}
document.open();
document.write('<p class="guess">' + feedback + '</p>');
document.close();

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
document.open();
document.write('<p class="guess">Here are some of my favorite snacks: ' + question8 + '</p>');
document.close();

var result;
if (correct > 5) {
  result = 'Great job!';
} else if (correct >= 3) {
  result = 'You did well for guessing!';
} else {
  result = 'Too bad!';
}
alert(user + ' got ' + correct + ' of 7 questions correct! ' + result);
