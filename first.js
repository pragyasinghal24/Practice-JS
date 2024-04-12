// 1.) Variables & Datatypes:

console.log('Welcome to Javascript!'); //Print simple text in console.log

fullName = 'Tony'; // where '=' is assignment operator like a = b means 'b' mei jo value hai vo 'a' ko assign ho rhe hai

// Variables:

// Wrong way to define variable: 

// age = 24;
// price = 90.99;
// radius = 14;
// x = null;
// y = undefined;
// isFollow = true;
// a = BigInt('12334');
// y = Symbol('Hello!');

// OR 

// Right way to define variable: 

// let age = 24;
// let price = 10.94;
// let isFollow = true;
// let x = null;
// let a = BigInt('12334');
// let y = Symbol('Hello!');

// console.log(fullName);

// Objects:

const student = {
    age: 20,
    fullName: 'Rahul',
    cgpa: 8.2,
    isPass: 'true'
};

console.log(student);
console.log(student['fullName']);
console.log(student.age); //with .dot key when we use .dot key not need to '' or ""
console.log(student['age']); //with []key but when we use []key we need '' or ""

//How to change values in object like:

student['age'] = student['age'] + 1;
console.log(student['age']);

Output: 21

student['name'] = 'Rahul Sharma'; //name as new key added not replace 'fullname' value
console.log(student['name']);
console.log(student);

student['fullName'] = 'Pragya Singhal'
console.log(student['fullName']);
console.log(student);

// Practice Questions:

// Q1.) Create  a const object called 'product(amazon)' to store information shown in picture:

const product = {
    name: 'Ball pen',
    rating: 4,
    price: 270,
    isDeal: true,
    offer: 5
};
console.log(product);
typeof product - 'object';

// Q2.) Create  a const object called 'profile(instagram)' to store information shown in picture:

const profile = {
    username: 'Shardha',
    isFollow: true,
    followers: 195,
    following: 5,
    info: 'I love her profile'
}
console.log(profile);
console.log(typeof profile);
console.log(typeof profile.followers);
console.log(typeof profile['username']);

// 2.) Operators & Conditional Statements:

//Arthmetic Operators: + , - , *, /, Unary operators are: Increment(++), decrement(--)

let a = 5;
let b = 2;
console.log('a + b = ', a + b);
console.log('a - b = ', a - b);
console.log('a = ', a, '& b = ', b);
console.log('a * b = ', a * b);
console.log('a / b = ', a / b);
console.log('a % b = ', a % b);
console.log('a ** b = ', a ** b); // 5**2 = 5 * 5 = 25;
a++; // a = a + 1 -> a = 5 + 1 -> a = 6; [post increment]
console.log('a++ = ', a++); //6
a--; // a = 5 - 1 = 4;
console.log('a-- = ', a--); //6
console.log(a--); //5
// ++a; // [pre increment];
console.log('++a = ', ++a); //5
--a;
console.log('--a = ', --a); //3

//Assignment Operators: +=, -=, *=, /=, **=
a += 4; // a = a + 4
console.log('a =', a); // 3 + 4 = 7
a /= 4; // a = a / 4
console.log('a =', a); // 7 / 4 = 1.75
a **= 4; // a = a ** 4
console.log('a =', a); // 1.75 ** 4 = 9.37

//Comparison Operators: ==, ===, !=, !==, >, >=, <, <=
let x = 5; //number
let y = '5'; //string
let c = 3;
let d = 2;
console.log('x == y', x == y); //true
console.log('x != y', x != y); //false
console.log('x === y', x === y); //false
console.log('x !== y', x !== y); //true
console.log('c > d', c > d); //true
console.log('c >= d', c >= d); //true
console.log('c < d', c < d); //false
console.log('c <= d', c <= d); //false

//Logical Operators: &&, ||, !

let p = 6;
let q = 5;

let cond1 = p > q; //true
let cond2 = p === 6; //true
console.log('cond1 && cond2 = ', cond1 && cond2); //true
console.log('cond1 && cond2 = ', p > q && p === 6); //true we can write this also using && operator

// let cond2 = p === q; //false
// console.log('cond1 && cond2 = ', p > q && p === q); //false

console.log('cond1 || cond2 = ', p > q || p === q) //true using || operator pie symbol
console.log('cond1 || cond2 = ', p < q || p === q) //false 

console.log('!(6 < 5) = ', !(6 === 6)) //false using bitwise operator/logical not

//Conditional Statements:

// 1.) if Statement:

// a.) Show you can vote/not-vote:
let age = 16;
if (age >= 18) {
    console.log('you can vote');
}

