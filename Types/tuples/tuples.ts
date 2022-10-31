// Tuples
// a special type exclusive to TypeScript (don't exist in JS)
// array of fixed lengths and ordered with specific types =like super rigid arrays
//const stuff: (string | number)[] = ['asd', 'asfasf', 'asdf', 2]

// require 3 numbers
const color: [number, number, number] = [250, 0, 45];

// require 2 values. number HAS TO BE first -> string
const rainbowColor: [number, string] = [12, "yellow"]

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

//goodRes[0] = "200" // not allowed , because its' type is a number

// but you can push new value
goodRes.push(123)
goodRes.pop();

// an array of tuples
const responses: HTTPResponse[] = [[404, "Not found"], [200, "OK"]]