import { createBrowserRouter } from "react-router";
import RootLayuot from "../layouts/RootLayuot";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/coverage/Coverage";
import AddParcel from "../pages/AppParcel/AddParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import ParcelDetails from "../pages/ParcelDetails/ParcelDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayuot,
        children: [
            {
                index: true, 
                Component: Home // This is the default child route for RootLayout
            },
            {
                path: 'coverage',
                Component: Coverage
            },
            {
                path: 'addParcel',
                Component: AddParcel
            }
        ]
    },
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ]
    },
    {
        path: 'dashboard',
        Component: DashboardLayout,
        children: [
            {
                index:true,
                Component:DashboardHome
            },
            {
                path: `myParcels/:email`,
                loader: ({ params }) => fetch(`http://localhost:5000/parcels/${params.email}`),
                Component: MyParcels
            },
            {
                path:'parcelDetails/:id',
                loader:({params})=> fetch(`http://localhost:5000/parcel/${params.id}`),
                Component:ParcelDetails
            }
        ]

    }
]);