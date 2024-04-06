import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import {
    AuthCallbackPage,
    HomePage,
    UserProfilePage
} from "./pages/index"
import ProtectedRoutes from "./auth/ProtectedRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout showHero>
                        <HomePage />
                    </Layout>
                } />
            <Route
                path="/auth-callback"
                element={
                    <AuthCallbackPage />
                } />
            <Route
                element={<ProtectedRoutes />}>
            <Route
                path="/user-profile"
                element={
                    <Layout>
                        <UserProfilePage />
                    </Layout>
                } />
            </Route>
            <Route
                path="*"
                element={
                    <Navigate to="/" />
                } />
        </Routes>
    );
};

export default AppRoutes;
