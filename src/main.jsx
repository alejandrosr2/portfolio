import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

import BgGeneral from './components/BgGeneral.jsx';
import HomePage from './components/principal/HomePage.jsx';
import About from './components/about/About.jsx';
import Proyects from './components/proyectos/Proyects.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="proyects" element={<Proyects />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BgGeneral/>
    <RouterProvider router={router} />
  </React.StrictMode>
)
