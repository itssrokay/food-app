import React from "react"


export default function Body(props){
  return(
    <>
    <h4>its name is {props.name}</h4>
    <h3>its rating is {props.rating}</h3>
    <img src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo" className="logo"/>
    </>
  )
}