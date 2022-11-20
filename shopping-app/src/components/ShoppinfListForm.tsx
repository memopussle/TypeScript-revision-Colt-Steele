import React, { useRef } from 'react';

interface ShoppingfListFormProps {
    onAddItem: (item: string, quantity: number) => void; // define onAddItem function takes an argument: string and return nothing
}

function ShoppinfListForm({ onAddItem }: ShoppingfListFormProps): JSX.Element {

    const productInputRef = useRef<HTMLInputElement>(null); // whe this run first time, it doesn't exist in DOM
    const quantityInputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
        const newProduct = productInputRef.current!.value;
        const quantity = parseInt(quantityInputRef.current!.value);
        console.log(quantity)
      onAddItem(newProduct, quantity);
        productInputRef.current!.value = ""; // change input back to blank
         quantityInputRef.current!.value = "1";
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Product Name" ref={productInputRef} />
      <input type="number" min={0} ref={quantityInputRef} />
      <button type="submit">Add item</button>
    </form>
  );
}

export default ShoppinfListForm