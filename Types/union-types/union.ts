// Union
// allows us to give a value a few different possible types.
let age: number | string = 21;
age = 23;
age = "24"; // no problem because this value has 2 possible types: number or string

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

// it could be type Point or Loc
let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.123, long: 23.334 };

// Type narrowing w/ Union Types

//normal union types
function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge(87);
printAge("hello");

// type narrowing

function calculateTax(price: number | string, tax: number) {
  // typescript looks that price in a conditional statement when it's a string -> doesn't throw error
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// parenthesis: ()
//const stuff: number | string[] = [1,2,3] // cannot do array of number

// an array of type number AND/ OR string
const stuff: (number | string)[] = [1, 2, 3, "das"];

// an array of type number OR string
const stuff1: number[] | string[] = ["hi", "hello"];

// coords is an array of type Point OR/AND Loc
const coordinates: (Point | Loc)[] = [];
// coordinates.push({ x: 123, y: 4 });

// Literal types
// are not just types- but the values themselves too

// type zero is number 0
let zero: 0 = 0;
const mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
mood = "angry"; // not allowed

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "weds"; // needs to be these values of DayOFWeek
