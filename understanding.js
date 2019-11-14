/* console.log([] === 0); // false coz the array is not exactly 0 i.e compares both the value and datatype.....datatype for an array is an object and 0 is a number
console.log([] == 0); //true coz the length of the array is 0 i.e the values match......value is same but datatype isn't

//write a  loop that outputs numbers from 200 to 0

for (var loop1 = 200; loop1 >= 0; loop1--) {
  console.log("This is the answer \t" + loop1);
}
 */
//while loop that doesn't stop
/* while(true){
    console.log(2);
} */

//using switch condition to choose a telecom menu e.g ussd airtel
//can also have a switch under a switch
/* var ussdOptions = prompt("Enter a number corresponding to your choice");
ussdOptions = Number.parseInt(ussdOptions);

switch (ussdOptions) {
  case 1:
    console.log("Send Money");
    break; // it will break each time it finishes the case so that it doesn't continue to the next
  case 2:
    console.log("Airtime/Bundle");
    break;
  default:
    console.log("unknown input");
}


//using if and else when there are conditions like <, > etc

//adding 2 numbers in a function
function add(a,b){
  var c = a+b;
  console.log(c)
}

add(10,20) */





//functions
/* var getFullName = (firstName, secondName)=>{
  let fullName = firstName+" "+secondName
  console.log('hello ', fullName)
  return fullName
}
getFullName("maria", "angella"); */



/* 1. function declaration */
/* var addition = function (){}; //anonymous function...function without a name i.e can only be used once
var addition = () => {}; //anonymous function...function without a name i.e can only be used once
function addition () {} //no need for termination since there's no assignment (=) */




/* 2. function definition */
/* var addition = () => {
      console.log(7 + 8); //2. function definition
    }; */




/* 3. function call or Invoking a function */
// immediately invoked a function
/* (() => {
  console.log(7 + 8); 
})(); 
// another immediately invoked a function
(function(){console.log(7+8)})()
// calling a function anytime
addition();    */ 




/* 4. parameterized functions with their arguments.........parameters are specifed and take up values during calling*/
//display 11
/* var addition = () => {
  let x =7;
  let y =4;
  console.log(x+y); 
};
addition();  

//display what answer you want with your values
var addition = (x,y) => {
  console.log(x + y);
};
addition(2,6); //2 and 6 are arguments that are in place of the parameters x and y
addition(7, 6); 
addition(7, 46);  */




/*5. Return */
/* var addition = (x, y) => {
  let sum =x+y
  return sum; // computer stops executing the function...i.e the below code is not executed

}; */

//another return example.... declare another variable first to capture the function value and use it for other operations
/* let myAddition = addition(7,8);
console.log(myAddition*2); */


























/* 3 functions for addition, subtration and multiplication */
// function addition
/* var addition = (r,s) => {
  let sum = r+s
  return sum;
};
//function subtraction
var subtraction = (t,u) => {
  let sub = t - u;
  return sub;
};
//function multiplication
var multiplication = (r,s,t,u) => {
  let mul = addition(r,s)*subtraction(t,u);
  console.log("my answer is \t" + mul);
  return mul;
};

multiplication(1,2,3,4) */
















/* var,let and const -----global scope,local scope and block scope*/
//with var, it's value is accesses globally in the code
/* var name = 'maria'
function printname(){
  console.log(name);
}
printname()

 */
//Also with let, it's value is accessed in the global scope in the code
/* let name = "maria";
function printname() {
  console.log(name);
}
printname(); */


//with var inside a function
/* function printname() {
  var name = "maria";
  console.log(name);
}
printname();

function printname2() {
  var name = "angella";
  console.log(name);
}
printname2(); */

//2nd declaration overrides the 1st declaration
/* var name ='maria'
var name = 'angella'
console.log(name) */

//global scope variables if they are at the start of code
/* var a;
let b; */
// const c;

//local scope, d is a local variable inside the function....and d is global to the innerfunction1 function
/* function myfunction1(){
  a = 'maria'
  var d;
  function innerfunction1(){
    a = 'angella'
    d = 'other name'
  }
} */

