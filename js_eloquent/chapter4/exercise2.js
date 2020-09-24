/*
Reversing an array

Arrays have a reverse method that changes the array by inverting the order in
which its elements appear. For this exercise, write two functions, reverseArray
and reverseArrayInPlace. The first, reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order.

The second, reverseArrayInPlace, does what the reverse method does: it modifies
the array given as argument by reversing its elements. Neither may use the
standard reverse method.

Thinking back to the notes about side effects and pure functions in the
previous chapter, which variant do you expect to be useful in more situations?
Which one runs faster?
*/

const reverseArray = (arr) => {
    let arrResult = [];
    for(let element of arr){
        arrResult.unshift(element);
    }
    return arrResult;
}

const reverseArrayInPlace = (arr) => {

    for(let i=0;i<arr.length/2;i++){
        changeValues(arr,i,arr.length -1-i);
    }
    return arr;
}

const changeValues= (arr,start,end) => {
    const valueStart = arr[start];
    const valueEnd= arr[end];

    arr[start]=valueEnd;
    arr[end]=valueStart;
}

const arr = [0,1,2,3,4,5,100];

console.log(reverseArray(arr));
console.log('After reverseArray: ' + arr + '\n'); // doesn't change the array

console.log(reverseArrayInPlace(arr));
console.log('After reverseArrayInPlace: ' +arr); // change the array

//these two functions have a for so it has a n complexity, but reverseArrayInPlace has more operations

// i dont know if this is what the exercise want by the way


// to see the result install node and type 

//cd chapter4 in the root of the project
//node exercise2.js