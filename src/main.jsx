import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/Pages/Home/Home/Home';
import Projects from './Components/Pages/Home/Projects/Projects';
import Service from './Components/Pages/Home/Service/Service';
import Skills from './Components/Pages/Home/Skills/Skills';
import Contact from './Components/Pages/Home/Contact/Contact';
import NotFound from './Components/Pages/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Service></Service>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='max-w-screen-xl mx-auto'>
        <RouterProvider router={router} />
      </div>
  </React.StrictMode>,
)
