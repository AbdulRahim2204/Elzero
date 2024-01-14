let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];

let word = mix.map(char => {
    if(isNaN(parseInt(char))){
        return char;
    } else {
        return ''
    }
}).reduce((acc, curr) => {
    return acc += curr;
})
console.log(word);


// #####################################################
let myString = 'EElllzzzzzzzeroo';

let filteredWord = myString.split('').filter( (char, index, arr) => {
    if(arr.indexOf(char) == index){
        return char;
    }
} ).join('');
console.log(filteredWord);


// ##################################################################
let myArray = ['E', 'l', 'z', ['e', 'r'], 'o']

let flatWord = myArray.reduce((acc, curr) => {
    if(curr.length > 1){
      return acc += curr.reduce( (subacc, subcurr) => subacc + subcurr )
    } else {
        return acc += curr;
    }
});

console.log(flatWord);


// #####################################################################
let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C'];

let reversNumsOnly = numsAndStrings.filter(char => !isNaN(char)).map(num => -num);

console.log(reversNumsOnly);


// ###############################################################################
let nums = [2, 12, 11, 5, 10, 1, 99];

let calcNums = nums.reduce((preVal, currVal) => {
    return currVal % 2 == 0 ? preVal * currVal : preVal + currVal;
}, 1);

console.log(calcNums);


// ###############################################################################
let myString1 = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0';

let solution = myString1.split(',').filter((char) => {
  if(isNaN(char / 1)){
    return char
  }
}).map((char) => {
  if(char.length > true){
    return char.split('').pop()
  } else {
    return char
  }
}).join('').split('_').join(' ')

console.log(solution);