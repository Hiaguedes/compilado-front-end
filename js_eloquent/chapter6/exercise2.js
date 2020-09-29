/*
Groups

The standard JavaScript environment provides another data structure called
Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
does not associate other values with those—it just tracks which values are part
of the set. A value can be part of a set only once—adding it again doesn’t have
any effect.

Write a class called Group (since Set is already taken). Like Set, it has add,
delete, and has methods. Its constructor creates an empty group, add adds
a value to the group (but only if it isn’t already a member), delete removes
its argument from the group (if it was a member), and has returns a Boolean
value indicating whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.

Give the class a static from method that takes an iterable object as argument
and creates a group that contains all the values produced by iterating over it.


*/

class Group {
    constructor(group=[]){
        this.group=group;
    }

    get listGroup(){
        return this.group;
    }

    has(element){
        return this.group.some(el => el === element);
    }

    add(element){
        if(!(this.has(element))){
            this.group.push(element)
        }
    }

    delete(element){
        if(this.has(element)){ 
            let indexElement = this.group.indexOf(element);
            this.group.splice(indexElement,1);
        }
    }

    static from(arr){
        return new Group(arr)
    }
}

const group = Group.from([5]);
group.add(30);
group.add(20);
group.add(10);
group.add(10);
group.delete(20);
console.log(group.has(20))
console.log(group.listGroup);


// to see the result install node and type 

//cd chapter6 in the root of the project
//node exercise2.js