if (age < 18) {
    console.log('you cannot vote');
}

// Output: you cannot vote.

// b.) Show dark-mode/light-mode:
let mode = 'dark';
let backgroundColor;
if (mode === 'dark') { //(paranthesis) and mode === 'dark-mode' is an expression { curly braces }
    backgroundColor = 'black'; //code
}
if (mode === 'light') {
    backgroundColor = 'blue';

}
console.log(backgroundColor);
// Output: black.

// 2.) if-else Statement:

// a.) Show you can vote/not-vote:
let mode1 = 'dark';
let color;
if (mode1 === 'dark') {
    color = 'black';
}
else {
    color = 'blue';
}
console.log(color);
// Output: black.

// b.) Show dark-mode/light-mode:
let voteAge = 16;
if (voteAge >= 18) {
    console.log('vote');
}
else {
    console.log('not vote');
}
// Output: not vote

// c.) Show a number is odd or even:
let num = 11;
if (num % 2 === 0) {
    console.log(num, 'is even');
}
else {
    console.log(num, 'is odd');
}
// Output: 11 is odd

// 3.) else-if Statements: multiple conditions check at one time.

let mode2 = 'silver';
let bgColor;
if (mode2 === 'dark') {
    bgColor = 'black';
}
else if (mode2 === 'light') {
    bgColor = 'blue';
}
else if (mode2 === 'pink') {
    bgColor = 'pink';
}
else {
    bgColor = 'white';
}
console.log(bgColor); //white

//One condition run at a time:

if (mode === 'dark') console.log(mode); //professionally not correct always use { blocks };

// 4.) Ternary Operators: condition ? true : false

let aged = 25;
let result = aged >= 18 ? 'adult' : 'not adult';
console.log(result); //adult

// OR we can write this:
aged <= 18 ? console.log('adult') : console.log('not adult'); //not adult

// 5.) Switch Statement:
// const fruits = 'grapes';
const fruits = '';
switch (fruits) {
    case 'Oranges':
        console.log('This fruit is Orange');
        break;
    case 'Mangoes':
    case 'grapes':
        console.log('This fruit is Grapes');
        break;
    default:
        console.log('Sorry, fruit is not found');
}
// Output: This fruit is Grapes, Sorry, fruit is not found

// Practice Questions:

// Q1.) Get user to input a number using prompt('Enter a number'). Check if the number is a multiple of 5 or not

let Num = prompt('Enter a number:');
if (Num % 5 === 0) {
    console.log(Num, 'is multiple of 5');
}
else {
    console.log(Num, 'is not multiple of 5');
}
// Output: Enter a number: 10 // 10 is multiple of 5

// Q2.) Write a code which can give grades to students according to their scores: 90-100 A, 70-89 B, 60-69 C, 50-59 D, 0-49 F

let score = prompt('Enter your score (0-100)');
let grade;
if (score >= 90 && score <= 100) {
    grade = 'A';
}
else if (score >= 70 && score <= 89) {
    grade = 'B';
}
else if (score >= 60 && score <= 69) {
    grade = 'C';
}
else if (score >= 50 && score <= 59) {
    grade = 'D';
}
else if (score >= 0 && score <= 49) {
    grade = 'F';
}
console.log('according to your scores, your grade was : ', grade);
// Output: Enter your score(0-100): according to your scores, your grade was : 40, F

// 3.) Loops In JS: repeat number of times

// a.) For loop: 

//Print 1 to 10000 times 'Apna COllege':
// for(let count = 1; count <= 10000; count++){
//     console.log('Apna College'); //10000 execute
// }
// console.log('loop has ended');

//Print sum of 1 to 5:
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i; //sum = sum + i
}
console.log('sum = ', sum); //15
console.log('loop has ended');

//Print 1 to 5:
for (let i = 1; i <= 5; i++) {
    console.log('i = ', i); //i = 1, i = 2 , i = 3, i = 4, i = 5 
}
// console.log(i); //Error shown because 'i' is not defined globally it's under block scope, if we shown the value of i outside than defined 'i' globally, then the outpout is i = 6;

// b.) While loop:

//Print 1 to 5:
let j = 1;
while (j <= 5) {
    console.log('j =', j); //j = 1, j = 2 , j = 3, j = 4, j = 5 
    j++;
}

// c.) Do-While loop:

//Print 1 to 5:
let h = 1;
do {
    console.log('h =', h); //k = 1, k = 2 , k = 3, k = 4, k = 5 
    h++;
}
while (h <= 5);

// d.) for-of loop:

