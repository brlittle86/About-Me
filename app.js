'use strict';

var answer1 = confirm('Are you ready to play a guessing game?');
if (answer1) {
  console.log('Woo! User is ready!');
} else {
  console.log('Sorry, too bad...');
}

var user = prompt('What is your name?');
if (user) {
  console.log('User name is: ' + user);
} else {
  console.log('User name is invalid or null!');
}

var answer2 = prompt('Do you think Brandon is secretly a ninja?').toLowerCase();
if (answer2 === 'y' || answer2 === 'yes') {
  console.log(user + ' thinks Brandon is a ninja.');
  alert('He\'d like to think so!');
} else if (answer2 === 'n' || answer2 === 'no') {
  console.log(user + ' does not think Brandon is a ninja.');
  alert('You are probably right!');
} else {
  console.log('Invalid response given.');
  alert('Answer not recognized.');
}

var answer3 = prompt('Does Brandon have any pets?').toLowerCase();
if (answer3 === 'y' || answer3 === 'yes') {
  console.log(user + ' thinks Brandon has a pet.');
  alert('He does not, but he likes cats!');
} else if (answer3 === 'n' || answer3 === 'no') {
  console.log(user + ' does not think Brandon has pets.');
  alert('He wishes he had a cat.');
} else {
  console.log('Invalid response given.');
  alert('Answer not recognized.');
}

var answer4 = prompt('Is Brandon adventurous with his food?').toLowerCase();
if (answer4 === 'y' || answer4 === 'yes') {
  console.log(user + ' thinks Brandon will try any food.');
  alert('He has tried a wide variety of exotic foods, including dog in Korea and snake in Arizona.');
} else if (answer4 === 'n' || answer4 === 'no') {
  console.log(user + ' does not think Brandon is not adventurous with his food.');
  alert('Sorry, ' + user + ', but Brandon will try anything.');
} else {
  console.log('Invalid response given.');
  alert('Answer not recognized.');
}

var answer5 = prompt('Do you think that Brandon knows any other languages beyond English?').toLowerCase();
if (answer5 === 'y' || answer5 === 'yes') {
  console.log(user + ' thinks Brandon knows more than just English.');
  alert('He can speak Korean, and has studied Japanese as a hobby for many years.');
} else if (answer5 === 'n' || answer5 === 'no') {
  console.log(user + ' does not think Brandon is a polyglot.');
  alert('That\'s where you\'re wrong, buddy!');
} else {
  console.log('Invalid response given.');
  alert('Answer not recognized.');
}

var answer6 = prompt('Is Brandon over the age of 30?').toLowerCase();
if (answer6 === 'y' || answer6 === 'yes') {
  console.log(user + ' thinks Brandon is over 30.');
  alert('He is currently 30 years old!');
} else if (answer6 === 'n' || answer6 === 'no') {
  console.log(user + ' does not think Brandon is over 30.');
  alert('Incorrect! He is currently 30.');
} else {
  console.log('Invalid response given.');
  alert('Answer not recognized.');
}
