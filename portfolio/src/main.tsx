import { ViteReactSSG } from 'vite-react-ssg'
import type { RouteRecord } from 'vite-react-ssg'
import './index.scss'
import Home from './Components/Home/Home.tsx'

// TODO: add strict mode back
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Home />
  }
]

export const createRoot = ViteReactSSG({ routes })