let str = 'Apna College';
for (let g of str) { //iterator - characters
    console.log('g = ', g); //g=A, g=p, g=n, g=a, g='', g=C, g=o, 2 g=l, g=e, g=g, g=e
}

//Print length of given character through for-of loop:
let k = 'Javascript';
let length = 0;
for (let val of k) {
    console.log('i = ', val);
    length++; //length = length + 1;
}
console.log('string length of characters is ', length); //10    

//Print keys and values of an object using for-in loop:
let person = {
    name: 'Rahul',
    age: 20,
    cgpa: 7.5,
    isPass: true
};
// console.log(person);

for (let key in person) {
    console.log('key = ', key, 'value = ', person[key]); // key = name value = rahul, key = age value = 20, etc where 'key' as a variable
    // console.log('key = ', key, 'value = ', person.key); //shows an error because it's use as a string like person.'name' so that's why shows an error
}

//Practice Questions:

// Q1.) Print all even/odd numbers from 0 to 100:
for (let num = 0; num <= 100; num++) {
    // console.log('Print all numbers', i);
    if (num % 2 === 0) { //even numbers
        console.log('Print even numbers are = ', num);
    }

    if (num % 2 !== 0) { //odd numbers
        console.log('Print odd numbers are = ', num);
    }

}

// Q2.) Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user 
// enters correct value.

// let gameNum = 5;
// let userNum = prompt('Guess the game number : ');
// while(userNum != gameNum){ //not use !== means if user guess the wrong number than print 'guess again' msg

//     // userNum = prompt('You entered the wrong number, Guess again : ');

//     if(userNum <= gameNum){
//         userNum = prompt('Please enter the larger number: ');
//     }
//     else{
//         userNum = prompt('Please enter the smaller number: ')
//     }
// }
// console.log('Congratulations, you entered the right number:', userNum);

//Print String:
let str2 = 'Apna College';
console.log(str2);
console.log(str2.length); //12
console.log(str2[8]); //find which character on this index 'l'

//Template Literals:
let specialString = `this is template literal ${1 + 2 + 3}`;
console.log(specialString); // this is template literal 6
console.log(typeof specialString); //string

