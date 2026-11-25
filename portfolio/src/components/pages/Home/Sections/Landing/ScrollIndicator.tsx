function ScrollIndicator() {
  return (
    <>
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile"
        aria-label="Swipe up to scroll"
      >
        <defs>
          <linearGradient id="swipe-trail" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect
          x="10"
          y="5"
          width="16"
          height="26"
          rx="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <g opacity="0">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 6.5; 0 -3; 0 -3.5; 0 6.5"
            keyTimes="0; 0.8; 0.96; 1"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 1 1; 0 0 1 1"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0; 1; 1; 0; 0"
            keyTimes="0; 0.22; 0.72; 0.94; 1"
            dur="2s"
            repeatCount="indefinite"
          />

          <rect
            x="17.25"
            y="13.5"
            width="1.5"
            height="7.5"
            rx="0.75"
            fill="url(#swipe-trail)"
          />
          <circle cx="18" cy="13.5" r="1.85" fill="currentColor" />
        </g>
      </svg>
      <svg
        className="desktop"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Scroll down"
      >
        <defs>
          <linearGradient
            id="mouse-wheel-gradient"
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="5"
            x2="0"
            y2="12"
          >
            <animate
              attributeName="y1"
              values="5; 16; 16"
              keyTimes="0; 0.75; 1"
              dur="1.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y2"
              values="12; 23; 23"
              keyTimes="0; 0.75; 1"
              dur="1.8s"
              repeatCount="indefinite"
            />
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <rect
          x="10.5"
          y="6"
          width="15"
          height="24"
          rx="7.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="17.1"
          y="10.5"
          width="1.8"
          height="6.5"
          rx="0.9"
          fill="url(#mouse-wheel-gradient)"
        />
      </svg>
    </>
  )
}

export default ScrollIndicator
