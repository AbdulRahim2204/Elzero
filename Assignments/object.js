let user = {
    name: 'Elzero',
    age: 38,
    country: 'Egypt',
    fullDetails: () => {
        console.log(`My name is ${user.name} I am ${user.age} years old I live in ${user.country}`);
    }
}

console.log(user.name);
console.log(user.age);
console.log(user.country);
console.log(user.fullDetails());


// #################################################################################################
let objOne = { name : 'Normal' };
console.log(objOne.name);

let objTow = new Object({name: 'objClass'});
console.log(objTow.name);

let objThree = Object.create({name: "using create methode"})
console.log(objThree.name);

let objFour = Object.assign({name: 'using assing method'}, {name: 'subObj one'}, {name: 'subObj tow'})
console.log(objFour.name);


// ###################################################################################################
let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4
};

let towNums ={
    e: 5,
    f: 6
};

let finalObject = Object.assign({a: a}, threeNums, towNums);

console.log(finalObject);


// ###################################################################################################