let obj = {
    item: 'Pen',
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

//Escape characters: 
let str3 = ('Apna\nCollege'); //where \n is 'escape character'
let str4 = ('Apna\tCollege'); //where \t is 'escape character'
console.log(str3);
// Output: Apna 
//          College

console.log(str4);
// Output: Apna  College
let str5 = 'Apna\tCollege'; //string
console.log(str5.length); //12 whrere \t also counts in length

//String functions/Methods:
let str6 = 'Apna College';
let newStr = str6.toUpperCase();
let trimStr = '     Apna Collge   JS   '; //removes space only starting and ending not mid spacing removes
console.log(str6);
console.log(newStr);
console.log(str6.toUpperCase()); //Uppercase method
console.log(str6.toLowerCase()); //Lowercase method
console.log(trimStr.trim()); //Trim method

//Slice method
let sliceStr = 'abcdefg';
console.log(sliceStr.slice(1, 3)); //bc //ending value not included(3 non inclusive)
console.log(sliceStr.slice(1)); //bcdefg 
console.log(sliceStr.slice(2)); //cdefg 

//Concat method
let conactStr1 = 'hello';
let conactStr2 = 'world';
let res = conactStr1.concat(conactStr2);
let res1 = 'We are in ' + conactStr1 + conactStr2;
let res2 = 'hello' + 123;
console.log(conactStr1.concat(conactStr2)); //helloworld
console.log(res);
console.log(res1); //We are in helloworld
console.log(res2); //hello123

//replace method:
let replaceStr = 'hello';
console.log(replaceStr.replace('h', 'y')); //yello
console.log(replaceStr.replace('he', 'ye')); //yello
console.log(replaceStr.replaceAll('ll', 'p')); //hepo

//charAt method
let charStr = 'I love JS';
let newcharStr = 'We love JS';
charStr = charStr.replace('I', 'You');
console.log(charStr.charAt(2)); //l with space count
console.log(charStr.charAt(3)); //o
console.log(charStr[4]); //v
console.log(charStr); //WE love Js
console.log(newcharStr); //WE love Js
console.log(newcharStr[6]); //6

//Practice Questions:

// Q1.) Prompt the user to enter their full name. Generate a username for them based on the input. Start username 
// with @, followed by their full name and ending with fullname length.

// eg: user name = 'pragyasinghal', username should be '@pragyasinghal12'

let fullname = prompt('Enter your fullname without spaces');
// console.log(fullname);
// console.log(fullName.length);
let username = '@' + fullname + fullname.length; //concatenate
console.log(username); //@pragyasinghal13

//Arrays: 
let marks = [23, 34, 45, 78, 90];
console.log(marks);
console.log(marks.length); //property //5

let heroes = ['ironname', 'bulk', 'batman'];
console.log(heroes);
console.log(typeof heroes); //object
console.log(marks[3]); //78

console.log(heroes[0]); //ironman
console.log(heroes[1]); //bulk

//Loops over Arrays:
for (let idx = 0; idx < heroes.length; idx++) {
    console.log(heroes[idx]); //ironman, bulk, batman
}
console.log(heroes.length);

// OR

for (let idx = 1; idx <= heroes.length; idx++) {
    console.log(heroes[idx - 1]); //ironman, bulk, batman it's not standard way to write
}
console.log(heroes.length);

//for of Loop:

for (let hero of heroes) {
    console.log(hero);
}

//Example 2: 

let cities = ['delhi', 'mumbai', 'gurgoan', 'noida'];
for (let city of cities) {
    // console.log(city); //delhi, mumbai, gurgaon, noida
    console.log(city.toUpperCase()); //DELHI, MUMBAI, GURGOAN, NOIDA
}

//Practice Questions:
// Q1.) For a given array with marks of students -> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
// average = sum of all student marks / total No. of students

let studentMarks = [85, 97, 44, 37, 76, 60];
console.log(studentMarks);
console.log(studentMarks.length); //6

let Sum = 0;
for (let i = 0; i < studentMarks.length; i++) {
    Sum += studentMarks[i]; //sum = sum + studentMarks[i]
}
console.log(Sum);
let avg = Sum / studentMarks.length; //399 / 6 = 66.5
console.log(`avg marks of the class = ${avg}`); //67

// OR

// for(let i of studentMarks){
//     Sum += i; //399
// }
// let avg = Sum / studentMarks.length; //399 / 6 = 66.5
// console.log(`avg marks of the class = ${avg}`); //67

// Q2.) For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them.
// Change the array to store final price after applying offer.

let priceItem = [250, 645, 300, 900, 50];
console.log(priceItem);
console.log(priceItem.length); //5

// let newPrice, discountPrice;
// for(let i = 0; i < priceItem.length; i++){
//     newPrice = priceItem[i] * 10 / 100; //with applied 10% offer
//     discountPrice = priceItem[i] - newPrice; //discountprice with less offer amt
//     priceItem[i]= discountPrice; //new array after applied offer
// }
// console.log(priceItem); // [225, 580.5, 270, 810, 45]

// OR 

for (let i = 0; i < priceItem.length; i++) {
    let offer = priceItem[i] / 10; // 250 / 10 = 25
    priceItem[i] -= offer // priceItem[i] = priceItem[i] - offer // 250 - 25 = 225
}
console.log(priceItem);

// OR 

// for(let j in priceItem){
//     newPrice = priceItem[j] * 10 / 100; //with applied 10% offer
//     discountPrice = priceItem[j] - newPrice; //discountprice with less offer amt
//     priceItem[j]= discountPrice; //new array after applied offer
// }
// console.log(priceItem);

//Array Methods: Always write array method in small letters
let foodItems = ['mango', 'apple', 'banana', 'orange'];
console.log(foodItems);

//push() method
foodItems.push('litchi', 'grapes', 'strawberries'); //add items from the end
console.log(foodItems);

//pop() method
console.log(foodItems.pop()); //deleted item shown 'strawberries'
let deletedItem = foodItems.pop(); //always delete item from the end but not shown deleted item (grapes)
console.log(foodItems); //updated array with delete item mango, apple, banana, orange, litchi
console.log('deleted', deletedItem);

//toString() method:
console.log(foodItems); //['mango', 'apple', 'banana', 'orange', 'litchi']
console.log(foodItems.toString()); //mango, apple, banana, orange, litchi

let Marks = [85, 97, 44, 37, 76, 60];
console.log(Marks.toString()); //85, 97, 44, 37, 76, 60

//concat() method:
let foodItems1 = ['mango', 'apple', 'banana', 'orange'];
let foodItems2 = ['litchi', 'grapes', 'strawberries'];
console.log(foodItems1.concat(foodItems2));
let foodItems3 = foodItems1.concat(foodItems2);
console.log(foodItems3);

//unshift() method:
let foodItems4 = ['mango', 'apple', 'banana', 'orange'];
foodItems4.unshift('avacado'); //just like push method but add item from starting position
console.log(foodItems4);

//shift() method:
console.log(foodItems4.shift()); //avacado
console.log(foodItems4);
let deletedItem1 = foodItems4.shift();
console.log('deleteItem', deletedItem1); //mango

//slice() method
let marvelHeroes = ['thor', 'spiderman', 'Dr Strange', 'ironman', 'batman'];
console.log(marvelHeroes);
console.log(marvelHeroes.length); //5
console.log(marvelHeroes.slice(1, 3)); //where 1 = starting index and 3 = ending index // output: ['spiderman', 'Dr. Starnge'] not add ending index
console.log(marvelHeroes.slice()); //['thor', 'spiderman', 'Dr Strange', 'ironman', 'batman']; same array

//splice() method:
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//splice Delete Elements
console.log(numbersArray.splice(2, 3)); //means at index of 2 i[2] delete 3 elements like 3, 4, 5
console.log(numbersArray); //Latest array: [1, 2, 6, 7, 8, 9]
//splice Delete Elements
console.log(numbersArray.splice(2, 3, 101, 102, 103, 104)); //deleted 3 elements at starting index of 2 and add new elements in the same position just like below   
console.log(numbersArray); // Output: [1, 2, 101, 102, 103, 104, 9]
//splice Add Elements
console.log(numbersArray.splice(3, 0, 105)); // 0 element deleted
console.log(numbersArray); // [1, 2, 101, 105, 102, 103, 104, 9] at position 3 add new element 105 
//splice Replace Elements
console.log(numbersArray.splice(3, 1, 106)); //105
console.log(numbersArray); //[1, 2, 101, 106, 102, 103, 104, 9] //at postion 105 replace 106
//When we didn't pass deleted elements in splice than automatically delete element from starting index and returns new array
console.log(numbersArray.splice(4)); //[102, 103, 104, 9] // index[4] also included in delete item
console.log(numbersArray); //[1, 2, 101, 106]
//When you don't pass any index in splice method than returns the same array as we print in last
console.log(numbersArray.splice());
console.log(numbersArray); //[1, 2, 101, 106]

//Practice Questions: 
// Q1.) Create an array to store companies -> 'Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'

// a.) Remove first company from the array  -> shift() method
// b.) Remove Uber & Add Ola in its place -> splice() method
// c.) Add Amazon at the end -> push() method

let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];
console.log(companies);