/* function myfunction2(){
  //block scope
  if(a===1){
    let a = 1;
  }
  console.log('it is one')
  
}
myfunction2() */


// a is defined
/* function myfunction2() {
  if (true) {
    var a = 1;
  }
  console.log(a);
}
myfunction2(); */
  
// a is undefined
/* function myfunction2() {
  if (true) {
    let a = 1;
  }
  console.log(a);
}
myfunction2(); */

//both declared and defined
/* var f = 1
//only declared
var f
 */
//f can also be acceses outside the block unless within a function with var
/* for(var f = 100;f>=0;f--){
  var g =4  //not with let
  console.log(f)
}
console.log(g);
 */



 //Objects
 /*  */
 /* function person(name){
  this.name = name
 }
 var james = new person('james')
 console.log(james.name) */















 /*3 ways of coming up with objects
 1. object literals
 2. Factory(objects)
 3. constructor */

 //object literal--------object maria is created using object literal
/*  var mariaAngella ={
   firstName:"Maria",
   lastName:"Angella",
   age:29,
   gender:"Female",
 };


 var alexi = {
   color:"green",
   mailage:"10000",
   size:"large",
   model:"2019",
 };

 var techno = {
   color: "green",
   model: "2019",
   screensize: "large",
   
 }; */
 



 /* There are different ways to create new objects:

Define and create a single object, using an object literal..........you both define and create an object in one statement.
Define and create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type. */


//object literal----create it yourself(you have to create for many objects e.g maria, jerome, patrick etc-----tiring though executes very fast)
/*  var KiizaBoniface = {
   firstName: "Kiiza",
   lastName: "Boniface",
   age: 29,
   gender: "Female"
 };

 console.log(KiizaBoniface)
 console.log(KiizaBonifac.firstName);

  var jeromeMwesigye = {
    firstName: "Jerome",
    lastName: "Mwesigy",
    age: 29,
    gender: "Male"
  };

  console.log(jeromeMwesigye)
  console.log(jeromeMwesigye.age); */


//example of a brick(object) and  brick maker(template)
/* object factory -----function should start with a capital letter */
// Student is the template or manufacturer and the return{} returns a literal object
/* function Student(givenFirstName, givenLastName, givenAge, givenGender) {
  return {
    firstName:givenFirstName,
    lastName:givenLastName,
    age:givenAge,
    gender:givenGender,
  };
}

//function call for jerome literal object
let jerome = Student("Jerome","Tumwesigye", 120, "Male")
let patrick = Student("Patrick", "Opio", 20, "Male");
console.log(jerome)
console.log(patrick.age);
 */





 /*object constructor-----create what looks like you 
 .....start functon name with small letter  
 .......this.----turns the function into a constructor*/
/*  function car(carModel, carSpeed, carColor, carFuelType, carBrand) {
   this.model = carModel;
   this.speed = carSpeed;
   this.color = carColor;
   this.fuelType = carFuelType;
   this.brand = carBrand;
 }
//now use the constructor to create objects------create an instance object that behaves(new) like the constructor
const myford = new car(2019,180,"blue","petrol","ford")
const bmw = new car(2017, 280, "black", "diesel", "bmw");
console.log(myford)
console.log(bmw.color);
console.log(myford.brand);
 */





/* you are hired by the government of uganda to design a factory system that generates mobile phones and render them market ready.
all phones share the following specifications in common
1. Brand
2. model
3. color
4. battery life
category which is either 'smart' or 'other' */

/* use factory------------not usually used
below is the reason
 */
/* var mystring = "this is a string"
// var myString1 = string("this is also a string") //brings errors coz string is not defined
var myString2 = new string("this is also another string")
console.log(typeof myString2) */

