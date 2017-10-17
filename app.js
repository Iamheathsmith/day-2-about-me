'use strict';
//asking who they are
var user = prompt('Hello cruiusos person!!!! what is your name?');
console.log('user name:', user);

alert('Hello ' + user + '! Heath wanted to have fun with you and let you guess a few things about him!');


//asking how many kids he has #1
var kids = prompt('how many kids does Heath have?');
console.log('Heath nub of kids:', kids);

if (kids === '0' || kids === '1') {
  alert('you right.');
} else {
  alert('nope, he only has 0! unless you count his wife..J/K');
}

//asking about how many has he has #2
var hats = prompt('how many hats does heath own?');
console.log('heath has this many hats;', hats);

if (hats === '5' || hats === '6') {
  alert('you right again,');
} else {
  alert('nope, he only has 5 or was is 6?');
}

//asking what city they are living in #3
var city = prompt('What city does Heath live in?');
console.log('heath lives where:', city);

if (city.toUpperCase() === 'seattle' || city.toUpperCase() === 'SEATTLE') {
  alert('Great! you know that he loves the Seattle!');
} else {
  alert('nope, he does not live there!');
}

//Asking his favorite food #4
var favFood = prompt('Ok ' + user + ' lets ask a hard one, what is Heath\'s favorite foods?');
console.log('heaths favorite food:', favFood);

if (favFood.toUpperCase() === 'pizza' || favFood.toUpperCase() === 'PIZZA') {
  alert('YEP! He loves his Pizza!');
} else {
  alert('nope, he likes ' + favFood + ' but its not his favorite');
}

//asking if he has glasses #5
var glasses = prompt('So, does Heath have glasses?');
console.log('Does Heath have Glasses:', glasses);

glasses = glasses.toLowerCase();
if (glasses === 'yes' || glasses === 'YES' || glasses === 'y' || glasses === 'Y') {
  alert('great! you really do know Heath');
} else {
  alert('NOPE! you need to think harder!!!!');
}

alert('well i hope you enjoyed this game!');
