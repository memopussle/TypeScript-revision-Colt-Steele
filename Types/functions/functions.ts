// Function Paramter type:
// In TypeScript, we can specify the type of function parameters in a function definition
// -> Treating parameters is just like typing variables!

function square(num: number) {
  return num * num;
}
// function greet(person: string) {
//   return `Hi there, ${person}`;
// }
// greet(true);

const doSomething = (person: string, age: number, isFunny: boolean) => {};

doSomething("ChickenFace", 78, true); // parameters need to match types declared in function

function greet(person: string = "stranger") {
  return `Hi there, ${person}`;
}

greet();
greet("Tony");
greet(123); // only can pass a string or nothing

// Function Return Types
// we can specify the type returned by a function.
function subtract(num: number): number {
  return num * num;
}

subtract(2);

function rando(num: number): string | number {
  if (Math.random() < 0.5) {
    return num.toString();
  }

  return num; // function could return a string or number
}

// Anonymous function
const colours = ["red", "orange", "yellow"];
colours.map((color) => {
  return color.toUpperCase();
}); // don't need to specify type of color because ts knows it will be string,-> colours array
// it can infer the methods which one are used for number and string

// Void: return type for functions that don't return anything.

function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
} // don't return anything -> void


// Never
// represents values that NEVER occur.
// Never vs void: void : undeifined or null , never: a function doesn't finish executing
function makeError(msg: string): never {
    throw new Error(msg)
}

// function NEVER stops executing
function gameLoop(): never {
    while (true) {
        console.log("GAME LOOP RUNNING")
    }

}