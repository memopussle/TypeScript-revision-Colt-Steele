// Union
// allows us to give a value a few different possible types.
var age = 21;
age = 23;
age = "24"; // no problem because this value has 2 possible types: number or string
// it could be type Point or Loc
var coordinates = { x: 1, y: 34 };
coordinates = { lat: 321.123, long: 23.334 };
