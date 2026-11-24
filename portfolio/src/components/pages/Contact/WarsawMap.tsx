import { useThemedGlitch } from "@/hooks/useThemedGlitch"

function WarsawMap({ children }: { children?: React.ReactNode }) {
  const { ref: riverGlitchRef } = useThemedGlitch({
    playMode: "always",
    timing: {
      duration: 6000,
    },
    glitchTimeSpan: {
      start: 0.9,
      end: 1,
    },
    shake: {
      amplitudeX: 0.05,
      amplitudeY: 0.05,
    },
    slice: {
      minHeight: 0.03,
      maxHeight: 0.08,
    },
  })

  const riverPath =
    "M 56 -6 C 72 14, 96 24, 128 30 C 142 33, 148 44, 152 60 C 154 74, 162 86, 178 98 C 194 110, 204 122, 210 140 C 216 158, 226 174, 242 188 C 254 198, 272 196, 280 208 C 286 218, 282 232, 292 246 C 304 262, 322 284, 358 366"

  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <svg
        viewBox="0 0 500 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "auto" }}
      >
        <g
          stroke="var(--border-default)"
          strokeWidth="0.85"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.65"
        >
          <path d="M 76 0 L 72 24 L 84 40 L 74 56 L 64 56 L 60 72 L 36 74 L 36 82 L 18 82 L 16 64 L 0 62" />
          <path d="M 76 48 L 106 54 L 124 66 L 146 60" />
          <path d="M 118 86 L 94 94 L 68 88 L 44 106 L 16 102 L 0 110" />
          <path d="M 114 152 L 84 156 L 56 146 L 26 158 L 0 152" />
          <path d="M 98 222 L 72 226 L 48 218 L 22 232 L 0 228" />
          <path d="M 140 252 L 136 274 L 154 294 L 144 316 L 122 324 L 104 342 L 108 360" />
          <path d="M 144 316 L 116 312 L 88 326 L 62 318 L 36 334 L 12 328 L 0 344" />
          <path d="M 212 332 L 208 348 L 196 360" />
          <path d="M 254 336 L 262 350 L 258 360" />
          <path d="M 286 0 L 284 22 L 296 34 L 278 52 L 262 56" />
          <path d="M 268 108 L 298 102 L 326 92 L 358 96 L 392 84 L 434 88 L 468 74 L 500 78" />
          <path d="M 392 84 L 404 54 L 428 32 L 436 0" />
          <path d="M 412 174 L 436 178 L 464 168 L 500 174" />
          <path d="M 382 212 L 414 216 L 442 208 L 462 224 L 490 218 L 500 222" />
          <path d="M 382 276 L 404 294 L 418 318 L 446 334 L 462 360" />
          <path d="M 354 274 L 364 304 L 352 332 L 364 360" />
        </g>

        <g
          stroke="var(--border-strong)"
          strokeWidth="0.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.35"
        >
          <path d="M 228 0 C 228 34, 224 68, 204 108" />
          <path d="M 432 0 C 446 14, 466 20, 500 24" />
          <path d="M 500 112 C 466 122, 438 134, 412 146" />
          <path d="M 500 288 C 452 296, 404 302, 356 292" />
          <path d="M 244 360 C 266 342, 294 328, 326 318" />
          <path d="M 0 284 C 48 292, 98 296, 152 288" />
        </g>

        <path
          d="M 142 46 L 166 36 L 164 30 L 180 29 L 184 38 L 194 37 L 196 34 L 210 35 L 210 42 L 222 42 L 222 34 L 236 35 L 238 39 L 256 31 L 262 56 L 266 78 L 258 82 L 268 108 L 276 124 L 284 134 L 302 132 L 314 122 L 326 118 L 328 130 L 336 148 L 334 156 L 354 154 L 382 148 L 384 164 L 398 163 L 398 166 L 414 162 L 412 174 L 402 176 L 405 184 L 396 185 L 396 196 L 380 192 L 382 212 L 390 224 L 388 234 L 396 240 L 392 252 L 384 256 L 390 266 L 382 276 L 372 270 L 354 274 L 326 278 L 316 276 L 294 296 L 278 312 L 272 324 L 262 336 L 254 336 L 236 326 L 226 324 L 222 330 L 212 332 L 192 330 L 194 304 L 188 296 L 174 290 L 168 276 L 146 264 L 140 252 L 126 244 L 108 242 L 108 226 L 98 222 L 98 212 L 110 210 L 116 204 L 112 196 L 114 184 L 126 182 L 128 172 L 116 166 L 114 152 L 120 148 L 116 132 L 118 114 L 114 102 L 118 86 L 128 82 L 136 84 L 148 78 L 152 66 Z"
          fill="var(--bg-secondary)"
        />

        <g
          stroke="var(--border-strong)"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        >
          <path d="M 196 112 L 174 134 L 166 146 L 146 132 L 116 132" />
          <path d="M 212 145 L 194 156 L 182 152 L 166 146" />
          <path d="M 166 146 L 158 178 L 152 196 L 132 196 L 114 184" />
          <path d="M 182 152 L 190 176 L 206 188 L 186 196 L 152 196" />
          <path d="M 206 188 L 214 208 L 198 214 L 188 202 L 186 196" />
          <path d="M 214 208 L 236 206 L 244 198 L 250 194" />
          <path d="M 152 196 L 142 214 L 128 210 L 116 204" />
          <path d="M 142 214 L 146 232 L 136 244 L 140 252" />
          <path d="M 198 214 L 194 242 L 192 256 L 168 258 L 140 252" />
          <path d="M 192 256 L 222 254 L 244 246 L 258 234 L 270 242 L 282 232" />
          <path d="M 244 246 L 248 268 L 264 282 L 274 304 L 272 324" />
          <path d="M 192 256 L 194 282 L 194 304" />
          <path d="M 202 114 L 224 108 L 244 98 L 266 94" />
          <path d="M 212 145 L 232 154 L 254 146 L 276 124" />
          <path d="M 232 154 L 246 168 L 234 176" />
          <path d="M 246 168 L 266 154 L 284 152 L 298 164 L 284 134" />
          <path d="M 298 164 L 314 176 L 334 156" />
          <path d="M 334 156 L 342 174 L 356 188 L 380 192" />
          <path d="M 282 222 L 296 206 L 304 186 L 314 176" />
        </g>

        <path
          d="M 142 46 L 166 36 L 164 30 L 180 29 L 184 38 L 194 37 L 196 34 L 210 35 L 210 42 L 222 42 L 222 34 L 236 35 L 238 39 L 256 31 L 262 56 L 266 78 L 258 82 L 268 108 L 276 124 L 284 134 L 302 132 L 314 122 L 326 118 L 328 130 L 336 148 L 334 156 L 354 154 L 382 148 L 384 164 L 398 163 L 398 166 L 414 162 L 412 174 L 402 176 L 405 184 L 396 185 L 396 196 L 380 192 L 382 212 L 390 224 L 388 234 L 396 240 L 392 252 L 384 256 L 390 266 L 382 276 L 372 270 L 354 274 L 326 278 L 316 276 L 294 296 L 278 312 L 272 324 L 262 336 L 254 336 L 236 326 L 226 324 L 222 330 L 212 332 L 192 330 L 194 304 L 188 296 L 174 290 L 168 276 L 146 264 L 140 252 L 126 244 L 108 242 L 108 226 L 98 222 L 98 212 L 110 210 L 116 204 L 112 196 L 114 184 L 126 182 L 128 172 L 116 166 L 114 152 L 120 148 L 116 132 L 118 114 L 114 102 L 118 86 L 128 82 L 136 84 L 148 78 L 152 66 Z"
          stroke="var(--accent-gray)"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </svg>
      <div
        ref={riverGlitchRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 500 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%", height: "auto" }}
        >
          <defs>
            <path
              id="vistula-label-path"
              d="M 160 55 C 162 69, 170 81, 186 93 C 202 105, 212 117, 218 135"
            />
          </defs>

          <path
            d={riverPath}
            stroke="var(--accent-blue-subtle)"
            strokeWidth="6.5"
            strokeLinecap="round"
            opacity="0.3"
          >
            <animate
              attributeName="opacity"
              values="0.24;0.38;0.24"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d={riverPath}
            stroke="var(--accent-blue-subtle)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />

          <path
            d={riverPath}
            stroke="var(--accent-blue-subtle)"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeDasharray="12 20"
            opacity="0.95"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="32"
              dur="3.6s"
              repeatCount="indefinite"
            />
          </path>

          <text
            fill="var(--accent-blue-subtle)"
            fontFamily="var(--font-mono)"
            fontSize="7"
            letterSpacing="0.18em"
            opacity="0.9"
          >
            <textPath href="#vistula-label-path" startOffset="14%">
              VISTULA
            </textPath>
          </text>
        </svg>
      </div>
      {children}
    </div>
  )
}

export default WarsawMap
