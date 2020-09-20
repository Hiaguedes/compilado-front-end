/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height
*/

function ChessMatrix(n){
    let firstLine ='';// write the first line which begins with space
    while(firstLine.length<n){
        firstLine +=' ';
        if(!(firstLine.length<n)) break;
        else{
            firstLine +='#';
        }
    }

    let secondLine ='';//write the first line which begins with #
    while(secondLine.length<n){
        secondLine +='#';

        if(!(secondLine.length<n)) break;
        else{
            secondLine += ' ';
        }
    }

    let result = '';//the output string
    let change = true;// variable that merges the first line with the second

    for(let i=0; i<n; i++){

        if(change){
            result += '\n' + firstLine;// \n break a line 
        }else{
            result += '\n' + secondLine;
            
        }
        change = !change; //here i can change lines
    }


    return result;
}

console.log(ChessMatrix(8)); //here you can decide the size of the matrix

// some better answers can be made, here i tried to write a legible code

// to see the result install node and type 

//cd chapter2 in the root of the project
//node exercise3.js
