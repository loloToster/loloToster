import { ViteReactSSG } from 'vite-react-ssg'
import type { RouteRecord } from 'vite-react-ssg'

import App from '@/App'
import Home from '@/Components/pages/Home/Home.tsx'
import ProjectsPage from '@/Components/pages/Projects/ProjectsPage.tsx'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      }
    ]
  }
]

export const createRoot = ViteReactSSG({ routes })
