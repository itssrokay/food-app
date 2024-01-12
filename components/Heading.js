// Heading.js

import React from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <Link to="/">   
    <img
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="logo"
      className="logo"
    />
  </Link>
);

export default function Heading() {
  return (
    <div className="head">
      <Title />
      <h1>Food villa</h1>
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
