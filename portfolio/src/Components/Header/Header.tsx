import { useEffect } from "react";
import { Link } from "react-router-dom"
import Switch from "react-switch";
import { useGlitch } from 'react-powerglitch'
import { useTheme } from "@/Contexts/theme";
import "./header.scss"

function HeaderLink({ to, name }: { to: string, name: string }) {
  const { dark } = useTheme()
  const glitch = useGlitch({ playMode: "hover", slice: { hueRotate: true }, optimizeSeo: true });

  useEffect(() => {
    glitch.setOptions({ playMode: dark ? "hover" : "manual" });
  }, [dark])

  return <Link ref={glitch.ref} to={to}>{name}</Link>
}

function Header() {
  const { dark, setDark } = useTheme()

  return (
    <header className="header">
      <HeaderLink to="/" name="Home" />
      <HeaderLink to="/projects" name="Projects" />
      <HeaderLink to="/about" name="About" />
      <HeaderLink to="/contact" name="Contact" />
      <Switch
        checked={dark}
        onChange={setDark}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor="#fff"
        onHandleColor="#000"
      />
    </header>
  )
}

export default Header
