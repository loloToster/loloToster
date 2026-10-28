import loloTosterImage from "@assets/lolotoster.png"
import "./landing.scss"

function Landing() {
  return <div className="landing">
    <img className="landing__img" src={loloTosterImage} alt="lolotoster" />
    <div className="landing__desc">
      <h1>Hi I'm loloToster</h1>
      <p>a young fellow who mostly programs in typescript and python. I really enjoy programming and learning about all sort of IT stuff.</p>
    </div>
  </div>
}

export default Landing
