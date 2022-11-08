"use strict";
// *** TYPESCRIPT CLASSES *** //
// class footBallPlayer {
//   //declare the type first
//   readonly first: string; // read only: cannot be changed
//   readonly last: string;
//   public score: number = 0; // changable from outside class -> make it clear that its accesible
//   private lowScore: number = 1; // only accessible INSIDE the class
//   constructor(first: string, last: string) { // dynamic arguments that can be reused. each new instance can pass in different arguments
//     this.first = first;
//     this.last = last;
//   }
//   private secretMethod(): void {
//     console.log("SECRET METHOD");
//   }
// }
// const elton = new footBallPlayer("Jack", "Smith");
// elton.score = 12;
// console.log(elton.score)
// PARAMETERS SHORT CUT
class FootballPlayer {
    // initialize public first, last shortcut
    constructor(first, last, _score, 
    // protected allow child class to access property
    maximumScore) {
        this.first = first;
        this.last = last;
        this._score = _score;
        this.maximumScore = maximumScore;
    }
    secretMethod() {
        console.log("SECRET METHOD");
    }
    // get proeprty is not changable outside class
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    // make _score to make it public
    // allow to read it outside class but not changing it
    get score() {
        return this._score;
    }
    // set cannot have return annotation
    // allow to set it outside class ONLY it meets requriement < 0
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends FootballPlayer {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        // this._score = 99999999999; _score isprivate, so its not accessible in this child class
        this.maximumScore = 999;
    }
}
const elton = new FootballPlayer("Jack", "Smith", 12, 45);
console.log(elton.score);
elton.score = 123;
const amy = new FootballPlayer("Amy", "Ben", 17, 12);
const eden = new SuperPlayer("Eden", "Armstrong", 24, 23);
//implements: class conforms to a specific interface
// both classes follow interface, have different parameters, but must have parameter called color
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} `);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
// ABSTRACT CLASS
// define a pattern
// MUST have something/follow rule in each class
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO!");
    }
}
class FulltimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class ParttimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FulltimeEmployee("bett", "white", 95000);
console.log(betty.getPay());
const bill = new ParttimeEmployee("bill", "black", 20, 1100);
console.log(bill.getPay());
// GENERICS
// define reusable functions and classes that work with multiple types rather than a single type
const nums = []; // this is a special type
const colors = []; // array of string
const inputEl = document.querySelector("#username");
// !: ensure its not null
console.dir(inputEl);
inputEl.value = "Hacked!";
const btn = document.querySelector(".btn");
//GENERIC PRACTICE
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
// Generic function: return whatever type you provide it
function identity(item) {
    return item;
}
// identity<number>(7)
// identity<string>("hello");
// identity<Cat>()
// Writing a GENERIC function
// Generic function: take a type and return result OF that type
function getRandomElement(list) {
    //T: random type.list is of that type
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c"]));
console.log(getRandomElement([1, 2, 3]));
// INFERRED GENERIC TYPE PARAMATERS
let x = 23;
// x is a type of number
getRandomElement(["a", "v", "asf"]); // doesn't have to explicit declare string. ts can infer its a type of string
// Generics with multiple types
// T,U : represents 2 different patterns
//infer pattern type is intersect between T & U
//T & U: needs to be object
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
console.log(merge({ name: "colt" }, { num: 9 }));
// T follows the pattern of Lengthy
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("edfcfc"); // has legth method
// Default Type Parameters
function makeEmptyList() {
    return [];
}
const numbers = makeEmptyList(); // we set T default type to number
const bools = makeEmptyList(); //boolean[]
class VideoPlaylist {
    constructor() {
        this.queue = [];
    }
    add(element) {
        this.queue.push(element);
    }
}
const songs = new VideoPlaylist();
const videos = new VideoPlaylist();
videos.add();
