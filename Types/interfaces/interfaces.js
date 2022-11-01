// shape of the object
var pt = { x: 123, y: 123 };
// nickname not required
var thomas = {
    first: "thomas",
    last: "hardy",
    id: 2134,
    sayHi: function () {
        return "Hello!";
    }
};
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
};
shoes.applyDiscount(0.4);
