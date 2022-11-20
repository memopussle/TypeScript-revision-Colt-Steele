import React, {useState} from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";


const App = () => {
  const [items, setItems] = useState<Item[]>([]); // this items has type structure of Item
  //  const items = [
  //    { id: 1, product: "Lemon", quantity: 3 },
  //    { id: 2, product: "Chicken Breast", quantity: 2 },
  //  ];
  return (
    <div>
      <ShoppingList items={items} />
    </div>
  );
};

export default App;
