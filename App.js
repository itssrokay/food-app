import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom";

import Heading from "./Heading";
import Footer from "./Footer";
import Body from "./Body";
import Data from "./Data";


const arr = [
  {
    name: "kfc",
    rating: "3.9",
    url: "https://pngimg.com/uploads/kfc/kfc_PNG47.png",
  },
  {
    name: "mac D",
    rating: "4.5",
    url: "https://staticseekingalpha3.a.ssl.fastly.net/uploads/2016/12/1/957061-14806104190797484_origin.png",
  },
  {
    name: "kfc",
    rating: "3.9",
    url: "https://pngimg.com/uploads/kfc/kfc_PNG47.png",
  }
];
const App = () => {
  return (
    <>
      <Heading />
      <div>
      {/* <Body name={arr[0].name} rating={arr[0].rating} url={arr[0].url} />
      <Body name={arr[1].name} rating={arr[1].rating} url={arr[1].url} />
      <Body name={arr[2].name} rating={arr[2].rating} url={arr[2].url} /> */}
      <Body />
      </div>
      <Footer />
    </>
  );
};
// ReactDOM.render(<App />, document.getElementById('root'));
const root = createRoot(document.getElementById("root"));

root.render(<App />);
