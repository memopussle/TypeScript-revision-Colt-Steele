"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Type Declaration
// axios comes with its own declaration file
const axios_1 = __importDefault(require("axios"));
// typescript will auto fill axios method and complain if we pass wrong types, or no argument to get
// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     printUser(res.data); // TS knows res.data is type of User
//   })
//   .catch((e) => console.log("Error", e));
// function printUser(user: User) {
//   console.log(user.name);
//   console.log(user.email);
// }
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    res.data.forEach(printUser);
})
    .catch((e) => console.log("Error", e));
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
}
