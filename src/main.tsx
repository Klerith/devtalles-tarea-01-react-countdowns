import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
