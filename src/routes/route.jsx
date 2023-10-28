import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RoutLayouts from '../components/RoutLayouts/RoutLayouts';

import { ErrorPage } from '../pages/Errorpage';
import Home from '../pages/Home';
import About from '../pages/About';
import ProductPage from '../pages/ProductPage';
import Blog from '../pages/Blog';
import Contact from '../components/Contact';
import ContactPage from '../pages/ContactPage';



const route = createBrowserRouter([
    {
      path: "/",
      element: <RoutLayouts/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/product",
          element: <ProductPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

export default route
  