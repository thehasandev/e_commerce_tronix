import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RoutLayouts from '../components/RoutLayouts/RoutLayouts';

import { ErrorPage } from '../pages/Errorpage';
import Home from '../pages/Home';



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
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

export default route
  