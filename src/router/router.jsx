import { createBrowserRouter } from "react-router";
import RootLayuot from "../layouts/RootLayuot";
import { Component } from "react";
import Home from "../pages/Home/Home/Home";

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
]);