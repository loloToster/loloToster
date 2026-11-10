import "./header.scss"
import { Link } from "react-router-dom"
import Switch from "react-switch";
import { useTheme } from "@/Contexts/theme";
import { useThemedGlitch } from "@/Hooks/useThemedGlitch";

function HeaderLink({ to, name, target }: { to: string, name: string, target?: string }) {
  const glitch = useThemedGlitch({ playMode: "hover" })
  return <Link className="header__btn" ref={glitch.ref} to={to} target={target}>{name}</Link>
}

function Header({ logoVisible = true }: { logoVisible?: boolean }) {
  const { dark, setDark } = useTheme()

  return (
    <header className="header">
      <Link
        to="/" className={"header__logo" + (logoVisible ? " visible" : "") + (dark ? "" : " light")}>
        {dark ? "loloToster" : "Leon M."}
      </Link>
      <HeaderLink to="https://buymeacoffee.com/lolotoster" name="Donate" target="_blank" />
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
