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
  constructor(
    public first: string,
    public last: string,
    private _score: number,
    // protected allow child class to access property
    protected maximumScore: number
  ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD");
  }

  // get proeprty is not changable outside class
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  // make _score to make it public
  // allow to read it outside class but not changing it
  get score(): number {
    return this._score;
  }

  // set cannot have return annotation
  // allow to set it outside class ONLY it meets requriement < 0
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends FootballPlayer {
  public isAdmin: boolean = true;
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
// eden.maximumScore = 999

// ** CLASSES VS INTERFACE ** //
interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

//implements: class conforms to a specific interface
// both classes follow interface, have different parameters, but must have parameter called color
class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} `);
  }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");

// ABSTRACT CLASS
// define a pattern
// MUST have something/follow rule in each class
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number; // needs to exist in every class Employee
  greet() {
    console.log("HELLO!");
  }
}

class FulltimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last)
  }
  getPay(): number {
    return this.salary;
  }
}

class ParttimeEmployee extends Employee {
  constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked
  }
}


const betty = new FulltimeEmployee("bett", "white", 95000)
console.log(betty.getPay());

const bill = new ParttimeEmployee("bill", "black", 20, 1100)
console.log(bill.getPay());


// GENERICS
// define reusable functions and classes that work with multiple types rather than a single type
const nums: Array<number> = []; // this is a special type
const colors: Array<string> = []// array of string

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
// !: ensure its not null

console.dir(inputEl)
inputEl.value = "Hacked!"


const btn = document.querySelector<HTMLButtonElement>(".btn")!;

interface Cat{
  name: string,
  breed: string
}

//GENERIC PRACTICE
function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

// Generic function: return whatever type you provide it
function identity<T>(item: T): T {
  return item;
}

// identity<number>(7)
// identity<string>("hello");
// identity<Cat>()