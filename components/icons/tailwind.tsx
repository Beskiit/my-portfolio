interface tailwindProps {
  className?: string;
}

export default function tailwind({ className }: tailwindProps) {
  return (
    <svg
      width="29"
      height="32"
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3_206)">
        <path
          d="M14.182 6.459c-3.703 0-6.018 2.044-6.943 6.133 1.388-2.044 3.008-2.811 4.86-2.3 1.056.292 1.811 1.138 2.647 2.075 1.362 1.525 2.937 3.291 6.379 3.291 3.703 0 6.017-2.044 6.943-6.133-1.389 2.045-3.009 2.811-4.86 2.3-1.056-.291-1.812-1.137-2.647-2.074-1.362-1.526-2.938-3.292-6.38-3.292zm-6.943 9.2c-3.703 0-6.018 2.044-6.944 6.132 1.39-2.044 3.01-2.81 4.86-2.3 1.057.292 1.812 1.138 2.648 2.075 1.361 1.526 2.937 3.292 6.379 3.292 3.703 0 6.017-2.045 6.943-6.133-1.389 2.044-3.009 2.81-4.86 2.3-1.057-.292-1.812-1.138-2.648-2.075-1.361-1.526-2.937-3.292-6.378-3.292z"
          fill="url(#paint0_linear_3_206)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3_206"
          x1={-76.8511}
          y1={595.215}
          x2={2434.37}
          y2={1906.59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2298BD" />
          <stop offset={1} stopColor="#0ED7B5" />
        </linearGradient>
        <clipPath id="clip0_3_206">
          <path fill="#fff" d="M0 0H28.3636V31.3168H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
