import React from "react";
import MyComponent from "./MyComponent";
import Subcomponent from "./subcomponent"; //pass in a component as a prop to anoda component
import img1 from "./assets/imgs/globalai.png";

import { Objectdata } from "./Objectdata";

function App() {
  const obj = {
    image: img1,
  };
  console.log(Objectdata);

  return (
    <MyComponent alias="My Component" booklist={Objectdata} imgs={obj}>
      <p>Click Me prop</p>
      <Subcomponent />
    </MyComponent>
  );
}

export default App;

//https://www.youtube.com/watch?v=VcLXh9EdVs0...video on props