/* constructor advantage over factory
1. access to object is easy
2. easily make changes */



 /* function Phone(phoneBrand, phoneModel, phoneColor, phoneBatterylife) {
   return {
  brand: phoneBrand,
   model: phoneModel,
   color: phoneColor,
   batterylife: phoneBatterylife,
   };
 }
let iphone = Phone("iphone", "2019", "blue", "long");
let techno = Phone("techno", "2018", "green", "short");
console.log(iphone);

console.log("\n");

console.log(techno.color);
console.log(techno.brand);





 //using constructor 
 function bag(bagname, bagtype, bagcolor, bagsize, bagdurability, bagmanufacturer) {
   this.name = bagname;
   this.type = bagtype;
   this.color = bagcolor;
   this.size = bagsize;
   this.durability = bagdurability;
   this.manufacturer = bagmanufacturer;
 }
 //now use the constructor to create objects------create an instance object that behaves(new) like the constructor
var backpack = new bag("menbackpack", "leather", "any", "central", "big", "uganda")
var handbag = new bag("womenhandbag", "leather", "any", "central", "big", "uganda")

 console.log(backpack);
 console.log("\n");
 console.log(handbag.name);
 console.log(handbag.color);
 */


/* to correct values using . notation in a constructor */
/* function person(givenName){
  this.name = givenName
}

let patrick = new person("Patrickkk")
console.log(patrick.name)

patrick.name = "Patrick" // can easily correct the value after the constructor above
console.log(patrick.name); */

/* to instantiate later */
/* function person(){
  this.name = undefined
}

let patrick = new person()


patrick.name = "Patrick" // giving/instantiating the name later in the code
console.log(patrick.name);

 */


/* to instantiate later using the bracket notation----------bracket notation is very powerfull than the dot. notation but dot. notation adv is that it is very easy to use */
/* function person(){
  this.name = undefined
}

let patrick = new person()


patrick["name"] = "Patrick" // giving/instantiating the name later in the code
console.log(patrick["name"]);
console.log(patrick.name); */




/* class is a modified constructor 
Diff btn the following: 
properties(attributes) and methods(behaviour)----- property is a value stored in the hash key(describes the characteristics of an object), whereas method is a function stored in hash key(how the characterizes behave--e.g how a person eats).
attributes and behaviour-------attributes refers to additional information of an object*/

/* class Person{
  constructor(){
    this.name = "maria";
    this.age = "29";
  }
  //implement behaviour here
  digest = function () {
    console.log("I'm digesting")
  }
  talk(){
    console.log("I'm talking");
  }
  walk(){
    console.log("I'm walking");
  }
}
 */

/* for many objects or persons use below */
/* class Person {
  //put properties in the constructor
  constructor(givenName, givenAge) {
    this.name = givenName;
    this.age = givenAge;
  }
  //implement behaviour/methods here in the class
  digest() {
    console.log("I'm digesting");
  };
  talk() {
    console.log("I'm talking");
  }
  walk() {
    console.log("I'm walking");
  }
}

let sandra = new Person("sandraNantume", "30");
console.log(sandra)
console.log(sandra.age);
//public display using this for constructor but in a class, use the object.  ----so to get the methods public, do the following
console.log(sandra.walk())
//console is an object and log is a method----just like sandra is an object and walk is a method
sandra.walk();
 */






/* 4 objects and their behaviours/methods using class
 */
//one
/* class Phone {
  
  constructor(phoneName, phoneAge) {
    this.pname = phoneName; //this is for making pname public
    this.page = phoneAge;
  }
  
  charge() {
    console.log("I'm charging");
  }
  text() {
    console.log("I'm texting");
  }
  call() {
    console.log("I'm calling");
  }
}

let tecno = new Phone("mytechno", "30");
console.log(tecno);
tecno.call();





//two
class Cow {
  
  constructor(cowName, cowAge) {
    this.cname = cowName;
    this.cage = cowAge;
  }
  
  digest() {
    console.log("I'm digesting");
  }
  moo() {
    console.log("I'm mooing");
  }
  sit() {
    console.log("I'm sitting");
  }
}

let indegenous = new Cow("indegenouscow", "3");
console.log(indegenous);
indegenous.moo();






//three
class Vehicle {
  constructor(vehicleName, vehicleAge) {
    this.vname = vehicleName;
    this.vage = vehicleAge;
  }

  fuel() {
    console.log("I'm fueling");
  }
  park() {
    console.log("I'm parking");
  }
  repair() {
    console.log("I'm repairing");
  }
}

let benz = new Vehicle("bmw", "13");
console.log(benz);
benz.park();





//four
class Laptop {
  
  constructor(lapName, LapAge) {
    this.lname = lapName;
    this.lage = LapAge;
  }
  
  charge() {
    console.log("I'm charging");
  }
  boot() {
    console.log("I'm booting");
  }
  reboot() {
    console.log("I'm rebooting");
  }
}

let toshiba = new Laptop("toshibasmall", "33");
console.log(toshiba);
toshiba.boot(); */









