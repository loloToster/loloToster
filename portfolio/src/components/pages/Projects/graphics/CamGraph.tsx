function CamGraph() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(-6 64 76)">
        <rect
          x="24"
          y="20"
          width="80"
          height="112"
          rx="8"
          fill="var(--bg-inverse)"
          stroke="var(--border-strong)"
          strokeWidth="1.25"
        />

        <rect
          x="35"
          y="36"
          width="52"
          height="3.5"
          rx="1.75"
          fill="var(--text-inverse)"
        />
        <rect
          x="35"
          y="46"
          width="38"
          height="3.5"
          rx="1.75"
          fill="var(--text-inverse)"
          opacity="0.7"
        />

        <rect
          x="35"
          y="62"
          width="48"
          height="2"
          rx="1"
          fill="var(--text-inverse)"
        >
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="2s"
            repeatCount="indefinite"
          />
        </rect>

        <circle
          cx="38"
          cy="118"
          r="2.5"
          fill="var(--text-inverse)"
          opacity="0.5"
        />
        <rect
          x="44"
          y="116.5"
          width="18"
          height="3"
          rx="1.5"
          fill="var(--text-inverse)"
          opacity="0.35"
        />
      </g>

      <g transform="rotate(10 172 82)">
        <rect
          x="132"
          y="26"
          width="80"
          height="112"
          rx="8"
          fill="var(--bg-secondary)"
          stroke="var(--border-strong)"
          strokeWidth="1.25"
        />
        <rect
          x="143"
          y="42"
          width="44"
          height="3.5"
          rx="1.75"
          fill="var(--border-strong)"
        />
        <rect
          x="143"
          y="52"
          width="32"
          height="3.5"
          rx="1.75"
          fill="var(--border-default)"
        />
      </g>

      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 0 -5; 0 0"
          dur="3.2s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
        />
        <g transform="rotate(3 156 78)">
          <rect
            x="116"
            y="22"
            width="80"
            height="112"
            rx="8"
            fill="var(--bg-primary)"
            stroke="var(--border-strong)"
            strokeWidth="1.25"
          />

          <rect
            x="127"
            y="38"
            width="54"
            height="3.5"
            rx="1.75"
            fill="var(--text-primary)"
          />
          <rect
            x="127"
            y="48"
            width="42"
            height="3.5"
            rx="1.75"
            fill="var(--text-secondary)"
          />
          <rect
            x="127"
            y="58"
            width="26"
            height="3.5"
            rx="1.75"
            fill="var(--text-muted)"
          />

          <circle cx="130" cy="120" r="2.5" fill="var(--accent-gray)" />
          <rect
            x="136"
            y="118.5"
            width="16"
            height="3"
            rx="1.5"
            fill="var(--border-strong)"
          />

          <circle
            cx="181"
            cy="119"
            r="6.5"
            fill="var(--bg-secondary)"
            stroke="var(--border-strong)"
            strokeWidth="1.25"
          />
          <path
            d="M 178.2 119.2 L 180.2 121.2 L 184 117.2"
            stroke="var(--text-primary)"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      <rect
        x="52"
        y="150"
        width="136"
        height="20"
        rx="10"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
      />

      <circle cx="68" cy="160" r="3" fill="var(--text-primary)" />
      <circle cx="79" cy="160" r="3" fill="var(--text-primary)" />
      <circle cx="90" cy="160" r="3" fill="var(--accent-gray)">
        <animate
          attributeName="opacity"
          values="0.25;1;0.25"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>
      <line
        x1="102"
        y1="155"
        x2="102"
        y2="165"
        stroke="var(--border-default)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      <rect
        x="111"
        y="158.5"
        width="52"
        height="3"
        rx="1.5"
        fill="var(--bg-tertiary)"
      />
      <rect
        x="111"
        y="158.5"
        width="34"
        height="3"
        rx="1.5"
        fill="var(--text-primary)"
      />
      <circle cx="174" cy="160" r="2.2" fill="var(--text-primary)">
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}

export default CamGraph
