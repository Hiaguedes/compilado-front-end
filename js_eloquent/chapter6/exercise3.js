/*
Iterable groups

Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified during
iteration.
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

    [Symbol.iterator](){
        return new GroupIterator(this);
    }

    static from(arr){
        return new Group(arr)
    }
}

class GroupIterator {
    constructor(group) {
      this.group = group;
      this.position = 0;
    }
  
    next() {
      if (this.position >= this.group.group.length) {
        return {done: true};
      } else {
        let result = {value: this.group.group[this.position],
                      done: false};
        this.position++;
        return result;
      }
    }
  }

for(let value of Group.from([1,2,3])){
    console.log(value);
}

//ok this I couldn't do on my own

// to see the result install node and type 

//cd chapter6 in the root of the project
//node exercise3.js