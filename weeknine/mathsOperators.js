//Addition and subtraction of numbers
var x = 4;
var y = 3;

var a = x + y; // a new variable called 'a' is equal to the sum of x and y
var b = x - y; // a new variable called 'b' is equal to the difference of x and y
console.log(a);
console.log(x + y); // Addition
console.log(b);
console.log(x-y); //subtraction

//Multiplication
var c = x * y;
console.log(c);
console.log(x * y);

//Division
var d = x / y
console.log(d);
console.log(x / y);

//power (Index form) e.g. 2 'to the power of' 3 = 2 ** 3 = 8
var e= x ** y;
console.log(e);
console.log(x ** y);

// Remainder
var f = x % y;
console.log(f);
console.log(x % y);

// Order of precedence: brackets, **, multiplication & division, addition & subtraction
var g = (3 + 4) * 5; // 35
var h = 3 + 4 * 5; // 23
console.log(g);
console.log(h);

//Math Library made by JavaScript
//
//Library.function(input)
//E.g. Math.max (1, 2, 3):
//input -- function --> output

console.log(Math.round(1.77)); // round off
console.log(Math.ceil(1.24)); // round of-2
console.log(Math.floor(1.99)); // round down - 1
console.log(Math.min(3, 23432, 0, 4, 5)); //finds the smallest number
console.log(Math.max(3, 23432, 0, 4, 5)); //finds the largest numbers
console.log(Math.abs(-0.34)); //absolute values
console.log(Math.random()); //doesn't take any input; randomly picks a number in the

//Exercise: Write the code to randomly generate a number between 1 to 10

console.log(Math.random());

console.log(Math.ceil(Math.min() * 6));

//-------------Conceatenation----------------
//concatenate: link (things) together in a chain or series
var str1= "My name is";
var str2= "";
console.log(str1+str2); // concatenates two strings togerther

// String+ number --> converts the number into a String first, then concatenates two strings
//String + boolean --> converts the boolean into a String first, then concatenates two strings
//converting is called 'type coer'



var myNum;
myNum = 3;
console.log("value of myNum: " + myNum);
typeof
var myNum = 3;

var myStr;
var  = "";
var  = '';
