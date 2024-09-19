import React from "react";
import Subcomponent from "./subcomponent";

import { Objectdata } from "./Objectdata";

// In this example, the MyComponent component renders an h1 element with a title prop, followed by the children prop. Whatever elements are passed between the opening and closing tags of MyComponent component will be rendered as its children.

// const MyComponent = (props) => {
// console.log(props);
// eslint-disable-next-line react/prop-types
// const { alias, children } = props;
//
// console.log(alias, children);
// return (
// <div>
{
  /* <h6>{children}</h6> */
}
{
  /* <h1>{alias}</h1> */
}
{
  /* {children} */
}
{
  /* </div> */
}
// );
// };
//
// export default MyComponent;

// eslint-disable-next-line react/prop-types
// const MyComponent = ({ alias, children }) => {
//   // eslint-disable-next-lin
//   // react/prop-types

//   console.log(alias, children, Objectdata);

//   //destructure d array leavin only object variables, den access d objects
//   const [book1, book2, book3] = Objectdata;

//   return (
//     <div>
//       <h6>{children}</h6>
//       <h1>{alias}</h1>
//       {children}
//       <span>my name is {book1.author} </span>
//       <span>my book is titled {book1.title} </span>
//     </div>
//   );
// };

// export default MyComponent;

// const MyComponent = (props) => {
//   // eslint-disable-next-lin
//   // react/prop-types

//   //incomin props object consist alias prop, booklist prop ([{}, {, {}}]), and a children prop
//   console.log(props);

//   //destructure d array, den access d objects directly.
//   const [book1, book2, book3] = props.booklist;
//   console.log(book1, book2, book3); //objects

//   const alias = props.alias;

//   const children = props.children;

//   return (
//     <div>
//       <h6>{props.children}</h6>
//       <h1>{alias}</h1>
//       {children}
//       <span>my name is {book1.author} </span>
//       <span>my book is titled {book1.title} </span>
//     </div>
//   );
// };

// export default MyComponent;

// const MyComponent = (props) => {
//   // eslint-disable-next-lin
//   // react/prop-types

//   console.log(props);

//   //destructure prop
//   const { nickname, booklist, children } = props;
//   console.log(nickname, booklist, children);

//   //destructure object array
//   const [book1, book2, book3] = booklist;

//   return (
//     <div>
//       <h6>{props.children}</h6>
//       <h1>{nickname}</h1>
//       {children}
//       <span>my name is {book2.author} </span>
//       <span>my book is titled {book2.title} </span>
//     </div>
//   );
// };

// export default MyComponent;

//if u destructure d prop object directly in d param, make sure to use d names assigned to d props from d parent component else it wont work.
const MyComponent = ({ alias, children, booklist, imgs }) => {
  // eslint-disable-next-lin
  // react/prop-types

  //destructure object array
  const [book1, book2, book3] = booklist;

  //imgs is an object, we destructure it using the spread operator
  const destructuredImage = { ...imgs };

  //img is an object, we access the image property directly using the dot method
  const image = imgs.image;
  console.log(image);

  const inlineStyles = { color: "green", fontSize: "0.8rem" };
  console.log(destructuredImage);

  return (
    <div>
      <h6 style={{ color: "blue", fontSize: "1rem" }}>{children}</h6>

      {/* <img src={imgs.image} /> */}
      <img src={destructuredImage.image} />
      <img src={image} />
      {/* {css property: 'value'} */}
      <h1>{alias}</h1>
      {children}
      <span style={inlineStyles}>my name is {book2.author} </span>
      <span>my book is titled {book2.title} </span>
    </div>
  );
};

export default MyComponent;
