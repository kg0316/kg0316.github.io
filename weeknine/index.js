// a programming language has a concept called 'variables'
// a programming language has a concept called 'functions'

//---------------variables------------------
// a variable must be declared
var a; // declared a variable called a
// name is called the identifier
console.log("value of a:" + a); // a is undefined

// assign a value to the variables
a = 3;
console.log("value of a: " + a); // checking whether the code is working

// declare a variable and assign a value at the same time
var b = 4;

// update a value
a = 7;
console.log("value of a: " + a)

//-------------------Data type------------------
//number - integers, floating numbers (decimals)
var c = 7.27;
var d = 8;

// String - text, characters
var firstGreeting = "Hello"; //double quotation marks
var secondGreeting = 'World!'; //single quotation marks
console.log(firstGreeting + " ") + secondGreeting);

//boolean; true or false
var bln1 = true;
var bln2 = false;
console.log(bln1);
console.log(bln2);

//undefined
var declaredOnly; // a variable is declared not assigned a value yet

//finding out what the data type of a particular variable is
console.log(typeof bln1);
console.log(typeof c);

//-----------------let----------------
let e; //decalring a variable using 'let'
e = 10;
console.log("value of e: " + e);
//let vs var
//for 'let', you cannot declare a variable again using the same identifier
e = 11;
console.log("new value of e: " + e); // with 'let', you can update the values

//-----------------const-----------------
const pi = 3.141592; // you have to assign a value to const when you're declaring it
console.log("aprroximate value of pi: " + pi);

//-------------------summary----------------
//Date type: number, String, boolean, undefined
//declaring a variable: var, let, const
//let Vs var: let cannot be declared again
//const vs va: const cannot be decalred again
//let vs const; const cannot be declared again

//------------funcitons-------------------
console.log(typeof e);
console.log(typeof pi);
var str1= "3";
console.log(typeof str1); //String
var strToInt = parseInt(str1);
console.log(strToInt);
console.log(typeof strToInt); //number
var str2 = "Lina Kim";
console.log(parseInt(str2))
