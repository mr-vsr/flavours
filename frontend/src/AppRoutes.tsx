import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout"
import {
    AuthCallbackPage,
    HomePage,
    UserProfilePage
} from "./pages/index"

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
                path="/user-profile"
                element={
                    <Layout>
                        <UserProfilePage />
                    </Layout>
                } />
            <Route
                path="*"
                element={
                    <Navigate to="/" />
                } />
        </Routes>
    );
};

export default AppRoutes;
