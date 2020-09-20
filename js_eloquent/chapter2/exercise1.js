/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

let i=0;
let text='#';
while(i<7){
console.log(text);
text += '#';
i++;
}

// to see the result install node and type 

//cd chapter2 in the root of the project
//node exercise1.js
