import { createBrowserRouter } from "react-router";
import RootLayuot from "../layouts/RootLayuot";
import { Component } from "react";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayuot,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path:'/',
        Component:AuthLayout,
        children:[
            {
                path:'login',
                Component:Login
            },
            {
                path:'register',
                Component:Register
            }
        ]
    }
]);