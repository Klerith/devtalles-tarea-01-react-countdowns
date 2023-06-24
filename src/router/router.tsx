import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "../RootLayout";

import { CountdownPage } from '../01-countdown/CountdownComplete';
import { RadialPage } from "../02-radial/RadialComplete";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CountdownPage />,
      },
      {
        path: "/countdown",
        element: <CountdownPage />,
      },
      {
        path: "/radial",
        element: <RadialPage />,
      },
    ]
  },
]);

