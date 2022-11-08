"use strict";
// Generics, arrow functions, & TSX files
// have to add , in arrow function , need to add,
const getRandomElements = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
