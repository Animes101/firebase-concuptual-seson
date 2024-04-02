import {
    createBrowserRouter,
  } from "react-router-dom";


import Root from "../layout/Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Blog from "../pages/Blog";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/signin',
            element:<SignIn />
        },
        {
            path:'/signup',
            element:<SignUp />
        },
        {
            path:'/blog',
            element:<Blog />
        }
      ]
    },
  ]);