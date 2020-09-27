/*
Flattening

Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.
*/

const arr= [[1,2,3],[5,6],[4],[9.5,10,1]];

const arrResult =arr.reduce((a,b) => {
    //console.log('a: ',a,'b: ',b)
    return a.concat(b)
},[])

console.log(arrResult)

//see the reduce abstract function in this book, we set start with an empty array and them
//we set the combine with (a,b) => a.concat(b) (a is the current value and b the next value)
// then a that is the [] and b is [1,2,3] we concat the two and then a is [1,2,3]
//[1,2,3].concat([5,6]) and them a = [1,2,3,5,6] and then it goes...

// with exercises like this that you can understand reduce

// to see the result install node and type 

//cd chapter5 in the root of the project
//node exercise1.js