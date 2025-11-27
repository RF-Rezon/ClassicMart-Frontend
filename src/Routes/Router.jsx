import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "../BasicLayout";
import About from "../Components/About/About";
import CheckoutPage from "../Components/Checkout/Checkout";
import ContactPage from "../Components/Contact/ContactPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Product from "../Components/Product/Product";
import Register from "../Components/Register/Register";
import Wishlist from "../Components/Wishlist/Wishlist";
import ErrorPage from "../Utils/Error/ErrorPage";
import Allproducts from './../Components/AllProducts/Allproducts';
import History from "../Components/History/History";

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
      {
        path: "/about",
        element:<About />
      },
      {
        path: "/contact",
        element:<ContactPage />
      },
      {
        path: "/checkout",
        element:<CheckoutPage />
      },
      {
        path: "/history",
        element:<History />
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
