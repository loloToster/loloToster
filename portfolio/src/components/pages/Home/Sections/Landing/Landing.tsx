import "./landing.scss"

import loloTosterImage from "@/assets/lolotoster.png"
import leonImage from "@/assets/leon.jpg"

import { useTheme } from "@/contexts/theme/useTheme"
import { useThemedGlitch } from "@/hooks/useThemedGlitch"

function Landing() {
  const { dark } = useTheme()
  const { ref: glitchRef } = useThemedGlitch({ timing: { duration: 6000 } })

  return (
    <div className="landing">
      <div className={"landing__img" + (dark ? " dark" : "")}>
        <img src={leonImage} alt="Leon" />
        <img src={loloTosterImage} alt="loloToster" />
      </div>
      <div className="landing__desc">
        <h1>
          Hi, I'm{" "}
          <span
            ref={glitchRef}
            className={"landing__name" + (dark ? "" : " light")}
          >
            {dark ? "loloToster" : "Leon"}
          </span>
        </h1>
        <p>
          a young fellow who builds versatile software and custom automated
          systems. I enjoy developing robust apps and open-source tools, while
          also tinkering with electronics, robotics, and IoT.
        </p>
      </div>
    </div>
  )
}

export default Landing
