import "./not-found.scss"

import { useThemedGlitch } from "@/Hooks/useThemedGlitch"
import { useTheme } from "@/Contexts/theme/useTheme"

import ActionBtn from "@/Components/ActionBtn/ActionBtn"
import Matrix from "@/Components/Matrix/Matrix"
import Blobs, { type BlobI } from "@/Components/Blobs/Blobs"

function NotFound() {
  const { dark } = useTheme()
  const { ref: glitchRef } = useThemedGlitch()

  const blobs: BlobI[] = [
    { pos: [82, 82], size: 13, color: 0 },
    { pos: [95, 72], size: 6, color: 1 },
    { pos: [72, 95], size: 6, color: 2 },
    { pos: [94, 96], size: 9, color: 3 },
    { pos: [78, 65], size: 5, color: 4 },

    { pos: [55, 35], size: 14, color: 1 },
    { pos: [40, 25], size: 6, color: 2 },
    { pos: [68, 22], size: 7, color: 3 },
    { pos: [46, 55], size: 5, color: 4 },
    { pos: [74, 48], size: 6, color: 0 },

    { pos: [18, 12], size: 7, color: 2 },
    { pos: [22, 14], size: 4, color: 0 },
    { pos: [8, 88], size: 5, color: 3 },
    { pos: [12, 92], size: 6, color: 1 },
    { pos: [28, 15], size: 4, color: 4 },
    { pos: [88, 10], size: 5, color: 2 },
    { pos: [96, 38], size: 4, color: 0 },
    { pos: [32, 88], size: 5, color: 3 },
    { pos: [42, 94], size: 5, color: 1 },
  ]

  return (
    <div className="not-found">
      {dark ? <Matrix /> : <Blobs blobs={blobs} />}
      <div className="not-found__content">
        <h1 ref={glitchRef}>404</h1>
        {dark ? (
          <p>
            // I swear this page worked on my local machine.
            <br />
            Let's get you back home.
          </p>
        ) : (
          <p>
            Sorry. It seems like this page does not exist.
            <br />
            Let's route you back home.
          </p>
        )}
        <ActionBtn to="/">Back to Homepage</ActionBtn>
      </div>
    </div>
  )
}

export default NotFound