/* class Car {
  constructor(carcolor, carspeed) {
    this.color = carcolor;
    this.speed = carspeed;
  }
  ignite() {
    console.log("I am igniting");
  }
  start() {
    console.log("I am starting");
  }
}

const car1 = new Car("black",180) //const is better used than let/var
console.log(car1);
console.log(car1.speed)
car1.start(); */










/* Bank hired you to design a system to help them best deliver to their clients
1. create account
2. credit the account in dollars
3. debit the account in dollars
4. close the account 
5. check the balance*/

/* class Account {
  constructor(
    accountname,
    accountnumber,
    accountlocation,
    accountopendate,
    accounttype,
    acountbalance
  ) {
    this.name = accountname;
    this.number = accountnumber;
    this.location = accountlocation;
    this.opendate = accountopendate;
    this.type = accounttype;
    this.balance = acountbalance;
  }
  create(
    accountname,
    accountnumber,
    accountlocation,
    accountopendate,
    accounttype,
    acountbalance
  ) {
    this.name = accountname;
    this.number = accountnumber;
    this.location = accountlocation;
    this.opendate = accountopendate;
    this.type = accounttype;
    this.balance = acountbalance;
    console.log("I am creating your account");
  }
  create(){

  }
  credit(deposit) {
    this.balance = this.balance + deposit;
    console.log(`Crediting your account by${deposit}`);
  }
  debit(withdraw) {
    
    if (withdraw>this.balance){
      console.log("you cannot withdraw more than your balance")
      return false
    }
    if((this.balance - withdraw)<50000){
console.log("balance cannot fall below 50000")
return false
    }

    this.balance = this.balance - withdraw;
    console.log(`Debiting your account by${withdraw}, your balance is ${this.balance}`);
  }
  close(balance) {
    this.balance = this.balance - balance
    console.log("I am closing your account");
  }
  check() {
    console.log(Number.parseFloat(this.balance));
  }
}

const mariaaccount = new Account("mariaangella",34430987778,"Muyenga", "12/12/2020", "savings Account", 200000); 
console.log(mariaaccount);
console.log(mariaaccount.number);
console.log(mariaaccount.type);
mariaaccount.check();
mariaaccount.check("my other name","savings account");

console.log("\n")

mariaaccount.credit(50000)
mariaaccount.check()
mariaaccount.debit(20000)
mariaaccount.check()
mariaaccount.debit(150000);
mariaaccount.check();
mariaaccount.debit(40000);
mariaaccount.check();
mariaaccount.debit(140000); */






/* class Account {
  constructor(accountName, accountType, accountBalance) {
    this.name = accountName;
    this.type = accountType;

    if (accountBalance >= 50) {
      this.balance = accountBalance;
      console.log("New", accountType, "account created by", accountName);
    } else {
      throw "Minimum opening balance should be atleast 50"; //throw also shows the errors and returns false by default
      console.log;
    }
  }

  credit(deposit) {
    console.log("Crediting Account..........");
    this.balance = this.balance + deposit;
    console.log(`Your Account has been Credited by  ${deposit}`);
  }

  check() {
    console.log(Number.parseFloat(this.balance));
    return this.balance;
  }

  debit(withdraw) {
    if (withdraw > this.balance) {

    }
    else{
      console.log("You cannot withdraw more than you have currently")
      return false
    }

    if ((this.balance - withdraw) < 50) {
     
      console.log("Your balance cannot fall below 50");
      return false;
    }

    
  }
}

const account1 = new Account("Maria","current",200)
account1.credit(20)
account1.check();
account1.debit(50)
account1.check();
account1.debit(200);
account1.check(); */







