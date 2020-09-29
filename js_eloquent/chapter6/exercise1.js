/*
A vector type

Write a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name.

Give the Vec prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).

*/

class Vec {
    constructor(x,y){
        this.x = x;
        this.y=y;
    }

    get length(){
        return Math.sqrt(this.x**2+this.y**2);
    }

    plus(vec){
        if(vec instanceof Vec){
            return new Vec(this.x+ vec.x, this.y+vec.y)
        }else {
            throw new Error('instancie um Vec dentro da função plus')
        }
    }

    minus(vec){
        if(vec instanceof Vec){
            return new Vec(this.x - vec.x, this.y - vec.y)
        }else {
            throw new Error('instancie um Vec dentro da função plus')
        }
    }
}

const vec = new Vec(2,4);

console.log(vec.plus(new Vec(1,3)));
console.log(vec.minus(new Vec(1,3)));
console.log(new Vec(3,4).length);


// to see the result install node and type 

//cd chapter6 in the root of the project
//node exercise1.js