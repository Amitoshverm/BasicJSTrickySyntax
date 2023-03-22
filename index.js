/* Primitive data types -
    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Symbol
    - BigInt
*/

// var a = 'String';
// var b = 09;
// var c = true;
// console.log(a, b, c);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));


// var d = null;
// console.log(typeof(d));

// var e;
// console.log(e);
// console.log(typeof(e));

// console.log(typeof(typeof(e)));

// console.log('1' == "abcc");

// console.log(1 + "2"); //output is 12 due to implicit type conversion of 1 to String.
// console.log("2" + + 1);
// var a = [1, 3, "hello", true];
// a.length = 6;
// console.log(a);


// var a = [1, 2, true, 4, 5];
// a.push(6); //adds element at the end of the array
// a.unshift(0); //adds element at the beginning
// a.pop(); //removes last element
// a.shift(); //removes first element 
// console.log(a);

// a.length=100;
// console.log(typeof(a[99]));
// console.log(typeof(a));
// console.log(typeof(a[2]));

// a = function(){
//     console.log("Hello");
// }
// function abc(){
//     console.log("abc");
// }
// a();
// abc();


// function f1(_f){
    
//     return function f2(){
//         console.log("f2 is called");
//     }
// }

// var a = f1(function(){console.log("passed")});
// console.log(a())

// var person = {
//     name : 'amitosh',
//     age : 25,
//     hobbies : ['football', 'cricket'],
//     speak: function(){
//         console.log('speak like human')
//     }
// };

// console.log(person.hobbies);
// console.log(person.age);
// console.log(person.name);

// var d = 'name';
// var e = 'hobbies';
// // console.log(person[e]);
// console.log(person.speak());


// var dog = {
//     name : 'tommu',
//     breed : 'mixed',
//     bark : function(){
//         console.log('woof woof')
//     },
    
//     owner : {
//         name : 'amitosh',
//         age : 25
//     }
// }

// var a = new dog();

// function Dog(name, breed){
//     this.name = name;
//     this.breed = breed;
//     this.bark = function(){
//         console.log('woof woof');
//     }
// }
// var a = new Dog('toommy', 'mixed');
// var b = new Dog('cat', 'mixed2');
// console.log(a);
// console.log(b);

// Prototype is an object which is avialable in all constructor functions using
// which inheritance can be achieved in javascript.

//Hoisting
// a = 20;
// var a;
// console.log(a);

// function log(){
//     var args = Array.prototype.slice.call(arguments);
//     args.unshift('amitosh');
//     console.log.apply(console,args);

// }
// log('hi', "hello");


// var a = function(){    //
//     console.log('hi');
// }
// a();


// (function(){   //IIFE
//     console.log('hi');
// })();

// let b = 10;
// let b = 10;
// console.log(b);

function Dog(name, breed){
    this.name = name;
    this.breed = breed;
    this.talks = function(){
        console.log('bark like a dog');
    }
}
Dog.prototype.roxy = function(){         
    console.log('barks like roxy');
    // With the use of prototype we add another function to the Dog function and can be used with all the objects with Dog.
}
Dog.prototype.ceasor = function(){
    console.log('vigrous barking');
}
var d0 = new Dog('tommy', 'mixed');
console.log(d0.talks());

var d1 = new Dog('roxy', 'pomerian');
console.log(d1.roxy());

var d2 = new Dog('ceasor', 'german shepard');
console.log(d2.ceasor());


// Proto
// var a = {
//     x : 10,
//     calculate : function(z){
//         return this.x + this.y + z;
//     }
// };

// var b = {
//     y : 20,
//     __proto__ : a    //pointing to what all a is having.
// };
// //Similarly for c 
// var c = {
//     y : 11,
//     __proto__ : a
// };
// console.log(c.calculate(14));

// console.log(b.calculate(9));