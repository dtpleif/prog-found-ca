//Theory: What is an object?

console.log("An object i an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs");

//Practical: Create an object for a musician with the properties of: name, number of albums, and whether they are alive or not

var musician = {name:"Bob Dylan", noOfAlbums: 53, alive:true};
var isAlive = "";

if (musician.alive = true) {
  var isAlive = "alive";
} else {
  var isAlive = "dead"
}

console.log("Name: " + musician.name + "  Number of albums: " + musician.noOfAlbums + "  Is " + isAlive);


//Theory: What is an array?

console.log("\nAn array is collection of items stored at contiguous memory locations. It stores multiple items of same type together.");

//Practical: Create an array of musicians including the object created above. In total there should be 4 musicians in the array.

var musician1 = {name:"Bob Dylan", noOfAlbums: 50, alive:true};
var musician2 = {name:"Elvis Presley", noOfAlbums: 100, alive:false};
var musician3 = {name:"Tracy Chapman", noOfAlbums: 10, alive:true};
var musician4 = {name:"David Bowie", noOfAlbums: 40, alive:false};

var musicians = [musician1, musician2, musician3, musician4];


//Theory: What is a for loop?

console.log("\nloops are used to repeatedly run a block of code - until a certain condition is met. ");

//Practical: Using a for loop, go over the array created above and console.log out each musicians's name and number of albums. It should read "XXXX has released XXXX number of albums"

var musician1 = {name:"Bob Dylan", noOfAlbums: 50, alive:true};
var musician2 = {name:"Elvis Presley", noOfAlbums: 100, alive:false};
var musician3 = {name:"Tracy Chapman", noOfAlbums: 10, alive:true};
var musician4 = {name:"David Bowie", noOfAlbums: 40, alive:false};

var musicians = [musician1, musician2, musician3, musician4];

for (let i = 0; i < musicians.length; i++) {
  console.log(musicians[i].name + " has released " + musicians[i].noOfAlbums + " number of albums");
}


//Theory: What is a function?

console.log("\nA function is a procedure — a set of statements that performs a task or calculates a value. ");

//Practical: Create a function which adds a musician to your array. The new musician must be passed into the function as an argument. Use the push() method to add to your array.

var musician1 = {name:"Bob Dylan", noOfAlbums: 50, alive:true};
var musician2 = {name:"Elvis Presley", noOfAlbums: 100, alive:false};
var musician3 = {name:"Tracy Chapman", noOfAlbums: 10, alive:true};
var musician4 = {name:"David Bowie", noOfAlbums: 40, alive:false};

var musicians = [musician1, musician2, musician3, musician4];
var musician5 = {name:"Bruce Springsteen", noOfAlbums: 35, alive:true};

function addMusician(musician5) {
  musicians.push(musician5);
}
console.log(musicians);
addMusician()

for (let i = 0; i < musicians.length; i++) {
  console.log(musicians[i].name + " has released " + musicians[i].noOfAlbums + " number of albums");
}


//Theory: What is a conditional statement?

console.log("\nConditional statements are used to perform different actions based on different conditions. Ex. use if to specify a block of code to be executed, if a specified condition is true");

//Practical: Create a conditional statement which tests whether the musician is alive or not. If they are alive log out "I look forward to hearing more from XXXX" and if they are no longer alive "XXXX will be missed".

var musician1 = {name:"Bob Dylan", noOfAlbums: 50, alive:true};
var musician2 = {name:"Elvis Presley", noOfAlbums: 100, alive:false};
var musician3 = {name:"Tracy Chapman", noOfAlbums: 10, alive:true};
var musician4 = {name:"David Bowie", noOfAlbums: 40, alive:false};

var musicians = [musician1, musician2, musician3, musician4];

if (musician.alive = true) {
  var isAlive = "alive";
} else {
  var isAlive = "dead"
}

for (let i = 0; i < musicians.length; i++) {
  console.log(musicians[i].name + " has released " + musicians[i].noOfAlbums + " number of albums");
}
