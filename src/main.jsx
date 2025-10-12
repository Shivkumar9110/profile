import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from '../Components/Home/Home.jsx' 
import { About } from '../Components/About/About.jsx'
import Contact from '../Components/Contact/Contact.jsx'
import Error from '../Components/Error/Error.jsx'
import { Gallary } from '../Assets/Gallary/Gallary.jsx'
const router = createBrowserRouter(
  [
    {
      path: "/",  
      element: <App />, 
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "gallery", element: <Gallery /> }
      ]
    }
  ],
  {
    basename: '/repo-name' // <-- replace with your GitHub repo name
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