//a.) shift() method:
let deleteItem = companies.shift();
console.log('deleteItem', deleteItem); //a.) Bloomberg
console.log(companies); // ['Microsoft', 'Uber', 'Google', 'IBM', 'Netflix'];

// b.) splice() method:
console.log(companies.splice(2, 1, 'Ola')); //['Uber']
console.log(companies); //['Bloomberg', 'Microsoft', 'Ola', 'Google', 'IBM', 'Netflix'];

// c.) push() method:
console.log(companies.push('Amazon'));
console.log(companies); //['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix', 'Amazon'];

//Functions:
function myFunction() { //function definition means define/declare
    console.log('hello world');
    console.log('We are learning JS');
}

myFunction(); //function call

//Using 'parameter' and 'argument' how to call msg again and again:
function myFunction(msg) {
    console.log(msg); //parameter -> input
}
myFunction('I love JS'); //argument  //Output: I love JS

//Print msg 'n' times: 
function myFunction(msg, n) {
    console.log(msg * n); //parameter -> input
}
myFunction('I love JS', 100); //argument  //Output: NAN(Not an number)

//Sum of 2 numbers:
function sumofNumbers(x, y) { //function define with parameters
    console.log(x + y);
}
sumofNumbers(20, 10); //Output: 30 //function call with arguments
sumofNumbers(500, 140); //Output: 640

//Through 'return' keyword:
function sumofNumbers(p, q) {
    //local variables -> scope
    s = p + q;
    console.log('before return');
    console.log(p); //40
    return s;
    console.log('after return'); //never execute any code after return
}
let val = sumofNumbers(40, 60);
console.log(p); //p is not defined becoz 'p' is defined only in block scope variable, if we want to return this than use gloabl variable
console.log(val); //100

//Multiplication function:
function mul(a, b) {
    return a * b;
}
console.log(mul(20, 30)); //Output: 600

//Another way through 'Arrow function' Modern JS:
const arrowMul = (a, b) => { //right-side part is arrow function where const 'arrowMul' is a variable that stored arrow functions so, now 'arrowMul' is also a function
    return a * b;
}
console.log(arrowMul(3, 4)); //12

//Print msg through Arrow function:

const printHello = () => { //we can remove { } also
    console.log('hello');
}
console.log(printHello()); //hello

// OR

const printHello1 = () => console.log('hello');

