// Array.prototype.myBind = function () {


// };



class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

//   (not the best way to do this)
//   Function.prototype.myBind = function (context, ...bindTimeArguments) {
//     that = this;

//     // const myArgs = [...arguments];
//     // console.log(myArgs);
//     return function ( ...callTimeArguments) {
      
//         return that.apply(context, bindTimeArguments.concat(callTimeArguments)) 
//     };
// };




  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  // markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
//   // bind time args are "meow" and "Kush", no call time args
  // markov.says.myBind(pavlov, "meow", "Kush")();
//   // Pavlov says meow to Kush!
//   // true


// Function.prototype.myBind = function (name,...args) {

//     that = this; 
//     return function () {
//         return that.call(name, ...args);
//     };
// };

  
//   // no bind time args (other than context), call time args are "meow" and "a tree"
  // markov.says.myBind(pavlov)("meow", "a tree");
//   // Pavlov says meow to a tree!
//   // true
  
//   Function.prototype.myBind = function (name) {
//         that = this; 
//         return function (...args) {
//             return that.call(name, ...args);
//         };
//   };

// Function.prototype.myBind = function (context) {
//     that = this;
//     // bindTimeArguments = [...arguments]
//     // const myArgs = [...arguments];
//     // console.log(myArgs);
//     return function () {
//         // callTimeArguments = [...arguments]
//         // bindTimeArguments.slice
//         return that.apply(context, callTimeArguments) 
//     };
// };
// Function.prototype.myBind = function (context) {
//     that = this;
//     bindTimeArguments = [...arguments]
//     const sliced = bindTimeArguments.slice(-1);
//     // console.log(myArgs);
//     return function () {
//         callTimeArguments = [...arguments]
//         // bindTimeArguments.slice
//         return that.apply(context, sliced.concat(callTimeArguments)) 
//     };
// };

//   // bind time arg is "meow", call time arg is "Markov"
  // markov.says.myBind(pavlov, "meow")("Markov");
//   // Pavlov says meow to Markov!
//   // true
  

Function.prototype.myBind = function (context) {
  that = this;
  // bindTimeArguments = [...arguments]
  // const sliced = bindTimeArguments.slice(-1);
  // console.log(myArgs);
  return function () {
      callTimeArguments = [...arguments]
      // bindTimeArguments.slice
      return that.apply(context, callTimeArguments) 
  };
};


//   // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
//   // Pavlov says meow to me!
//   // true