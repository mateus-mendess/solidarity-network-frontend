import { createBrowserRouter } from "react-router-dom";
import Home from "@/routes/Home";
import Login from "@/routes/Login";
import ForgotPassword from "@/routes/ForgotPassword";
import VerifyCode from "@/routes/VerifyCode";
import ResetPassword from "@/routes/ResetPassword";
import VolunteerRegisterPage from "@/pages/VolunteerRegisterPage";
import VolunteerProfilePage from "@/pages/VolunteerProfilePage";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/verify-code", element: <VerifyCode /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/volunteer/register", element: <VolunteerRegisterPage /> },
  {path: "/volunteer/profile", element: <VolunteerProfilePage/>}
]);
