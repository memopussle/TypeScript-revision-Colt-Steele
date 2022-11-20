import React from "react";

interface GreeterProps {
  person: string;
}

function Greeter({person}: GreeterProps): JSX.Element { // destructure person out of props object
  // explicitly declare JSx.element can imply that this function result is only jsx.element
  return <h1>Hello, {person}</h1>;
}

// const Greeter: React.FC = () => {
//     return <h1>Hello, Jackie</h1>
// } //this Greeter function is a type of React Function Component

export default Greeter;
