//Question 1

console.log("Question 1");

var name = "Leif Ketil Solberg";

console.log(name);


//Question 2

console.log("\nQuestion 2");

var person = {firstName:"Leif Ketil", lastName:"Solberg", age:53};

console.log("My name is "+person.firstName+" "+person.lastName+" and I am "+person.age+" years old");


//Question 3

console.log("\nQuestion 3");

var outOfStock = false;

if (outOfStock == true) {
  console.log("Out of stock.");
} else {
  console.log("In stock.");
}


//Question 4

console.log("\nQuestion 4");

var numbers = [100,200,300,400,500];

for (let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}


//Question 5

console.log("\nQuestion 5");

var luckyNumber = 15;

for (luckyNumber; luckyNumber < 26; luckyNumber++) {
   console.log(luckyNumber);
}

//Question 6

console.log("\nQuestion 6");

var newLuckyNumber = 15;

for (newLuckyNumber; newLuckyNumber < 26; newLuckyNumber++) {
  if (newLuckyNumber == 20) {
    console.log("The lucky number is " + newLuckyNumber);
  }
}


//Question 7
console.log("\nQuestion 7");

var person1 = {name:"Leif Ketil", age:53, male:true};
var person2 = {name:"Kersti", age:55, male:false};

var persons = [person1, person2];

for (let i = 0; i < persons.length; i++) {
  console.log("Name: " + persons[i].name + "  Age: " + persons[i].age + "  Boolean value: " + (persons[i].male == true));
}


//Question 8

console.log("\nQuestion 8");

var animals = ["dogs","cats","horses"];

for (let i = 0; i < animals.length; i++) {
  console.log("I don't like " + animals[i]);
}


//Question 9

console.log("\nQuestion 9");

var sum = subtraction(10,16);

function subtraction(a,b) {
  return a - b;
}

console.log("Sum = " + sum);


//Question 10

console.log("\nQuestion 10");

var cities = [];

function addCities(city) {
  cities.push(city);
}

addCities("Oslo");

console.log(cities);
