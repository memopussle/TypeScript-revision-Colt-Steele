import React, {useState} from "react";
import "./App.css";
import ShoppingList from "./components/ShoppingList";
import Item from "./models/item";
import ShoppinfListForm from "./components/ShoppinfListForm";
import { v4 as getId } from "uuid";

const App = () => {
  const [items, setItems] = useState<Item[]>([]); // this items has type structure of Item
  //  const items = [
  //    { id: 1, product: "Lemon", quantity: 3 },
  //    { id: 2, product: "Chicken Breast", quantity: 2 },
  //  ];
  console.log(items);

  const AddItem = (product: string, quantity: number) => {
    console.log("made it");
    console.log(product);
    setItems([...items, {id: getId(), product, quantity }])
  }
  return (
    <div>
      <ShoppingList items={items} />
      <ShoppinfListForm onAddItem={AddItem} />
    </div>
  );
};

export default App;
