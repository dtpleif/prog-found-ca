//Question 1

console.log("Question 1");

var luckyNumber = 15;

for (luckyNumber; luckyNumber < 26; luckyNumber++) {
  if (luckyNumber%2 == 0) {
    console.log(luckyNumber);
  }
}


//Question 2

/*Create a function that logs the sentence "I am a function".
Assign this function to a variable called innerFunction.
Create another function called outerFunction that accepts one argument.
Inside outerFunction, call the argument like you would a function - with parenthesis ().
Call outerFunction and pass in the innerFunction variable.*/


console.log("\nQuestion 2");

var innerFunction = functionStatement();

function functionStatement() {
  return "I am a function.";
}

function outerFunction(Argument) {
  functionStatement("I am a function.");
}

outerFunction(innerFunction);


/*Sorry. I did not understand the question ... "Inside outerFunction, call the argument like you would a function - with parenthesis ()."*/
