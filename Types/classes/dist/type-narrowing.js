"use strict";
// Typeof Guards
// doing a type check before working with a value
// value won't be reognised unless you wrap it in a if
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
console.log(triple(3));
// Truthyiness Guards
// checking a value for being truthy or falsy before working with it
const el = document.getElementById("idk");
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("YOU DID NOT PASS IN A WORD");
    }
};
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
getRuntime({ title: "Avatar", duration: 4 });
getRuntime({ title: "Siperman", numEpisodes: 8, episodeDuration: 2 });
// Instanceof Narrowing
// instanceof is a JS operator that allows us to check if 1 thing is an instance of another (prototypes)
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString()); //type: Date
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        // entiy: User
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined; // numLives exists -> animal is a Cat
}
function getFarmAnimalSound(animal) {
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
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
// Exhaustiveness Checks with never
