import "./header.scss"

import { Link } from "react-router-dom"
import Switch from "react-switch"

import { useTheme } from "@/Contexts/theme/useTheme"
import { useThemedGlitch } from "@/Hooks/useThemedGlitch"
import { useSticky } from "@/Hooks/useSticky"

function HeaderLink({
  to,
  name,
  target,
}: {
  to: string
  name: string
  target?: string
}) {
  const { ref: glitchRef } = useThemedGlitch({ playMode: "hover" })
  return (
    <Link className="header__btn" ref={glitchRef} to={to} target={target}>
      {name}
    </Link>
  )
}

function Header({
  logoVisible = true,
  stickyBg = false,
}: {
  logoVisible?: boolean
  stickyBg?: boolean
}) {
  const { dark, setDark } = useTheme()
  const { ref, isSticky } = useSticky()

  return (
    <header
      ref={ref}
      className={"header" + (!stickyBg || isSticky ? " bg-active" : "")}
    >
      <Link
        to="/"
        className={
          "header__logo" +
          (logoVisible ? " visible" : "") +
          (dark ? "" : " light")
        }
      >
        {dark ? "loloToster" : "Leon M."}
      </Link>
      <HeaderLink to="/projects" name="Projects" />
      <HeaderLink to="/about" name="About" />
      <HeaderLink to="/contact" name="Contact" />
      <HeaderLink
        to="https://buymeacoffee.com/lolotoster"
        name="Support"
        target="_blank"
      />
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
