import { useEffect, useState } from "react"
import { ThemeContext } from "./useTheme"

export const ThemeContextProvider = (props: { children: React.ReactNode }) => {
  const [dark, setDark] = useState(
    location.hostname === "localhost" || location.hostname === "lolotoster.com"
  )

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark)
    document.body.classList.toggle("light-theme", !dark)
  }, [dark])

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      <div className={dark ? "dark-theme" : "light-theme"}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}
