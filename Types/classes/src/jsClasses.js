console.log("WOOO");

// Classes
// template for creating objects in Javascript
// contain a few different important pieces which allow for creation and extension of customized (and nicely organized) objects

class Player {
  //static: only exist on class itself, doesn't exist in each new instance called
  static description = "Player In Our Game";

  // permanent argument whe new Player is called
  #score = 0;
  numLives = 10;

  // every player instance will have first and last property (from this.first, this.last)
  // dynamic value -> when calling new Player(), pass thru different arguments and it will change those
  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  get score() {
    return this.#score;
  }

  // only exist in this class
  static randomPlayer() {
    return new Player("Andy", "Black");
  }

  taunt() {
    console.log("BOOYYAH!");
  }

  looseLife() {
    this.numLives -= 1;
  }

  // private fields, only accessible inside class
  #secret() {
    console.log("SECRET");
  }

  // up date first and last property
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  // makes this a property: fullName of Player
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  //set a new score
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }
}

// every time we call new Player, contructor is called
const player1 = new Player("blue", "steele");
// player1 now has access to taunt
// player1.taunt();
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1);

// console.log(player1.numLives);
// player1.looseLife();
// console.log(player1.numLives);

// console.log(player1.fullName);
// console.log(player1.score);

// console.log(player1.score)
// player1.score = 1234;
// console.log(player1.score);

// console.log(player1.fullName);
// player1.fullName = "Amy Adams";
// console.log(player1);

// const player2 = new Player("charlie", "white");
// player2.taunt();

// Everything is accessible in the code -> need to use private
// player1.score= -1233
// console.log(player1);

console.log(Player.description);

// inheritance: inherit vars and functions from parent table
// it can have extra vars that are not coming from parents
class AdminPlayer extends Player {


  // first, last: from parents,powers: created by this class
  constructor(first, last, powers) {
    // if child has constructor class, need to call super to refernece to constructor in parent
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}
//AdminPlayer {numLives: 10, first: undefined, last: undefined, isAdmin: true}
// admind.taunt() ->booyah
const admin = new AdminPlayer("admin", "mAdmin", ["delete", "restore world"]);
