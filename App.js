import React from 'react';
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom";

import Heading from './Heading';
import Footer from './Footer';
import Body from './Body';



// const Body=()=>(
//   <h1>body</h1>
// )
// const Footer=()=>(
//   <h3>Footer</h3>
// )
const arr=[
  {name:"kfc", rating:"3.9",url:"https://th.bing.com/th/id/OIP.fAxiKuT2ICBMfmS6I9jDAgHaHa?pid=ImgDet&rs=1"},
  {name:"mac D",rating:"4.5",url:"https://tinyurl.com/ydxnwz7s"}
];
const App = () => {
  return (
    <>
      <Heading/>
      <Body
       name={arr[0].name}
       rating={arr[0].rating}
       image={arr[0].url}
       />
    <Body
    name={arr[1].name}
    rating={arr[1].rating}
    image={arr[1].url}
    />
     
      <Footer/>
    </>
  );
};
// ReactDOM.render(<App />, document.getElementById('root'));
const root = createRoot(document.getElementById("root"));
root.render(<App />);