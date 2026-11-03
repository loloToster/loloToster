import { Link } from "react-router-dom"
import "./action-btn.scss"

function ActionBtn({
  children,
  to,
  target
}: {
  children: React.ReactNode,
  to: string,
  target?: React.HTMLAttributeAnchorTarget | undefined
}) {
  return (
    <Link className="action-btn" to={to} target={target}>
      {children}
    </Link>
  )
}

export default ActionBtn
