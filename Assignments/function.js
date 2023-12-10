function showDetails (a, b, c) {
  let ms = '';
  let name = '', age = 0, status = false;

  typeof a == 'string' ? name = a :  typeof a == 'number'? age = a : status = a;
  typeof b == 'string' ? name = b :  typeof b == 'number'? age = b : status = b;
  typeof c == 'string' ? name = c :  typeof c == 'number'? age = c : status = c;

  status ? console.log(`Hello ${name} your age is: ${age} you are available for hire`) 
        : console.log(`Hello ${name} your age is: ${age} you are not available for hire`);
}

showDetails(25, false, 'Abdulrahim')

// #########################################################################################

// let names = function (...names) {
//   return `String [${names.join('], [')}] => Done !`;
// }

let names = (...names) => `String [${names.join('], [')}] => Done !`;


console.log(names('Osama', 'Mohamed', 'Ali', 'Ibrahim'));

let myNumbers = [20, 50, 10, 60];

// let calc = (one, tow, ...nums) => one + tow + nums.pop();

let calc = function (one, tow, ...nums) {
  return one + tow + nums.pop();
}

console.log(calc(10, myNumbers.pop(), myNumbers.pop()));