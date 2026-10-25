export default function Envelope() {
  return (
    <div className="envelope">
      <svg viewBox="0 0 72 52" width="52" height="38" aria-hidden="true">
        <rect x="1.5" y="3" width="69" height="46" rx="8" fill="#f7e7e4" stroke="#f0d4d0" strokeWidth="1.5" />
        <path
          d="M3 7.5 L36 30 L69 7.5"
          fill="#f4deda"
          stroke="#ecc9c5"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M36 15.2c-1.5-1.7-4.2-.9-4.2 1.3 0 1.7 1.7 2.9 4.2 5 2.5-2.1 4.2-3.3 4.2-5 0-2.2-2.7-3-4.2-1.3z"
          fill="#d14d60"
        />
      </svg>
      <span className="envelope-line" />
    </div>
  )
}
