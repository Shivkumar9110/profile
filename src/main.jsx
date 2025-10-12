import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navigate } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gallary from '../Components/Gallary/Gallary.jsx'
import { Home } from '../Components/Home/Home.jsx' 
import { About } from '../Components/About/About.jsx'
import Contact from '../Components/Contact/Contact.jsx'
import Error from '../Components/Error/Error.jsx'

// ✅ Use basename from environment variable or fallback to '/Profile'
const basePath = import.meta.env.VITE_PUBLIC_URL || '/Profile'

const router = createBrowserRouter(
  [
    {
      path: "/",  
      element: <App />, 
      errorElement: <Error />,
      children: [
        { path: "/", element: <Navigate to="/home" /> }, // default redirect
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "gallary", element: <Gallary /> } // ✅ lowercase path for consistency
      ]
    }
  ],
  {
    basename: basePath // ✅ must be here, not inside children
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
