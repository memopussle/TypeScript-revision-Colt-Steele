// Type Declaration
// axios comes with its own declaration file
import axios from "axios"; 
// https://jsonplaceholder.typicode.com/users/1
import _ from "lodash";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suit: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

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


axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.data.forEach(printUser)
  })
  .catch((e) => console.log("Error", e));

function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
}
