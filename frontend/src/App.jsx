import React from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import HomePage from "../src/landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage"
import ProductPage from "./landing_page/products/ProductPage"
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotfoundPage from "./landing_page/Notfoundpage";
import Login from "./landing_page/login/Login";


function App(){

    const route = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                  path:"",
                  element:<HomePage/>
                },
                {
                    path:"/signup",
                    element:<Signup/>
                },
                {
                    path:"/about",
                    element:<AboutPage/>
                },
                {
                    path:"/products",
                    element:<ProductPage/>
                },
                {
                    path:"/pricing",
                    element:<PricingPage/>

                },
                {
                    path:"/support",
                    element:<SupportPage/>
                },
                {
                    path:"/login",
                    element:<Login/>
                },
                {
                    path:"*",
                    element:<NotfoundPage/>
                }
            ]
        }
    ])
    return(
        <>
          <RouterProvider router={route}></RouterProvider>
        </>
    );
}

export default App;