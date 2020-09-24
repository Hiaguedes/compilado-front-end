/*
Deep comparison

The == operator compares objects by identity. But sometimes you’d prefer to
compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.

But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

*/

const deepEqual = (val1,val2) => {
    if((typeof val1 && typeof val2) == 'object'){
        val1 = JSON.stringify(val1);
        val2 = JSON.stringify(val2)
    }

    return val1 === val2
}

const obj = {
    name: 'Hiago',
    subject: 'javaScript'
}

const obj1 = {
    name: 'Hiago',
    subject: 'javaScript'
}

const obj2 = {
    name: 'Hiago',
    subject: 'Microcontrollers'
}

console.log(deepEqual(obj,obj1));
console.log(deepEqual(2,2));
console.log(deepEqual(2,'2'));
console.log(deepEqual(obj,null));
console.log(deepEqual(obj2,obj));
console.log('\n');


let ob = {here: {is: "an"}, object: 2};
console.log(deepEqual(ob, ob));
// → true
console.log(deepEqual(ob, {here: 1, object: 2}));
// → false
console.log(deepEqual(ob, {here: {is: "an"}, object: 2}));
// → true


// to see the result install node and type 

//cd chapter4 in the root of the project
//node exercise4.js