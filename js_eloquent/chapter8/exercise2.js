/*
The locked box

Consider the following (rather contrived) object:

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
    }
};

It is a box with a lock. There is an array in the box, but you can get at it only
when the box is unlocked. Directly accessing the private _content property is
forbidden.

Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box
is locked again before returning, regardless of whether the argument function
returned normally or threw an exception.

For extra points, make sure that if you call withBoxUnlocked when the box
is already unlocked, the box stays unlocked.

*/

const box = {
    locked: true,
    _content: [],

    unlock() { this.locked = false; },
    lock() { this.locked = true; },

    get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
    }
};

function withBoxUnlocked(func) {
    let locked = box.locked;
    if (!locked) {
      return func();
    }
  
    box.unlock();
    try {
      return func();
    } finally {
      box.lock();
    }
  }

withBoxUnlocked(function() {
    box.content.push("gold piece");
  });

  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);//true


// to see the result install node and type 

//cd chapter8 in the root of the project
//node exercise2.js