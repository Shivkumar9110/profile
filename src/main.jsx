import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gallary from '../Components/Gallary/Gallary.jsx'
import { Home } from '../Components/Home/Home.jsx' 
import { About } from '../Components/About/About.jsx'
import Contact from '../Components/Contact/Contact.jsx'
import Error from '../Components/Error/Error.jsx'

// ✅ basename switches automatically
// If running on GitHub Pages, use /Profile, else use /
const basePath = window.location.hostname.includes('github.io') 
  ? '/Profile' 
  : '/'


const router = createBrowserRouter(
  [
    {
      path: "/",  
      element: <App />, 
      errorElement: <Error />,
      children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "gallary", element: <Gallary /> }
      ]
    }
  ],
  {
    basename: basePath
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
