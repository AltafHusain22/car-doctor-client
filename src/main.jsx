import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./LayOuts/Main/MainPage.jsx";
import Home from "./pages/Home/components/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Contact from "./pages/ContactUs/Contact.jsx";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails.jsx";
import CheckOut from "./pages/CheckOut/CheckOut.jsx";
import About from "./pages/About/About.jsx";
import MyBookings from "./pages/MyBookings/MyBookings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/myBookings',
        element: <MyBookings></MyBookings>
      },
      {
        path: '/checkOut',
        element: <CheckOut></CheckOut>
      },
      {
        path: '/serviceDetails/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params})=> fetch(`http://localhost:5000/singleService/${params.id}`)

      },
  
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
