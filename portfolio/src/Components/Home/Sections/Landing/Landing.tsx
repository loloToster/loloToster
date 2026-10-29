import loloTosterImage from "@assets/lolotoster.png"
import leonImage from "@assets/leon.jpg"
import { useTheme } from "../../../../Contexts/theme"
import "./landing.scss"

function Landing() {
  const { dark } = useTheme()

  return <div className="landing">
    <img className="landing__img" src={dark ? loloTosterImage : leonImage} alt="lolotoster" />
    <div className="landing__desc">
      <h1>Hi, I'm {dark ? "loloToster" : "Leon"}</h1>
      <p>a young fellow who mostly programs in typescript and python. I really enjoy programming and learning about all sort of IT stuff.</p>

    </div>
  </div>
}

export default Landing
