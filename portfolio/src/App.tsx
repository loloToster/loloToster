import "./index.scss"

import { StrictMode } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Helmet } from "react-helmet"

import ThemeContextProvider from "@/contexts/theme/ThemeProvider"
import { ThemeContextConsumer } from "@/contexts/theme/useTheme"

import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

const queryClient = new QueryClient()

function App() {
  const location = useLocation()

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <ThemeContextConsumer>
            {({ dark }) => (
              <>
                <Helmet>
                  <title>
                    {dark
                      ? ">_ loloToster // sys_online"
                      : "Leon M. | Fullstack & IoT Engineer"}
                  </title>
                  <link
                    rel="icon"
                    type="image/x-icon"
                    href={dark ? "/toast.ico" : "/blobs.ico"}
                  />
                </Helmet>
                {location.pathname !== "/" && <Header />}
                <Outlet />
                <Footer />
              </>
            )}
          </ThemeContextConsumer>
        </ThemeContextProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}

export default App
