import { ViteReactSSG, type RouteRecord } from "vite-react-ssg"

import App from "@/App"
import Home from "@/components/pages/Home/Home"
import ProjectsPage from "@/components/pages/Projects/ProjectsPage"
import ContactPage from "@/components/pages/Contact/ContactPage"
import NotFound from "@/components/pages/NotFound/NotFound"

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]

export const createRoot = ViteReactSSG({ routes })
