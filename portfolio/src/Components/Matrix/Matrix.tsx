import "./matrix.scss"
import { useEffect, useState } from "react"

// TODO: optimize number of columns and rows

interface Col {
  position: number,
  letters: string[],
  currentAnimationPos: number
}

const ANIMATION_LEN = 10

const generateLetters = () => {
  return Array.from({ length: 60 }, () => {
    const randomCharCode = Math.floor(Math.random() * 26) + 65;
    return String.fromCharCode(randomCharCode);
  })
}

function Matrix({ paused }: { paused?: boolean }) {
  const [cols, setCols] = useState<Col[]>([])

  const addRandomCol = () => {
    setCols(prev => {
      const usedPositions = prev.map(col => col.position)

      const availablePositions: number[] = [];
      for (let i = 0; i <= 140; i++) {
        if (!usedPositions.includes(i)) {
          availablePositions.push(i);
        }
      }

      if (availablePositions.length === 0) return prev

      const randomIndex = Math.floor(Math.random() * availablePositions.length);

      return [
        ...prev,
        {
          position: availablePositions[randomIndex],
          letters: generateLetters(),
          currentAnimationPos: 0
        }
      ]
    })
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (paused) return

      addRandomCol()

      setCols(prev => {
        return prev.map(col => {
          const newPos = col.currentAnimationPos + 1

          return {
            ...col,
            currentAnimationPos: newPos
          }
        }).filter(col => (col.currentAnimationPos - col.letters.length) < ANIMATION_LEN)
      })
    }, 100);

    return () => clearInterval(intervalId);
  }, [paused]);

  return (
    <div className="matrix">
      {cols.map((col, i) => (
        <div key={i} className="matrix__col" style={{ "--pos": col.position } as React.CSSProperties}>
          {col.letters.map((letter, j) => (
            <div key={j} style={{
              opacity: (col.currentAnimationPos - j) < 0 ? 0 : (
                (ANIMATION_LEN - (col.currentAnimationPos - j)) / ANIMATION_LEN
              )
            }}>
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Matrix
