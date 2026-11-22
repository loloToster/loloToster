import "./header.scss"

import { useState } from "react"
import { Link } from "react-router-dom"
import Switch from "react-switch"

import { useTheme } from "@/contexts/theme/useTheme"
import { useThemedGlitch } from "@/hooks/useThemedGlitch"
import { useSticky } from "@/hooks/useSticky"

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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className={"header__menu" + (menuOpen ? " open" : "")}>
        <div
          onClick={() => setMenuOpen(false)}
          className="header__menu__close-area"
        ></div>
        <div className="header__menu__inner">
          <div className="header__menu__top">
            <div>{dark ? "loloToster" : "Leon M."}</div>
            <button
              className="header__menu__close"
              onClick={() => setMenuOpen(false)}
            >
              <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
          <div className="header__menu__links">
            <Link className="header__menu__btn" to="/">
              Home &gt;
            </Link>
            <Link className="header__menu__btn" to="/projects">
              Projects &gt;
            </Link>
            <Link className="header__menu__btn" to="/about">
              About &gt;
            </Link>
            <Link className="header__menu__btn" to="/contact">
              Contact &gt;
            </Link>
          </div>
        </div>
      </div>
      <header
        ref={ref}
        className={"header" + (!stickyBg || isSticky ? " bg-active" : "")}
      >
        <div className="header__inner">
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
          <button className="header__burger" onClick={() => setMenuOpen(true)}>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