/* ARRAYS */
//Array Literal ......storing one value under the same variable name
/* let marks = [90,80,45,79];

console.log(marks)

console.log(typeof marks)

console.log(`You scored ${marks[0]} in Mathematics`) //template literal``

console.log(marks[3]);

marks[2]=95;
console.log(marks[2]); */

//Array constructor
/* let marks = new Array(90, 80, 45, 79);
console.log(marks.length);
marks[4]=54; //adds the 5th number
console.log(marks.length);

console.log(marks.pop()); //removes the last value and returns it
console.log(marks)

console.log(marks.push(33));//adds to the list
console.log(marks); */

/* slice()---returns a shallow copy of a portion of an array into a new array
,splice()---method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
,split()----method splits a string into a list */


let items = [2,3,4,5]

// numbers.map(() => {});
/* items.map(function(item){
  console.log(item*item)
  document.write("<li>" + item * item + "</li>");
});

items.filter()

 */

/* let filteredArray = items.filter(item=>{
  return item>3;
})
console.log(filteredArray) */


//spread operator
/* let vowels = ['a','e','i','o','u']
let consonants = ['b','c','d','f','g']

let alph = [...vowels,...consonants];
console.log(alph.sort()); //sort orders them correctly */







/* Regular Expressions */
/* example@domain.tld------tld(top level domain)
1. It must start with an alphabet character
2. It must not start with uppercase
3. It should have 3 partitions{random name,domain,tld} 
4. The tld must have a minimum of two alphabet characters
5. It must only have one @ character
6. the random name must not contain special characters with the exception of {._}
7. It must not contain a space
8. the dot character should not immediately follow the @ character
9.*/


/* let email = "jerome.com"
let mychar = email.charAt(1);
console.log(mychar) */

/* Regular Expressions */
// let email = document.getElementById('email').value
/* let email = "maria5angella@gmail.com"
let emailValidator = new RegExp("^$");
 */
/* use the literal Regular expression */
/* let email = "maria5angella@gmail.com";
console.log(/e/.test(email))
console.log(/b/.test(email));

// strings


console.log(email.replace("maria5angella", "woman"));
console.log(email.replace(/maria5angella/i, "woman")); //the i makes the string less case sensitive */

// let emailValidator = /^$/;

/* let email = "maria5angellaMaria5angella@gmail.com";
console.log(email.replace(/maria5angella/ig, "woman")); //i and g for global flag */



/* 
let names = "john mary ritah";
let pattern = /\w/   ///\w/ same as [A-Za-z0-9];
let pattern = /\w/g/; 
let allNames = names.match(pattern)
console.log(allNames)
 */

// let name = "bonface14@gmail.com";
// // let pattern = /Jackson/;
// let pattern = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]{2,3}$/; //+ means match more than one charcter
// // let pattern = /^[a-zA-Z0-9]+@?$/; //+ means match more than one charcter
// // let pattern = /^[a-zA-Z0-9]+@*$/; //+ means match more than one charcter
// let answer = pattern.test(name);
// console.log(answer)

//let username="Boniface14"
//let myValidator=/^[a-zA-Z0-9]+$/
//console.log(myValidator.test(username));

//let username="14Boniface"
//let myValidator=/^[a-zA-Z][0-9]-+$/
//console.log(myValidator.test(username));

//let username="Boniface14-kiiza"
//let myValidator=/^[a-zA-Z]+[0-9]+[a-zA-Z_.-]+$/ //the $sign ends the expresssion
//console.log(myValidator.test(username));

//let username="Boniface14&kiiza"
//let myValidator=/^[a-zA-Z]+[0-9]+[a-zA-Z_.-]?$/ // the expression before the $ is optional
//console.log(myValidator.test(username));

//let username="Boniface14$kiiza"
//let myValidator=/^[a-zA-Z]+[0-9]+([a-zA-Z$_.-]+)?$/ // grouping expressions with a bracket
//console.log(myValidator.test(username));

let username="Boniface14@gmail.com"
let myValidator=/^[a-zA-Z]+([0-9$&]+)+[a-zA-Z]+.[a-zA-Z]+[2,3]+$/ // grouping expressions with a bracket
console.log(myValidator.test(username));

