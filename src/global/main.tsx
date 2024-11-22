import { StrictMode } from 'react'
import Home from '@/pages/Home'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './globals.css'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: "*", element: <NotFound /> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
