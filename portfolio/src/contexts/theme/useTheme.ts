import { createContext, useContext } from "react"

interface ThemeContextI {
  dark: boolean
  setDark: (dark: boolean) => void
}

export const ThemeContext = createContext<ThemeContextI>({
  dark: false,
  setDark: () => null,
})

export const useTheme = () => {
  return useContext(ThemeContext)
}