//Practice Questions:
// Q1.) Create a function using the 'function' keyword that takes a String as an argument & returns the number of vowels in the String.

// function countVowels(str) {
//     let count = 0;
//     for (let char of str) { //for-of loop
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++; //count = count + 1;
//         }
//     }
//     return count; //countVowels('pragya') //2
// }
// console.log(countVowels('apnacollegeddfddfe')); //6

// OR

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) { //for loop
        if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u') { //charAt method to find any character string
            count++; //count = count + 1;
        }
    }
    // console.log(count);  
    return count;
}
console.log(countVowels('pragyasinghal')); //4

// Q2.) Create an arrow function to perform the same task.

// const vowelsCount = (str) => {
//     let count = 0;
//     for(let char of str){
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             count++; //count = count + 1;
//         }
//     }
//     return count;
// }
// console.log(vowelsCount('apnacollege')); //5

//forEach function: Print an array with using forEach function:
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val); // 1, 2, 3, 4, 5
})

// OR With Arrow function:

let Cities = ['delhi', 'pune', 'mumbai'];
Cities.forEach((val) => {  //print each element in the array using forEach
    console.log(val.toUpperCase()); //DELHI, PUNE, MUMBAI
})

//With index parameter
Cities.forEach((val, idx, Cities) => {  //print each element in the array using forEach
    console.log(val.toUpperCase(), idx, Cities); //DELHI 0, PUNE 1, MUMBAI 2
})

//Practice questions:

// Q1.) For a given array of numbers, print the square of each value using forEach loop.

let squareArr = [2, 3, 4, 5, 6]; //square means n*n = 1* 1 = 1
squareArr.forEach((num) => {
    console.log(num * num); //square means n*n = 2 * 2 = 4, 9, 16, 25, 36
    // console.log(num ** 2); //another way to find the square of given array
});

// OR Using Arrow function:

let nums = [23, 40, 50];
let calcualteSquare = (num) => {
    console.log(num * num);
}
nums.forEach(calcualteSquare); //529, 1600, 2500

//Some More Array Methods:

// a.) Map method: To Print all the array values and returns new array:

let numbers = [20, 13, 24];
numbers.map((val) => {
    console.log(val); //20, 13, 24
});

// OR print new array:

let newArr = numbers.map((val) => {
    //   return val; //print array value
    //   return val * val; //print square array of each value
    return val * 2; //print square array of each value

});
// console.log(newArr); // [20, 13, 24]
// console.log(newArr); // [400, 169, 576]
console.log(newArr); // [40, 26, 48]
console.log(numbers);

// b.) Filter method: Print all even number from given array:
let filterArr = [1, 3, 4, 6, 8, 10];

filterArr.filter((val) => {
    return val % 2 === 0;
})
console.log(filterArr); //[1, 3, 4, 6, 8, 10]; print original array

// OR With new array/new variable(evenArr):

let evenArr = filterArr.filter((val) => {
    //    return val % 2 === 0; //even numbers //4, 6, 8, 10
    //    return val % 2 !== 0; //odd numbers // 1, 3
    return val > 3; //4, 6, 8, 10
});
console.log(evenArr); //4, 6, 8, 10

// c.) Reduce method: Print sum of given array numbers:
let reduceArr = [1, 2, 4, 5];
reduceArr.reduce((res, curr) => {
    return res + curr;
});
console.log(reduceArr); // [1, 2, 4, 5] print original array

// OR with new varibale:

const sumArr = reduceArr.reduce((prev, curr) => {
    return prev + curr;
});
console.log(sumArr); // 1 + 2 + 4 + 5 = 12

//Print largest number through reduce method:
let largenoArr = [5, 4, 12, 20, 534];
const largestNumber = largenoArr.reduce((prev, curr) => {
    return prev > curr ? prev : curr; //if prev no. greater than curr no. than return prev no. otherwise return curr no.
});
console.log(largestNumber); //534

//Practice questions:
// Q1.) We are given array of marks of students. Filter out of the marks of students that scored 90+.

let marksStudent = [82, 45, 86, 95, 92];
const studentRes = marksStudent.filter((val) => {
    return val > 90;
});
console.log(studentRes); //95, 92

// Q2.) Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all 
// numbers in the array. Use the reduce method to calculate product of all numbers in the array.
let n = prompt('Enter a number: ');
let numberArr = [];
for(let i = 1; i <= n; i++){ // i <= n then numberArr[i - 1] = i;
    numberArr[i - 1] = i;

}
console.log(numberArr); //[1, 2, 3, 4, 5]

//Calcualte Sum of all numbers:
let sumNumber = numberArr.reduce((res, curr) => {
    return res + curr;
});
console.log('sum = ', sumNumber); //15

