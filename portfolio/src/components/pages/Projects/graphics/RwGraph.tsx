function RwGraph() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient
          id="rw-eq"
          x1="146"
          y1="79"
          x2="204"
          y2="79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>

      <rect
        x="16"
        y="22"
        width="66"
        height="136"
        rx="10"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
      />
      <line
        x1="42"
        y1="31"
        x2="56"
        y2="31"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      <rect
        x="24"
        y="42"
        width="50"
        height="24"
        rx="5"
        fill="var(--bg-secondary)"
        stroke="url(#rw-grad)"
        strokeWidth="1.25"
      />
      <rect
        x="30"
        y="49"
        width="22"
        height="3"
        rx="1.5"
        fill="var(--text-primary)"
      />
      <rect
        x="30"
        y="56"
        width="14"
        height="2.5"
        rx="1.25"
        fill="var(--text-muted)"
      />
      <path
        d="M 61 56 L 64.5 52 L 68 56"
        stroke="url(#rw-grad)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="opacity"
          values="0.4;1;0.4"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </path>

      <rect
        x="24"
        y="72"
        width="50"
        height="24"
        rx="5"
        fill="var(--bg-primary)"
        stroke="var(--border-default)"
        strokeWidth="1.25"
      />
      <rect
        x="30"
        y="79"
        width="20"
        height="3"
        rx="1.5"
        fill="var(--text-secondary)"
      />
      <rect
        x="30"
        y="86"
        width="12"
        height="2.5"
        rx="1.25"
        fill="var(--border-strong)"
      />
      <path
        d="M 61 86 L 64.5 82 L 68 86"
        stroke="var(--accent-gray)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect
        x="24"
        y="102"
        width="50"
        height="24"
        rx="5"
        fill="var(--bg-primary)"
        stroke="var(--border-default)"
        strokeWidth="1.25"
      />
      <rect
        x="30"
        y="109"
        width="18"
        height="3"
        rx="1.5"
        fill="var(--text-muted)"
      />
      <rect
        x="30"
        y="116"
        width="10"
        height="2.5"
        rx="1.25"
        fill="var(--border-default)"
      />
      <path
        d="M 61 116 L 64.5 112 L 68 116"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect x="38" y="135" width="22" height="14" rx="7" fill="url(#rw-grad)" />
      <path
        d="M 49 139 V 145 M 46 142 H 52"
        stroke="#ffffff"
        strokeWidth="1.25"
        strokeLinecap="round"
      />

      <line
        x1="82"
        y1="54"
        x2="124"
        y2="54"
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
        cx="103"
        cy="54"
        r="10"
        fill="var(--bg-primary)"
        stroke="url(#rw-grad)"
        strokeWidth="1.25"
      />
      <path
        d="M 99.5 54.2 L 102 56.7 L 106.8 51.8"
        stroke="url(#rw-grad)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <rect
        x="124"
        y="22"
        width="100"
        height="136"
        rx="10"
        fill="var(--bg-primary)"
        stroke="var(--border-strong)"
        strokeWidth="1.25"
      />

      <circle cx="138" cy="36" r="3" fill="url(#rw-grad)">
        <animate
          attributeName="opacity"
          values="1;0.2;1"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>
      <rect
        x="146"
        y="34.5"
        width="26"
        height="3"
        rx="1.5"
        fill="var(--text-primary)"
      />
      <path
        d="M 204 33 A 4.5 4.5 0 0 1 204 39"
        stroke="url(#rw-grad)"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M 208 30.5 A 8 8 0 0 1 208 41.5"
        stroke="url(#rw-grad)"
        strokeWidth="1.25"
        strokeLinecap="round"
      >
        <animate
          attributeName="opacity"
          values="0.25;1;0.25"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      <line
        x1="134"
        y1="47"
        x2="214"
        y2="47"
        stroke="var(--border-default)"
        strokeWidth="1.25"
      />

      <rect
        x="134"
        y="56"
        width="80"
        height="46"
        rx="6"
        fill="var(--bg-secondary)"
        stroke="var(--border-default)"
        strokeWidth="1.25"
      />
      <g fill="url(#rw-eq)">
        <rect x="146" y="73" width="3.5" height="12" rx="1.75">
          <animate
            attributeName="height"
            values="8;22;10;18;8"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="75;68;74;70;75"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="155" y="68" width="3.5" height="22" rx="1.75">
          <animate
            attributeName="height"
            values="20;10;26;12;20"
            dur="1.3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="69;74;66;73;69"
            dur="1.3s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="164" y="65" width="3.5" height="28" rx="1.75">
          <animate
            attributeName="height"
            values="14;28;12;24;14"
            dur="1.7s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="72;65;73;67;72"
            dur="1.7s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="173" y="70" width="3.5" height="18" rx="1.75">
          <animate
            attributeName="height"
            values="24;12;20;28;24"
            dur="1.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="67;73;69;65;67"
            dur="1.4s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="182" y="66" width="3.5" height="26" rx="1.75">
          <animate
            attributeName="height"
            values="12;24;16;8;12"
            dur="1.6s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="73;67;71;75;73"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="191" y="72" width="3.5" height="14" rx="1.75">
          <animate
            attributeName="height"
            values="18;8;22;14;18"
            dur="1.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="70;75;68;72;70"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="200" y="75" width="3.5" height="8" rx="1.75">
          <animate
            attributeName="height"
            values="8;18;10;14;8"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values="75;70;74;72;75"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </rect>
      </g>

      <rect
        x="134"
        y="112"
        width="44"
        height="3.5"
        rx="1.75"
        fill="var(--text-primary)"
      />
      <rect
        x="134"
        y="122"
        width="80"
        height="3.5"
        rx="1.75"
        fill="var(--bg-tertiary)"
      />
      <rect
        x="134"
        y="122"
        width="46"
        height="3.5"
        rx="1.75"
        fill="url(#rw-grad)"
      />

      <path
        d="M 157 139 L 152 142.5 L 157 146"
        stroke="var(--accent-gray)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="174" cy="142.5" r="7.5" fill="url(#rw-grad)" />
      <path d="M 172 139.5 L 177.5 142.5 L 172 145.5 Z" fill="#ffffff" />
      <path
        d="M 191 139 L 196 142.5 L 191 146"
        stroke="var(--accent-gray)"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RwGraph
