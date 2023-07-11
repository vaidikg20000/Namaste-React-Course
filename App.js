import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "key" }, "Hello everyone!");

// const h1 = React.createElement(
//   "h1",
//   { style: { color: "red" }, id: "key" },
//   "I am red"
// );

// const h2 = React.createElement(
//   "h2",
//   { style: { color: "green" }, id: "key" },
//   "I am green"
// );

// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   h1,
//   h2,
// ]);

// console.log(heading);



//React element
const heading = (
  <h1>namaste JS</h1>
)

const Title = () => (
  <h2>This is title</h2>
)

//Functional Component
const HeaderComponent = () => {
  return (
    <div>
      {/* {Title()} */}
      <Title />
      <h1>Namaste React Functional Componenet</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
