import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom";

import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Data from "./components/Data";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestraMenu from "./components/RestraMenu";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <Heading />
      <Outlet/>
    </>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:(<>
        <Body/>
        <Footer/>
        </>
        )
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },{
        path:"/restra/:resId",
        element:<RestraMenu/>
      }
    ],
    errorElement:<Error/>,
  },
 
])


// ReactDOM.render(<App />, document.getElementById('root'));
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
