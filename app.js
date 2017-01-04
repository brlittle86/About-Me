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
var answer2 = prompt('Do you think Brandon is secretly a ninja?').toLowerCase();
console.log('The user entered: ' + answer2);
if (answer2 === 'y' || answer2 === 'yes') {
  response = user + ' thinks Brandon is a ninja.';
  feedback = 'He\'d like to think so!';
  alert(feedback);
} else if (answer2 === 'n' || answer2 === 'no') {
  response = user + ' does not think Brandon is a ninja.';
  feedback = 'You are probably right!';
  alert(feedback);
} else {
  response = 'Invalid response given.';
  feedback = 'Answer not recognized.';
  alert(feedback);
}
document.open();
document.write('<p class="guess">' + response + ' ' + feedback + '</p>');
document.close();

var answer3 = prompt('Does Brandon have any pets?').toLowerCase();
console.log('The user entered: ' + answer3);
if (answer3 === 'y' || answer3 === 'yes') {
  response = user + ' thinks Brandon has a pet.';
  feedback = 'He does not, but he likes cats!';
  alert(feedback);
} else if (answer3 === 'n' || answer3 === 'no') {
  response = user + ' does not think Brandon has pets.';
  feedback = 'He wishes he had a cat.';
  alert(feedback);
} else {
  response = 'Invalid response given.';
  feedback = 'Answer not recognized.';
  alert(feedback);
}
document.open();
document.write('<p class="guess">' + response + ' ' + feedback + '</p>');
document.close();

var answer4 = prompt('Is Brandon adventurous with his food?').toLowerCase();
console.log('The user entered: ' + answer4);
if (answer4 === 'y' || answer4 === 'yes') {
  response = user + ' thinks Brandon will try any food.';
  feedback = 'He has tried a wide variety of exotic foods, including dog in Korea and snake in Arizona.';
  alert(feedback);
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
console.log('The user entered: ' + answer5);
if (answer5 === 'y' || answer5 === 'yes') {
  response = user + ' thinks Brandon knows more than just English.';
  feedback = 'He can speak Korean, and has studied Japanese as a hobby for many years.';
  alert(feedback);
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
console.log('The user entered: ' + answer6);
if (answer6 === 'y' || answer6 === 'yes') {
  response = user + ' thinks Brandon is over 30.';
  feedback = 'He is currently 30 years old!';
  alert(feedback);
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
