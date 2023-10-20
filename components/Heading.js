import React from "react"

const Title=()=>(
  <a href="/">
<img src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo" className="logo"/>
</a>

)

export default function Heading() {
  return (
    <div className="head">
        {/* <img
      className="logo"
      alt="logo"
      width="5%"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" 
    /> */}
    <Title/>
      <h1>Food villa</h1>
    <div className="navbar">
      <ul >
   <li>Home</li>
   <li>Menu</li>
      <li>contact us</li>
      </ul>
      </div>
    </div>
  );
  };
