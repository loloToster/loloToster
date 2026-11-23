function NexumGraph() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="16"
        y="24"
        width="62"
        height="132"
        rx="10"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
      />
      <line
        x1="40"
        y1="33"
        x2="54"
        y2="33"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <rect x="28" y="48" width="38" height="18" rx="9" fill="#4db6ac" />
      <circle cx="57" cy="57" r="5.5" fill="var(--bg-primary)" />
      <rect
        x="28"
        y="81"
        width="38"
        height="4"
        rx="2"
        fill="var(--bg-tertiary)"
      />
      <rect x="28" y="81" width="24" height="4" rx="2" fill="#4db6ac" />
      <circle
        cx="52"
        cy="83"
        r="3.5"
        fill="var(--text-primary)"
        stroke="var(--bg-primary)"
        strokeWidth="1.25"
      />
      <rect
        x="28"
        y="100"
        width="38"
        height="40"
        rx="6"
        fill="var(--bg-secondary)"
        stroke="var(--border-default)"
        strokeWidth="1.25"
      />
      <path
        d="M 33 121 H 39 L 43 113 L 47 128 L 51 118 L 54 121 H 61"
        stroke="#4db6ac"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="78"
        y1="55"
        x2="124"
        y2="55"
        stroke="var(--accent-gray)"
        strokeWidth="1.25"
        strokeDasharray="3 3"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="12"
          to="0"
          dur="1.4s"
          repeatCount="indefinite"
        />
      </line>
      <circle
        cx="101"
        cy="55"
        r="10"
        fill="var(--bg-primary)"
        stroke="#4db6ac"
        strokeWidth="1.25"
      />
      <path
        d="M 96 54 A 6.5 6.5 0 0 1 106 54"
        stroke="#4db6ac"
        strokeWidth="1.25"
        strokeLinecap="round"
      >
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </path>
      <circle cx="101" cy="58" r="1.4" fill="#4db6ac" />
      <rect
        x="124"
        y="24"
        width="100"
        height="62"
        rx="8"
        fill="var(--bg-primary)"
        stroke="#4db6ac"
        strokeWidth="1.25"
      />
      <rect
        x="134"
        y="35"
        width="80"
        height="16"
        rx="4"
        fill="var(--bg-secondary)"
        stroke="var(--border-default)"
        strokeWidth="1.25"
      />
      <circle cx="143" cy="43" r="2" fill="#4db6ac">
        <animate
          attributeName="opacity"
          values="1;0.25;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <line
        x1="151"
        y1="43"
        x2="175"
        y2="43"
        stroke="var(--accent-gray)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="205" cy="43" r="1.5" fill="var(--accent-gray)" />
      <rect
        x="134"
        y="59"
        width="80"
        height="16"
        rx="4"
        fill="var(--bg-secondary)"
        stroke="var(--border-default)"
        strokeWidth="1.25"
      />
      <circle cx="143" cy="67" r="2" fill="#4db6ac" />
      <line
        x1="151"
        y1="67"
        x2="185"
        y2="67"
        stroke="var(--accent-gray)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="205" cy="67" r="1.5" fill="var(--accent-gray)" />
      <line
        x1="147"
        y1="86"
        x2="147"
        y2="114"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
      />
      <line
        x1="201"
        y1="86"
        x2="201"
        y2="114"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
      />
      <circle cx="147" cy="88" r="2" fill="#4db6ac">
        <animate
          attributeName="cy"
          values="88;112"
          dur="1.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="201" cy="112" r="2" fill="#4db6ac">
        <animate
          attributeName="cy"
          values="112;88"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <rect
        x="124"
        y="114"
        width="46"
        height="42"
        rx="8"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
      />
      <g stroke="var(--accent-gray)" strokeWidth="1.25" strokeLinecap="round">
        <line x1="143" y1="123" x2="143" y2="127" />
        <line x1="147" y1="123" x2="147" y2="127" />
        <line x1="151" y1="123" x2="151" y2="127" />
        <line x1="143" y1="143" x2="143" y2="147" />
        <line x1="147" y1="143" x2="147" y2="147" />
        <line x1="151" y1="143" x2="151" y2="147" />
        <line x1="135" y1="131" x2="139" y2="131" />
        <line x1="135" y1="135" x2="139" y2="135" />
        <line x1="135" y1="139" x2="139" y2="139" />
        <line x1="155" y1="131" x2="159" y2="131" />
        <line x1="155" y1="135" x2="159" y2="135" />
        <line x1="155" y1="139" x2="159" y2="139" />
      </g>
      <rect
        x="139"
        y="127"
        width="16"
        height="16"
        rx="2.5"
        fill="var(--bg-secondary)"
        stroke="var(--accent-gray-dark)"
        strokeWidth="1.25"
      />
      <rect x="144" y="132" width="6" height="6" rx="1" fill="#4db6ac">
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="178"
        y="114"
        width="46"
        height="42"
        rx="8"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
      />
      <g stroke="var(--accent-gray)" strokeWidth="1.25" strokeLinecap="round">
        <line x1="197" y1="123" x2="197" y2="127" />
        <line x1="201" y1="123" x2="201" y2="127" />
        <line x1="205" y1="123" x2="205" y2="127" />
        <line x1="197" y1="143" x2="197" y2="147" />
        <line x1="201" y1="143" x2="201" y2="147" />
        <line x1="205" y1="143" x2="205" y2="147" />
        <line x1="189" y1="131" x2="193" y2="131" />
        <line x1="189" y1="135" x2="193" y2="135" />
        <line x1="189" y1="139" x2="193" y2="139" />
        <line x1="209" y1="131" x2="213" y2="131" />
        <line x1="209" y1="135" x2="213" y2="135" />
        <line x1="209" y1="139" x2="213" y2="139" />
      </g>
      <rect
        x="193"
        y="127"
        width="16"
        height="16"
        rx="2.5"
        fill="var(--bg-secondary)"
        stroke="var(--accent-gray-dark)"
        strokeWidth="1.25"
      />
      <rect x="198" y="132" width="6" height="6" rx="1" fill="#4db6ac">
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  )
}

export default NexumGraph
