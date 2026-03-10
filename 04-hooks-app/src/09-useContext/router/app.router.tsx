import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from "../pages/about/AboutPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />,
    },
    {
        path: "/profile",
        //element: <ProfilePage />,
        element: <PrivateRoute element={<ProfilePage />} />
    },
    {
        path: "/login",
        //element: <LoginPage />,
        element: <PublicRoute element={<LoginPage />} />
    },
    {
        path: '*',
        element: <Navigate to='/' />
    }
]);

