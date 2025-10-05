import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './routes/Home.tsx'
import Login from './routes/Login.tsx'
import ForgotPassword from './routes/ForgotPassword.tsx'
import VerifyCode from './routes/VerifyCode.tsx'
import ResetPassword from './routes/ResetPassword.tsx'
import VolunteerRegisterStep3 from './routes/volunteer/steps/VolunteerRegisterStep3.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path: "/verify-code",
    element: <VerifyCode/>
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>
  },
  {
    path: "/volunteer/register",
    element: <VolunteerRegisterStep3/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