//Calcualte Product of all numbers:
let productArr = numberArr.reduce((res, curr) => {
    return res * curr;
});
console.log('factorial = ', productArr); //[1, 2, 3, 4] //24

// OR

// Note: If array index/loop starts with 0 than factorial of given array using for loop:
let numberArr1 = [2,5,4,7,5,2,11,9];
let productArr1 = 1;
for (let i = 0; i < numberArr.length; i++) { // i <= n then numberArr[i - 1] = i;

    if (numberArr1[i] === 0) {
        console.log('Array has 0');
    }
    else {
        productArr1 = numberArr1[i] * productArr1;
    }

}
productArr1 = numberArr1.reduce((res, curr) => {
    return res * curr;
});
console.log('factorial of given array = ', productArr1); //277,200


//Product of given array using reduce method:
let pArr = [2,5,4,7,5,2,11,9];
let Output = pArr.reduce((prev, curr) => {
    return prev * curr;
})
console.log(Output); //277,200


//Print factorial:
let fact = 1;
for(let i = 1; i <= 5; i++){
    fact = fact * i;
}
console.log(fact); //120

//Product of given array using for loop:
let pArr1 = [2, 5, 4, 7, 5, 2, 0, 11, 9];
let productResult = 1;
for (let i = 0; i < pArr.length; i++) {

    if (pArr1[i] === 0) {
        console.log('Product Array has 0');
    }
    else {
        productResult = pArr1[i] * productResult;
    }

}
console.log(productResult);

//Window object:
console.log('hello'); //print the msg
window.console.log('hello2'); //global object
alert('hello');
console.dir(window.document); //document -> show properties/methods -> print object
console.log(window.document); //show html structure (html, head, body) but not use usually 
console.dir(document.head);
console.dir(document.body.childNodes[1]);
console.dir(document.body); //Output - null if we write script.js tag in head section

document.body.style.background = 'green';
document.body.childNodes[1].innerText = 'abcd'; //if we write something in body like h1 content, so change content through this tag

let heading = document.getElementById('heading');
console.log(heading); //<h1 id="heading">abcd</h1>
console.dir(heading); //h1#heading

let headings = document.getElementsByClassName('heading-class'); //written as HTML colllection like arrays
console.dir(headings); //HTML Collection(1)
console.log(headings);

let paras = document.getElementsByTagName('p');
console.dir(paras); //HTML Collection(2) p inner p
console.log(paras);

let firstElement = document.querySelector('p');
console.log(firstElement); //<p class="heading-class">Exploring New Skills</p>
console.dir(firstElement); //p.heading-class

let firstEl = document.querySelector('.myClass');
console.dir(firstEl);

let firstEle = document.querySelector('#myId');
console.dir(firstEle); //button#myId
console.log(firstEle); //<button id="myId">Click Me</button>

let allElements = document.querySelectorAll('p'); //first element
console.dir(allElements); //all elements // Output - NodeList(2) -> p.heading-class, p //
let allEl = document.querySelectorAll('.myClass');
console.dir(allEl);

// firstEl.tagName // 'P'

let childnode = document.querySelector("div").children;
console.dir(childnode);

let div = document.querySelector('div');
console.dir(div); //div.fruits
console.dir(div.innerText); //'Fruits\nApple\nMango\nBanana'
console.dir(div.innerHTML); //<h3>Fruits</h3><ul><li>Apple</li><li>Mango</li><li>Banana</li></ul>

let head = document.querySelector('h3');
console.dir(head);
console.dir(head.innerText = 'Fruits');
console.dir(head.innerHTML = '<i>Fruits</i>');
console.dir(head.textContent); //Fruits hidden content show

//Practice Questions:
// Q1.) Create a H2 heading element with text - 'Hello Javascript'. Append 'from Apna College students' to this text using JS.

let h2 = document.querySelector('h2');
h2.innerText = h2.innerText + ' from Apna College students';
console.dir(h2.innerText); //Hello Javascript! from Apna College students
console.log(h2.innerText); //Hello Javascript! from Apna College students

// Q2.) Create 3 divs with common class name - 'box'. Access them & add some unique text to each of them.

let divs = document.querySelectorAll('.box'); //div.box we use becoz we have div.fruits so if we want to change only box div then we use this
//Simple way

// divs[0].innerText = 'new unique value 1';
// divs[1].innerText = 'new unique value 2';
// divs[2].innerText = 'new unique value 3';

//If we have multiple divs then we use for loop in it like this:

// for(let i = 0; i <= divs.length; i++){
//     console.log(divs[i].innerText = `new unique value ${i}`);
// }

