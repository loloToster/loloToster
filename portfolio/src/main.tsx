import './index.scss'

import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg'
import type { RouteRecord } from 'vite-react-ssg'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { ThemeContextProvider } from './Contexts/theme.tsx'
import Home from './Components/pages/Home/Home.tsx'


const queryClient = new QueryClient()

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: (
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <Outlet />
          </ThemeContextProvider>
        </QueryClientProvider>
      </StrictMode>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      }
    ]
  }
]

export const createRoot = ViteReactSSG({ routes })
