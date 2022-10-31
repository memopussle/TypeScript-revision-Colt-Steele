// Arrays
// can be typed using a type annotation followed by empty array brackets, like number[] foran array of number

//need to specify the type of value in array
const activeUsers: string[] = [];
activeUsers.push("Tony");

// activeUsers.push(12); not allowed

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = 'asf'

// an alternate syntax <>
// =  boolean[]
const bools: Array<boolean> = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
// coords.push({ y: 8 }) missing x
//coords.push({x:3, y:"8"}) need to by type number

// Multidimentional Arrays
coords.push({ x: 23, y: 8 });

// nested arrays  of string in an array
const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], , ["X", "O", "X"]];

const demo: number[][][] = [[[1]]]
