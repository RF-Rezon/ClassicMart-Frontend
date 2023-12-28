import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Product from "../Components/Product/Product";
import Register from "../Components/Register/Register";
import Wishlist from "../Components/Wishlist/Wishlist";
import ErrorPage from "../Utils/Error/ErrorPage";
import Allproducts from './../Components/AllProducts/Allproducts';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Home /> 
      },
      {
        path: "/singleProduct/:id",
        element: <Product /> 
      },
      {
        path: "/allProducts",
        element: <Allproducts /> 
      },
      {
        path: "/wishlist",
        element:<Wishlist />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);
