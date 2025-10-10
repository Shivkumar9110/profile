import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

 
import { Home } from '../Components/Home/Home.jsx'
import { About } from '../Components/About/About.jsx'
import Header from '../Components/Header/Header.jsx';
import Footer from '/Components/Footer/Footer.jsx'; 
import Contact from "../Components/Contact/Contact.jsx";
import { Gallary } from '../Assets/Gallay/Gallary.jsx'
import Error from '../Components/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path: "",  
    element: <App />, 
    errorElement:<Error/>,
    children: [
    {
      path:"",
      element:<Home />
    },
      {
        path:"/about",
        element:<About />
      },

      {
        path: "/header",  
        element: <Header />, 
      },
      {
        path: "/footer",  
        element: <Footer />,    
      },
      {
        path:"/contact",
        element:<Contact />
      },
      
      {
        path:"/gallary",
        element:<Gallary />
      }

    ]
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
