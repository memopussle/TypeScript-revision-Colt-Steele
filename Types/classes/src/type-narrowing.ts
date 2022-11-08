// Typeof Guards
// doing a type check before working with a value
// value won't be reognised unless you wrap it in a if

function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }

  return value * 3;
}

console.log(triple(3));

// Truthyiness Guards
// checking a value for being truthy or falsy before working with it

const el = document.getElementById("idk");

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("YOU DID NOT PASS IN A WORD");
  }
};

// Equality narrowing
// involve comparing types to each other before doing certain operations with values

// function someDemo(x: string | number, y: string | number) {
//     if (x === y) {
//     x.toUpperCase()
//     }
// }

// someDemo(3, "3")

// IN OPERATOR
// narrow the type
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }

  return media.duration;
}

getRuntime({ title: "Avatar", duration: 4 });
getRuntime({ title: "Siperman", numEpisodes: 8, episodeDuration: 2 });

// Instanceof Narrowing
// instanceof is a JS operator that allows us to check if 1 thing is an instance of another (prototypes)
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString()); //type: Date
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    // entiy: User
    entity;
  } else {
    entity;
  }
}

// Type Predicates
// allows us to write custom functions that can narrow the type of a value
//predicates take the form: parameterName is Type
interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined; // numLives exists -> animal is a Cat
}

// function makeNoise(animal: Cat | Dog): string{
//     if (isCat(animal)) {
//             animal; // cat
//         return "Meow"

//     } else {
//         animal
//   }
// }

// Discriminated Unions
// a common pattern in TS involves creating a literal property that is common accross multiple types

// patterns: all interface have to be consistent
interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig"; // literal type
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moooo!";
    case "rooster":
      return "Cocadoodledoo";
    case "sheep":
      return "Baaa";
    default:
      // we should never make it here, if we handled all cases correctly
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));

// Exhaustiveness Checks with never
