import { Link } from "react-router-dom"
import "./action-btn.scss"

function ActionBtn({ children, to }: { children: React.ReactNode, to: string }) {
  return (<Link className="action-btn" to={to}>{children}</Link>)
}

export default ActionBtn
