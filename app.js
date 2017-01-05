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
var answer2 = prompt('Do you think Brandon is secretly a ninja?').toLowerCase();
console.log(user + ' entered: ' + answer2);
if (answer2 === 'y' || answer2 === 'yes') {
  response = user + ' thinks Brandon is a ninja.';
  feedback = 'He\'d like to think so!';
  alert(feedback);
} else if (answer2 === 'n' || answer2 === 'no') {
  response = user + ' does not think Brandon is a ninja.';
  feedback = 'You are probably right!';
  alert(feedback);
  correct++;
} else {
  response = 'Invalid response given.';
  feedback = 'Answer not recognized.';
  alert(feedback);
}
document.open();
document.write('<p class="guess">' + response + ' ' + feedback + '</p>');
document.close();

var answer3 = prompt('Does Brandon have any pets?').toLowerCase();
console.log(user + ' entered: ' + answer3);
if (answer3 === 'y' || answer3 === 'yes') {
  response = user + ' thinks Brandon has a pet.';
  feedback = 'He does not, but he likes cats!';
  alert(feedback);
} else if (answer3 === 'n' || answer3 === 'no') {
  response = user + ' does not think Brandon has pets.';
  feedback = 'He wishes he had a cat.';
  alert(feedback);
  correct++;
} else {
  response = 'Invalid response given.';
  feedback = 'Answer not recognized.';
  alert(feedback);
}
document.open();
document.write('<p class="guess">' + response + ' ' + feedback + '</p>');
document.close();

var answer4 = prompt('Is Brandon adventurous with his food?').toLowerCase();
console.log(user + ' entered: ' + answer4);
if (answer4 === 'y' || answer4 === 'yes') {
  response = user + ' thinks Brandon will try any food.';
  feedback = 'He has tried a wide variety of exotic foods, including dog in Korea and snake in Arizona.';
  alert(feedback);
  correct++;
} else if (answer4 === 'n' || answer4 === 'no') {
  response = user + ' does not think Brandon is not adventurous with his food.';
  feedback = 'Sorry, ' + user + ', but Brandon will try anything.';
  alert(feedback);
} else {
  response = 'Invalid response given.';
  feedback = 'Answer not recognized.';
  alert(feedback);
}
document.open();
document.write('<p class="guess">' + response + ' ' + feedback + '</p>');
document.close();

var answer5 = prompt('Do you think that Brandon knows any other languages beyond English?').toLowerCase();
console.log(user + ' entered: ' + answer5);
if (answer5 === 'y' || answer5 === 'yes') {
  response = user + ' thinks Brandon knows more than just English.';
  feedback = 'He can speak Korean, and has studied Japanese as a hobby for many years.';
  alert(feedback);
  correct++;
} else if (answer5 === 'n' || answer5 === 'no') {
  response = user + ' does not think Brandon is a polyglot.';
  feedback = 'That\'s where you\'re wrong, buddy!';
  alert(feedback);
} else {
  response = 'Invalid response given.';
  feedback = 'Answer not recognized.';
  alert(feedback);
}
document.open();
document.write('<p class="guess">' + response + ' ' + feedback + '</p>');
document.close();

var answer6 = prompt('Is Brandon over the age of 30?').toLowerCase();
console.log(user + ' entered: ' + answer6);
if (answer6 === 'y' || answer6 === 'yes') {
  response = user + ' thinks Brandon is over 30.';
  feedback = 'He is currently 30 years old!';
  alert(feedback);
  correct++;
} else if (answer6 === 'n' || answer6 === 'no') {
  response = user + ' does not think Brandon is over 30.';
  feedback = 'Incorrect! He is currently 30.';
  alert(feedback);
} else {
  response = 'Invalid response given.';
  feedback = 'Answer not recognized.';
  alert(feedback);
}
document.open();
document.write('<p class="guess">' + response + ' ' + feedback + '</p>');
document.close();

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
