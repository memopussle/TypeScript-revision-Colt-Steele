// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [16, 20, 34, 21];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
var product = {
    name: "coffee mug",
    price: 11.5
};
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (productArray) {
    var priceSum = 0;
    for (var _i = 0, productArray_1 = productArray; _i < productArray_1.length; _i++) {
        var product_1 = productArray_1[_i];
        priceSum += product_1.price;
    }
    return priceSum;
};
var productArray1 = [
    { name: "coffee mug", price: 11.5 },
    {
        name: "coffee mug",
        price: 20.4
    },
    {
        name: "coffee mug",
        price: 55
    },
];
getTotal(productArray1);
console.log(getTotal(productArray1));
