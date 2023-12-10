let num = 10;

num < 10 ? 
  console.log(10) : 
num >= 10 && num <= 40 ? 
  console.log('10 To 40') : 
num > 40 ?
  console.log('> 40') :
  console.log('Unknown');

let str = 'Elzero Web School';

if(`${str.length * 2}` === '34'){
  console.log('Good 1');
}

if(str.charAt(str.indexOf('W')) === 'W'){
  console.log('Good 2');
}

if (str !== 'string') {
  console.log('Good 3');
}

if (typeof str.length === 'number'){
  console.log('Good 4');
}

if (str.split(' ', 1).join().repeat(2) === 'ElzeroElzero') {
  console.log('Good 5');
}