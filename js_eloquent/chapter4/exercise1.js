/*
The sum of a range

The introduction of this book alluded to the following as a nice way to compute
the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.

As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

const range = (start,end,increment=1) => {
   const arr = [...new Array(end-start+1)].map((cell,index) =>
        start + index*increment
   ) // ok this is complex even for me hahah i create a array object with the numbers of elements he will have with [...new Array(number of elements)], the rest operator who created them (without this i will only creat a object with on value that can have 10 elements)
    //and them the map who will attribute the value igual start (1), plus the index (or increment) (1+0,1+1,1+2...) to other elements
   return arr;
}

const arr = range(1,10,2);
console.log('arr: '+ arr)

const sum = arr => {

    return arr.reduce((acc,cur) => acc+cur,0); // reduce is a operation with array who can sum elements in array

}//ok this is what you use at work, to make sum by hand you make

const sumByHand = arr => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    })
    return sum;
}//simple as that

console.log(sum(arr));
console.log(sumByHand(arr));


// to see the result install node and type 

//cd chapter4 in the root of the project
//node exercise2.js