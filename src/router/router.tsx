import { createBrowserRouter } from "react-router-dom";

import { RootLayout } from "../RootLayout";

import { CountdownPage } from '../01-countdown/Countdown';
import { RadialPage } from "../02-radial/Radial";



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

