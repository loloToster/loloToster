import "./matrix.scss"

import { useEffect, useRef, useState } from "react"
import mergeRefs from "@/utils/mergeRefs"
import { useIsVisible } from "@/Hooks/useIsVisible"

interface Col {
  position: number
  letters: string[]
  currentAnimationPos: number
}

const ANIMATION_LEN = 10

const generateLetters = (length: number) => {
  return Array.from({ length }, () => {
    const randomCharCode = Math.floor(Math.random() * 26) + 65
    return String.fromCharCode(randomCharCode)
  })
}

function Matrix() {
  const [cols, setCols] = useState<Col[]>([])

  const addRandomCol = (posRange: number, height: number) => {
    setCols(prev => {
      const usedPositions = prev.map(col => col.position)

      const availablePositions: number[] = []
      for (let i = 0; i <= posRange; i++) {
        if (!usedPositions.includes(i)) {
          availablePositions.push(i)
        }
      }

      if (availablePositions.length === 0) return prev

      const randomIndex = Math.floor(Math.random() * availablePositions.length)

      return [
        ...prev,
        {
          position: availablePositions[randomIndex],
          letters: generateLetters(height),
          currentAnimationPos: 0,
        },
      ]
    })
  }

  const containerRef = useRef<HTMLDivElement>(null)
  const testletterRef = useRef<HTMLDivElement>(null)
  const [targetRef, isInView] = useIsVisible({ threshold: 0 })

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isInView) return

      const container = containerRef.current?.getBoundingClientRect() || {
        width: 0,
        height: 0,
      }

      const testletter = testletterRef.current?.getBoundingClientRect() || {
        width: 0,
        height: 0,
      }

      addRandomCol(
        Math.floor(container.width / testletter.width + 5),
        Math.floor(container.height / testletter.height + 5)
      )

      setCols(prev => {
        return prev
          .map(col => {
            const newPos = col.currentAnimationPos + 1

            return {
              ...col,
              currentAnimationPos: newPos,
            }
          })
          .filter(
            col => col.currentAnimationPos - col.letters.length < ANIMATION_LEN
          )
      })
    }, 100)

    return () => clearInterval(intervalId)
  }, [isInView])

  return (
    <div className="matrix" ref={mergeRefs(containerRef, targetRef)}>
      <div
        style={{ "--pos": 0, opacity: 0 } as React.CSSProperties}
        className="matrix__col"
      >
        <div ref={testletterRef}>A</div>
      </div>
      {cols.map((col, i) => (
        <div
          key={i}
          className="matrix__col"
          style={{ "--pos": col.position } as React.CSSProperties}
        >
          {col.letters.map((letter, j) => (
            <div
              key={j}
              style={{
                opacity:
                  col.currentAnimationPos - j < 0
                    ? 0
                    : (ANIMATION_LEN - (col.currentAnimationPos - j)) /
                      ANIMATION_LEN,
              }}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Matrix
