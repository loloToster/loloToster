import { useEffect } from "react"
import { useGlitch } from "react-powerglitch"
import { useTheme } from "@/Contexts/theme/useTheme"

export const useThemedGlitch: typeof useGlitch = userOptions => {
  const { dark } = useTheme()
  const glitch = useGlitch(userOptions)
  const { setOptions } = glitch

  const serializedOptions = JSON.stringify(userOptions)

  useEffect(() => {
    const parsedOptions = serializedOptions
      ? JSON.parse(serializedOptions)
      : undefined

    setOptions({
      ...parsedOptions,
      playMode: dark ? parsedOptions?.playMode : "manual",
    })
  }, [dark, serializedOptions, setOptions])

  return glitch
}
