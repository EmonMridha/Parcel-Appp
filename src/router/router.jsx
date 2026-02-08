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
import PrivateRouter from "../pages/PrivateRouter/PrivateRouter";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import BeARider from "../pages/Rider/BeARider";
import RiderRequests from "../pages/Dashboard/Requests/RiderRequests";
import HiredRiders from "../pages/Dashboard/Hired/HiredRiders";

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
                Component: () => (
                    <PrivateRouter>
                        <AddParcel />
                    </PrivateRouter>
                )
            },
            {
                path: 'beArider',
                Component: () => (
                    <PrivateRouter>
                        <BeARider></BeARider>
                    </PrivateRouter>
                )
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
        Component: () => (
            <PrivateRouter>
                <DashboardLayout />
            </PrivateRouter>
        ),
        children: [
            {
                index: true,
                Component: DashboardHome
            },
            {
                path: `myParcels/:email`,
                loader: ({ params }) => fetch(`http://localhost:5000/parcels/${params.email}`),
                Component: MyParcels
            },
            {
                path: 'parcelDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/parcel/${params.id}`),
                Component: ParcelDetails
            },
            {
                path: 'payment/:parcelId',
                Component: Payment
            },
            {
                path: 'paymentHistory/:email',
                loader: ({ params }) => fetch(`http://localhost:5000/payments/${params.email}`),
                Component: PaymentHistory
            },
            {
                path: 'rider/requests',
                Component: () => (
                    <PrivateRouter>
                        <RiderRequests></RiderRequests>
                    </PrivateRouter>
                )
            },
            {
                path: 'rider/hired',
                Component: () => (
                    <PrivateRouter>
                        <HiredRiders></HiredRiders>
                    </PrivateRouter>
                )
            }

        ]

    }
]);