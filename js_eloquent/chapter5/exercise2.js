/*
Your own loop

Write a higher-order function loop that provides something like a for loop
statement.

It takes a value, a test function, an update function, and a body
function.

Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.

When defining the function, you can use a regular loop to do the actual
looping.

*/

function myFor(start,test,update,body){
    let n=start;
    if(test(n) && update(1)>=1){
        update(body(n));
        n++;
        myFor(n,test,update,body)
    }else if(test(n) && update(1)<=1){
        update(body(n));
        n--;
        myFor(n,test,update,body)
    }
    
}

myFor(3, n => n >0, n => n - 1, console.log);
console.log('\n')
myFor(0, n => n < 5, n => n +1, console.log);

// to see the result install node and type 

//cd chapter5 in the root of the project
//node exercise1.js