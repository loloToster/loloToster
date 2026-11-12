import "./blobs.scss"
import Goo from "@lafleche/gooey-react"

export interface BlobI {
  pos: [number, number];
  size: number;
  color: number;
}

const BLOB_COLORS = [
  "#1d4ed8",
  "#2563eb",
  "#2862ae",
  "#3073c5",
  "#25759a"
];

function Blobs({ blobs }: { blobs: BlobI[] }) {
  return (
    <Goo composite className="blobs">
      <svg>
        {blobs.map((blob, i) => (
          <circle
            cx={`${blob.pos[0]}%`}
            cy={`${blob.pos[1]}%`}
            r={`${blob.size}%`}
            fill={BLOB_COLORS[blob.color]}
            key={i}
          />
        ))}
      </svg>
    </Goo>
  )
}

export default Blobs
