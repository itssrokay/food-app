import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom";

import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Data from "./components/Data";

const App = () => {
  return (
    <>
      <Heading />
      <Body />
      <Footer />
    </>
  );
};
// ReactDOM.render(<App />, document.getElementById('root'));
const root = createRoot(document.getElementById("root"));

root.render(<App />);
