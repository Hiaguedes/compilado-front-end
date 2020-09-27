/*
Everything

Analogous to the some method, arrays also have an every method. This one
returns true when the given function returns true for every element in the array.
In a way, some is a version of the || operator that acts on arrays, and every is
like the && operator.

Implement every as a function that takes an array and a predicate function
as parameters. Write two versions, one using a loop and one using the some
method.
*/

let arr = [1,4,7,8,10];

function every(array,test){
    for(let element of array) {
        if(!(test(element))) return false
    }
    return true
}

console.log(every(arr, n => n > 0));
console.log(every(arr, n => n > 10));
console.log(every(arr, n => n < 5));

console.log('\n');

function everyWithSome(array,test){
    return !array.some(element => !test(element))
}

console.log(everyWithSome(arr, n => n > 0));
console.log(everyWithSome(arr, n => n > 10));
console.log(everyWithSome(arr, n => n < 5));

//this last one is kinda hard, if the test is true, so it passes false
// if one of them is false it passes true to the some, so it is false 

// to see the result install node and type 

//cd chapter5 in the root of the project
//node exercise3.js
