import { useState } from "react";
import { Link } from "react-router-dom"
import Switch from "react-switch";
import Landing from "./Sections/Landing/Landing"
import "./home.scss"

function Home() {
  const [checked, setChecked] = useState(false)

  return <div className="home">
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Switch checked={checked} onChange={setChecked} checkedIcon={false} uncheckedIcon={false} />
    </header>
    <Landing />
  </div>
}

export default Home
