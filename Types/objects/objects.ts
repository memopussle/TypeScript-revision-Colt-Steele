// Objects
// can be types by declaring what the object should look like in the annotation
const dog = {
  name: "Eltom",
  breed: "Australian Shepherd",
  age: 0.5,
};

// accept object as parameter. value of 1st key MUST BE a string
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({
  first: "Thomas",
  last: "Jenkins",
});

// type -> object shape/pattern
let coorinate: { x: number; y: number } = { x: 34, y: 2 };

// function return an object
function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// Excess properties: function will check for exact first and last and not allowed another properties
// printName({ first: "Mick", last: "Jagger", age: 473 }); // age: 473 is not allowed

// only checks if first and last is there
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true }; // age: 473 is allowed to add in if we store it in a variable
printName(singer);

// Type Alias
// Instead of writing out objects typesin an annotation, we can declare them in type alias -> desired shape of the object

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 32, y: 2 }; // a reference to Point

// point is an object and function returns an object refered to Point shape
function doublePoint(point: Point): Point {
  return {
    x: point.x * 2,
    y: point.y * 2,
  };
}

//simple type
type MyNum = number;
let age: MyNum = 24234;

//Nested Object

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credit: {
    producer: string;
    writer: string;
  };
};

// parameter has type Song, function returns a number
function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brother",
  numStreams: 1234,
  credit: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

// Optional Properties
type Point2 = {
  x: number;
  y: number;
  z?: number; // z is optional
};

const myPoint2: Point = { x: 1, y: 3 }; // won't complain because z is optional

// Readonly Modifier
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1234,
  username: "Thomas",
};

console.log(user.id); // you can only read id, but not allow to change it
//user.id = 23495 -> Not allowed to write

// Intersection Types
type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful; // intersection between Circle and Colorful

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

// intersection Cat + Dog + new value
type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "husky",
  age: 9,
};
