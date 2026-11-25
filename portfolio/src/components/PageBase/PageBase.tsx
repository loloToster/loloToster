import "./page-base.scss"
import { useEffect } from "react"
import { useTheme } from "@/contexts/theme/useTheme"
import { useThemedGlitch } from "@/hooks/useThemedGlitch"

function PageBase({
  accentText,
  headerText,
  descText,
  imgSrc,
  imgAlt,
  children,
}: {
  accentText: string
  headerText: string
  descText: string
  imgSrc?: string
  imgAlt?: string
  children: React.ReactNode
}) {
  const { dark } = useTheme()
  const { ref: glitchRef, startGlitch } = useThemedGlitch({
    playMode: "manual",
    hideOverflow: true,
  })

  useEffect(() => {
    if (dark) startGlitch()
  }, [dark, headerText, startGlitch])

  return (
    <div className="page-base">
      <div className="page-base__top">
        <div className="page-base__top__text">
          <div className="page-base__top__accent">{accentText}</div>
          <h1 ref={glitchRef} className="page-base__top__header">
            {headerText}
          </h1>
          <p className="page-base__top__description">{descText}</p>
        </div>
        {imgSrc && (
          <img className="page-base__top__img" src={imgSrc} alt={imgAlt} />
        )}
      </div>
      <div className="page-base__content">{children}</div>
    </div>
  )
}

export default PageBase
