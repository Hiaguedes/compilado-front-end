/* 
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:

• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?
*/

let isEven = (n) => {
    //console.log(n); //to see the recursion

    switch(true){
        case (n<0):
            throw new Error(`Negative Value: please input some integer and positive value`);
        
        case(n==0):
            return true;
        
        case(n==1):
            return false;
        
        case(n>1):
            return isEven(n-2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// can make with if-else control using, but with switch is more elegant :D

/*
Solution using if-else (delete switch and put this)

    if(n<0){
        throw new Error(`Negative Value: please input some integer and positive value`);
    }else if(n==0){
        return true;
    }else if(n==1){
        return false;
    } else if(n>1){
        return isEven(n-2)
    }
*/

//the secret in recursive is that you must put a return in the recursive and the function itself turns out to return something for you

// to see the result install node and type 

//cd chapter3 in the root of the project
//node exercise2.js