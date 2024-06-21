import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from "./pages/Auth/LoginPage"
import { RegisterPage } from "./pages/Auth/RegisterPage"
import { HomePage } from "./pages/Home/HomePage"
import { DashboardLayout } from "./Layout/DashboardLayout"
import { ProfilePage } from "./pages/Profile/ProfilePage"

export const EcoTrash = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<DashboardLayout />}>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
