import "./header.scss"
import { Link } from "react-router-dom"
import Switch from "react-switch";
import { useTheme } from "@/Contexts/theme";
import { useThemedGlitch } from "@/Hooks/useThemedGlitch";

function HeaderLink({ to, name }: { to: string, name: string }) {
  const glitch = useThemedGlitch({ playMode: "hover" })
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
