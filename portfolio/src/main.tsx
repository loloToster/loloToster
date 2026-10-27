import { StrictMode } from 'react'
import { ViteReactSSG } from 'vite-react-ssg'
import type { RouteRecord } from 'vite-react-ssg'
import './index.scss'

import App from './App.tsx'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: (
      <StrictMode>
        <App />
      </StrictMode>
    ),
  },
  {
    path: '/test',
    element: (
      <StrictMode>
        <App />
      </StrictMode>
    ),
  }
]

export const createRoot = ViteReactSSG({ routes })
