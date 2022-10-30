//STRING

let movieTitle: string = "Amadeus";
movieTitle = "Arrival"; // can assign it to different type of string
movieTitle = 9; //-> cannot assign it to different type
movieTitle.toUpperCase();

// NUMBERS
let numCatLives: number = 9;
numCatLives += 1;
numCatLives = "zero"; // cannot change it to string

let gameOver: boolean = false;
gameOver = "true"; //cannot change it to string

// Type Inference
// refers to the TypeScript compiler's ability to infer types from certain values in your code
let tvShow = '0live Kitteridge'; //ts knows implicitly it's a string
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";


//Any Type
// any is an escape hatch! turns off type checking for this variable so you can do your thing
// try to avoid any


// let thing: any = "hello"; // any will turn off type check
// thing = 1;
// thing = false;
// thing()
// thing.toUpperCase()

const movies = ["Arrival", "The thing", "Aliens", "Amadeus"]
let foundMovie: string;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus"
    }
}