// OR

for(let i = 1; i <= divs.length; i++){
    console.log(divs[i - 1].innerText = `new unique value ${i}`);
}

//Using for-of loop:

// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }
// console.dir(divs); //NodeList 6
// console.dir(div); //div.box

//Chapter - 7: DOM - part2

// getAttribute
let di = document.querySelector('div#boxes');
console.log(di); // <div id="boxes" name = 'value'>this is single value</div>

let id = di.getAttribute('id');
console.log(id); //boxes

let name = di.getAttribute('name');
console.log(name); //value

let para = document.querySelector('p');
console.log(para.getAttribute('class')); //para

// setAttribute
console.log(para.setAttribute('class', 'newClass')); //in html coding we show change classname in p tag class="newClass"

//Style attribute
div.style.backgroundColor = 'purple';
div.style.fontSize = '20px';
div.style.textAlign = 'center';
div.style.visibility = 'visible';
div.innerText = 'Welcome JS:';
div.innerHTML = '<i>Welcome JS World:</i>';

let inner = document.querySelector('div.inner');
console.log(inner);
inner.style.backgroundColor = 'blue';
inner.style.fontSize = '18px';

let newBtn = document.createElement('button');
newBtn.innerText = 'Click Me!';
console.log(newBtn);
inner.append(newBtn); //at the end of div(inside)
inner.prepend(newBtn); //at the start of div(inside)
inner.before(newBtn); //before the div(outside)
inner.after(newBtn); //after the div(outside)
// inner.remove(); //remove the div

//Practice Questions:

// Q1.) Create a new button element. Give it a text 'click me', background color of red & text color of white. Insert the button as the first element inside the body tag.

let newButton = document.createElement('button');
newButton.innerText = 'Click Me!';
newButton.style.backgroundColor = 'red';
newButton.style.color = 'white';

document.querySelector('body').prepend(newButton);

// Q2.) Create a <p> tag in html, gitve it a class & some styling. Now create a new class in css and try to append this class to the <p> Element. 
// Did you notice how you overwrite the class name when you add a new one? Solve this problem using classList.

let content = document.querySelector('p.content');
content.getAttribute('class');
// content.setAttribute('class', 'newClass'); //overwrite the css
content.classList.add('newClass');
// content.classList.remove('newClass');

//Events in JS:
let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log('Handler1');
    let a = 25;
    a++;
    console.log(a); //26
}

btn1.onclick = (evt) => {
    console.log('Handler2');
    console.log(evt); //PointerEvent
    console.log(evt.type); //click
    console.log(evt.target); //<button id="btn1">btn1</button>
    console.log(evt.clientX, evt.clientY); //clientx means position 31, 226
}

let btnBox = document.querySelector('.btn-event');
btnBox.onmouseover = (evt) => {
    console.log('you are inside box');
    console.log(evt); //MouseEvent
    console.log(evt.type); //mouseover
    console.log(evt.target); // <div class="btn-event" onmouseover="console.log('you are inside div')">internal event button box</div>
    console.log(evt.clientX, evt.clientY); //78, 193
}

//Event Handler

btn1.addEventListener('click', (evt) => {
    console.log('button1 was clicked - handler1');
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX, evt.clientY);
})

btn1.addEventListener('click', () => {
    console.log('button1 was clicked - handler2');
})

// btn1.addEventListener('click', () => {
//     console.log('button1 was clicked - handler3');
// })

const handler3 = () => {
    console.log('button1 was clicked - handler3');
}
btn1.addEventListener('click', handler3);

btn1.removeEventListener('click', handler3); //button1 was clicked - handler1, button1 was clicked - handler2, button1 was clicked - handler4

btn1.addEventListener('click', () => {
    console.log('button1 was clicked - handler4');
})

//Practice Questions:

// Q1.) Create a toogle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let modeBtn = document.querySelector('#mode');
let body = document.querySelector('body');
let currMode = 'light';
modeBtn.addEventListener('click', () => {
    if(currMode === 'light'){
        currMode = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else{
        currMode = 'light';
        body.classList.add('light');
        body.classList.remove('dark');
    }

    console.log(currMode);

});

// Q2.) When you mouseover on any element, then changes something in your page.
let change = document.querySelector('body');
body.onmouseover = () => {
    console.log('Changes in my website');
    body.style.backgroundColor = 'yellow';
}

// OR

// change.addEventListener('onmouseover', (body) => {
//     console.log('Changes in my website');
//     body.style.backgroundColor = 'yellow';
    
// })

//Building Game: Stone, paper & Scissors: