/*
Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/

const min = (number1,number2) => {
    return Math.min(number1, number2)
}

console.log(min(4,5));

//this is a funny because you can make Math.min(4,5) and you get the same result lol
//But for practice here it goes :P

// to see the result install node and type 

//cd chapter3 in the root of the project
//node exercise1.js

