// Objects
// can be types by declaring what the object should look like in the annotation
var dog = {
    name: "Eltom",
    breed: "Australian Shepherd",
    age: 0.5
};
// accept object as parameter. value of 1st key MUST BE a string
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({
    first: "Thomas",
    last: "Jenkins"
});
// type -> object shape/pattern
var coorinate = { x: 34, y: 2 };
// function return an object
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
// Excess properties: function will check for exact first and last and not allowed another properties
// printName({ first: "Mick", last: "Jagger", age: 473 }); // age: 473 is not allowed
// only checks if first and last is there
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true }; // age: 473 is allowed to add in if we store it in a variable
printName(singer);
var coordinate = { x: 32, y: 2 }; // a reference to Point
// point is an object and function returns an object refered to Point shape
function doublePoint(point) {
    return {
        x: point.x * 2,
        y: point.y * 2
    };
}
var age = 24234;
// parameter has type Song, function returns a number
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brother",
    numStreams: 1234,
    credit: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
var earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);
