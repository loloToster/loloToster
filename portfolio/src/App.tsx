import "./index.scss"

import { StrictMode } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import ThemeContextProvider from "@/contexts/theme/ThemeProvider"

import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

const queryClient = new QueryClient()

function App() {
  const location = useLocation()

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          {location.pathname !== "/" && <Header />}
          <Outlet />
          <Footer />
        </ThemeContextProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}

export default App
