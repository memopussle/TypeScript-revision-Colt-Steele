// Generics, arrow functions, & TSX files
// have to add , in arrow function , need to add,
const getRandomElements = <T,>(list: T[]): T => {
     const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

