import "./footer.scss"
import { useTheme } from "@/Contexts/theme/useTheme"

function Footer() {
  const { dark } = useTheme()

  return (
    <footer className="footer">
      <div>
        Built with passion by <span>{dark ? "loloToster" : "Leon"}</span>.
      </div>
    </footer>
  )
}

export default Footer
