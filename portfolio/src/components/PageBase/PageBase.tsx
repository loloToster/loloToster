import "./page-base.scss"

function PageBase({
  accentText,
  headerText,
  descText,
  children,
}: {
  accentText: string
  headerText: string
  descText: string
  children: React.ReactNode
}) {
  return (
    <div className="page-base">
      <div className="page-base__top">
        <div className="page-base__top__accent">{accentText}</div>
        <h1 className="page-base__top__header">{headerText}</h1>
        <p className="page-base__top__description">{descText}</p>
      </div>
      <div className="page-base__content">{children}</div>
    </div>
  )
}

export default PageBase
