import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RoutLayouts from '../components/RoutLayouts/RoutLayouts';

import { ErrorPage } from '../pages/Errorpage';



const route = createBrowserRouter([
    {
      path: "/",
      element: <RoutLayouts />,
      children: [
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

export default route
  