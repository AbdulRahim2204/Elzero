let a = 10;
let b = '20';
let c = 80;

/*

* ++a + +b++ + +c++ - +a++                     => 100
* ++a + -b + +c++ - -a++ + +a                  => 100
* --c + +b + --a * +b++ - +b * a + --a - +true => 100

*/

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

let d = '-100';
let e = '20';
let f = 30;
let g = true;

console.log(-d * ((+f - +e) * ++g )); // 2000
console.log(-d + f + (g * +e) + ++g); // 173