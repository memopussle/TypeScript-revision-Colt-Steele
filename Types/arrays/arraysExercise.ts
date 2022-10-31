// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [16, 20, 34, 21];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = { name: string; price: number };

const product: Product = {
  name: "coffee mug",
  price: 11.5,
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal (productArray: Product[]): number {
  let priceSum = 0;
  for (let product of productArray) {
    priceSum += product.price;
  }
  return priceSum;
};

const productArray1: Product[] = [
  { name: "coffee mug", price: 11.5 },
  {
    name: "coffee mug",
    price: 20.4,
  },
  {
    name: "coffee mug",
    price: 55,
  },
];

getTotal(productArray1);
