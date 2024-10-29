import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Router from './Router.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContactUs/Contact.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Router/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Router />} >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>

  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
