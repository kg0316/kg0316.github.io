// declare and assign three variables
var a = 3; //number
var b = 4; //number
var c = "3"; //string

// equality operators
// ==
console.log(a == b); // false
console.log(a == c); // == converts the variable into a string then compare

// ===
console.log(a === c); // false; checks the data types as well

// > < >= <=
console.log(a < b); //true

//declare and assign 4 string variables
var str1 = "aqeert"
var str2 = "bjrioj"
// a comes before b
console.log(str1 < str2); // true because a is considered 'less' than b

/*
a=1
b=2
c=3
...
abcd= 1+ 2+ 3+ 4=10
abce= 1+ 2+ 3+ 5=11

so, abce is bigger than abcd
*/
var str3 = "abcdefg"
var str4 = "abcdefi"
console.log(str3 < str4); //true

// and '&&', or operator
// (condition 1) && (condition 2)
// true && true : true
console.log(2 < 3 && 2 == "2");
//true && false : false
console.log(2 < 3 && 2 === "2");
//false && true : false
//false && false : false

//or ll operator
//either condition 1 OR condition 2 have to be true
// (condition 1) ll (condition 2)
// true ll true : true
console.log(2 < 3 || 2 == "2");
// true ll flase : true
console.log(2 < 3 || 2 ==="2");
//false ll true : true
//false ll false : false

//opposite, exclamation mark operator
console.log(!true) //false
console.log(!(3 > 4)) // (3 > 4) is flase but because of the exlamation mark operator, it turns into true

// 'is not equal to' operator : inequality operator
// !=
console.log(3 !=4); //true







// Control flow statements
// Conditional statements
// if, if else, else if

// 1. if statements
// if (condition) {
//   // executable codes
//   // codes you want to be executed when this condition is true
// }

if ( 3 == "3") {
  console.log("equality operator == doesn't check the data types.");
}

// 2. if else statement
// if (condition) {
//   //if the condition is true, do things
//   //codes
// }

if (3 === "3") {
console.log("Equality operator == doesn't check the data types.");
} else {
  console.log("Fix your code.");
}

if (3 === "3") {
console.log("Equality operator == doesn't check the data types.");
}

// 3. else if statement?if (condition 1) {
  // if condition 1 is true, do this
  //codes
// } else if (condition 2) {
  // if condition 2 is true, do this
  //codes
  // if both conditions 1 and 2 are false, move on
// } else if (condition 3) {
  // if condition 3 is true, do this
  //codes
// } else {
//if all conditions are not true, do this
//codes
// }






// loop: when you want to repeat something as long as it satisfies a certain condition
//when this certainc condition is no longer stisfied, the loop will stop operating

// while (it is before 12pm) {
//   package each product
//   stamp as seal
// }

// while (condition) {
  //while this condition is satisfied, execute thes codes
// }

var i = 0; // initialise a variable

// count up to 9
while (i < 10) { // as long as i is less than 10
  console.log(i); // print out the value of i
  i = i + 1; // increase the value of i by 1
}

// infinite loop
//avoid this as best as you can

//2. do while loop
//do {
//  // executable codes
//  while (condition)
//
// do {
// console.log("Would you like to order something?")
// } while (user says no)


// do {
//   //executable codes
// } while (condition)

// do {
// console.log("Would you like to order something?");
// } while (user says no)

let j = 10;
do {
  console.log(j);
  j++ // shorted form of j=j+1
} while (j < 10)


// // 3. for loop
// for (initialise; condiiton; update) {
//   //do something
// }

let k = 0;
while (k < 10) {
  console.log(k);
  k++;
}

for (let k = 0; k < 10; k ++) {
  console.log(k);
}





// a programming language has a concept called 'functions'

// function has 4 parts: identifier, function, parameter, actions

// create a function
var add = function(a, b) {
  var sum = a +b;
  return sum;
}
// 'add' is the identifier of our function
// a and b are two parameters this function takes
// each time this function is called, it creates a variable called sum which takes the value (a+b) and returns it

// input --> function --> output

// calling a function
console.log(add(5,39));
console.log(add(3, 4));
console.log(add(430801, 327092834));
console.log(add(9080, 1));

//functions without parameters
//functions with if statement
var subtractPosAns = function() {
  var a = Math.ceil(Math.random() * 100);
  var b = Math.ceil(Math.random() * 100);
  // a and b are randomly generated numbers from 1 to 100

  if (a >= b) {
    console.log(a + "-" + b + " = ?");
  } else {
    console.log()
  }
}

// call this function - demonstration
for (var i = 0; i < 10; i++) {
  subtractPosAns();
}


//call a function inside loop
for(var i=0; i<10; i++) {
  subtractPosAns();
}

let m = 0;
while (m < 10) {
  subtractPosAns();
  m++;
}








//Q1
var a = 3;
var b = 4;


//Q4
var multiply = function() {
  var a = Math.ceil(Math.random() * 100)
  var b = Math.ceil(Math.random() * 100)
  console.log(a + "*" + b + "=")
}


multiply();
