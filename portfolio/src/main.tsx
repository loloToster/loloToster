import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg'
import type { RouteRecord } from 'vite-react-ssg'
import { Outlet } from 'react-router-dom'

import { ThemeContextProvider } from './Contexts/theme.tsx'

import Home from './Components/Home/Home.tsx'

import './index.scss'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: (<StrictMode>
      <ThemeContextProvider>
        <Outlet />
      </ThemeContextProvider>
    </StrictMode>),
    children: [
      {
        index: true,
        element: <Home />,
      }
    ]
  }
]

export const createRoot = ViteReactSSG({ routes })
