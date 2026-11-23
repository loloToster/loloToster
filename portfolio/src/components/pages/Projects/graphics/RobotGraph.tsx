function RobotGraph() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        x1="20"
        y1="32"
        x2="220"
        y2="32"
        stroke="var(--border-subtle)"
        strokeWidth="1"
      />
      <line
        x1="20"
        y1="98"
        x2="220"
        y2="98"
        stroke="var(--border-subtle)"
        strokeWidth="1"
      />
      <line
        x1="104"
        y1="18"
        x2="104"
        y2="166"
        stroke="var(--border-subtle)"
        strokeWidth="1"
      />

      <g stroke="var(--border-strong)" strokeWidth="1.25" strokeLinecap="round">
        <line x1="25" y1="22" x2="31" y2="22" />
        <line x1="28" y1="19" x2="28" y2="25" />
        <line x1="209" y1="22" x2="215" y2="22" />
        <line x1="212" y1="19" x2="212" y2="25" />
      </g>

      <g
        stroke="var(--border-default)"
        strokeWidth="1.25"
        strokeLinecap="round"
      >
        <line x1="202" y1="42" x2="208" y2="42" />
        <line x1="205" y1="64" x2="208" y2="64" />
        <line x1="202" y1="86" x2="208" y2="86" />
        <line x1="205" y1="108" x2="208" y2="108" />
        <line x1="202" y1="130" x2="208" y2="130" />
        <line x1="205" y1="152" x2="208" y2="152" />
      </g>

      <line
        x1="18"
        y1="166"
        x2="222"
        y2="166"
        stroke="var(--border-strong)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <g
        stroke="var(--border-default)"
        strokeWidth="1.25"
        strokeLinecap="round"
      >
        <line x1="34" y1="166" x2="30" y2="171" />
        <line x1="58" y1="166" x2="54" y2="171" />
        <line x1="82" y1="166" x2="78" y2="171" />
        <line x1="106" y1="166" x2="102" y2="171" />
        <line x1="130" y1="166" x2="126" y2="171" />
        <line x1="154" y1="166" x2="150" y2="171" />
        <line x1="178" y1="166" x2="174" y2="171" />
        <line x1="202" y1="166" x2="198" y2="171" />
      </g>

      <rect
        x="26"
        y="148"
        width="26"
        height="18"
        rx="3"
        fill="var(--bg-secondary)"
        stroke="var(--border-strong)"
        strokeWidth="1.75"
      />
      <circle cx="33" cy="155" r="1.75" fill="var(--text-primary)">
        <animate
          attributeName="opacity"
          values="1;0.25;1"
          dur="2.6s"
          repeatCount="indefinite"
        />
      </circle>
      <line
        x1="38"
        y1="155"
        x2="46"
        y2="155"
        stroke="var(--accent-gray)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 52 160 H 66"
        stroke="var(--border-strong)"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      <rect
        x="66"
        y="154"
        width="76"
        height="12"
        rx="3"
        fill="var(--bg-secondary)"
        stroke="var(--border-strong)"
        strokeWidth="2"
      />
      <path
        d="M 84 154 V 138 A 20 20 0 0 1 124 138 V 154 Z"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="2"
      />

      <g transform="translate(104 138)">
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-36; -33; -36"
            dur="4.4s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
          />
          <path
            d="M -13 0 L -10 -66 L 10 -66 L 13 0 Z"
            fill="var(--bg-secondary)"
            stroke="var(--border-strong)"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          <g transform="translate(0 -66)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="82; 78; 82"
                dur="4.4s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
              />
              <path
                d="M -10 0 L -7.5 -62 L 7.5 -62 L 10 0 Z"
                fill="var(--bg-secondary)"
                stroke="var(--border-strong)"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              <g transform="translate(0 -62)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="96; 100; 96"
                    dur="4.4s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                  />
                  <path
                    d="M -7.5 0 L -5.5 -52 L 5.5 -52 L 7.5 0 Z"
                    fill="var(--bg-secondary)"
                    stroke="var(--border-strong)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />

                  <g transform="translate(0 -52)">
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="24; 20; 24"
                        dur="4.4s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.45 0 0.55 1; 0.45 0 0.55 1"
                      />
                      <rect
                        x="-3"
                        y="-10"
                        width="6"
                        height="10"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-strong)"
                        strokeWidth="1.75"
                      />
                      <path
                        d="M -11 -28 V -19 A 11 11 0 0 0 11 -19 V -28 H 5 V -19 A 5 5 0 0 1 -5 -19 V -28 Z"
                        fill="var(--bg-primary)"
                        stroke="var(--border-strong)"
                        strokeWidth="1.75"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="-11"
                        y="-32"
                        width="6"
                        height="4.5"
                        rx="1"
                        fill="var(--bg-tertiary)"
                        stroke="var(--border-strong)"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="5"
                        y="-32"
                        width="6"
                        height="4.5"
                        rx="1"
                        fill="var(--bg-tertiary)"
                        stroke="var(--border-strong)"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M -7 -36.5 Q 0 -41 7 -36.5"
                        stroke="var(--accent-gray)"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                      >
                        <animate
                          attributeName="opacity"
                          values="0.15;0.7;0.15"
                          dur="2.8s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>

                    <circle
                      cx="0"
                      cy="0"
                      r="8"
                      fill="var(--bg-primary)"
                      stroke="var(--border-strong)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="3"
                      fill="var(--bg-secondary)"
                      stroke="var(--border-strong)"
                      strokeWidth="1.75"
                    />
                  </g>
                </g>

                <circle
                  cx="0"
                  cy="0"
                  r="11"
                  fill="var(--bg-primary)"
                  stroke="var(--border-strong)"
                  strokeWidth="2"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="4.5"
                  fill="var(--bg-secondary)"
                  stroke="var(--border-strong)"
                  strokeWidth="2"
                />
              </g>
            </g>

            <circle
              cx="0"
              cy="0"
              r="14"
              fill="var(--bg-primary)"
              stroke="var(--border-strong)"
              strokeWidth="2"
            />
            <circle
              cx="0"
              cy="0"
              r="6"
              fill="var(--bg-secondary)"
              stroke="var(--border-strong)"
              strokeWidth="2"
            />
          </g>
        </g>

        <circle
          cx="0"
          cy="0"
          r="17"
          fill="var(--bg-primary)"
          stroke="var(--border-strong)"
          strokeWidth="2"
        />
        <circle
          cx="0"
          cy="0"
          r="7.5"
          fill="var(--bg-secondary)"
          stroke="var(--border-strong)"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}

export default RobotGraph
