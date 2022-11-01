// shape of the object

// Interfaces
// serve almost exact same purpose as type aliases
// create reusable, modular types that describes the shapes of objects
interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 123 };

//optional property
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string; // sayHi is a method and must retun a string. no parameter
}

// nickname not required
const thomas: Person = {
  first: "thomas",
  last: "hardy",
  id: 2134,
  sayHi: () => {
    return "Hello!";
  },
};

//thomas.id=12345 -> cannot assign new value because id is readonly

// Interface Method Parameters
interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number; // parameter is a string. applyDiscount is a function that returns string
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

shoes.applyDiscount(0.4);

// reopening interfaces
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

// combination of 2 dog interface
const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Sheperd",
  bark() {
    return "WOOF WOOF!";
  },
};

//Extending interface
//Service Dog inherits name, age, breed, bark
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "puddle",
  bark() {
    return "Bark";
  },
  job: "guide dog",
};

// Interface Multiple Inheritance
interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

// interface can be extended 
interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  email: "some@email.com",
  id: 1234,
  level: "junior",
  languages: ["JS", "Python"],
};

// Interface vs Types
// Type can only be used to describe shapes of objects
// Interface can use for any of types: object, function, union etc
