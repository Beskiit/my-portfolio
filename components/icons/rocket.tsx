interface rocketProps {
  className?: string;
}

export default function rocket({ className }: rocketProps) {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3_181)">
        <path
          d="M17.438 27.125h-3.875"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 13.563a1.453 1.453 0 100-2.907 1.453 1.453 0 000 2.906z"
          fill="#000"
        />
        <path
          d="M11.481 23.25C4.544 11.543 12.578 3.94 14.906 2.14a.97.97 0 011.189 0c2.327 1.8 10.362 9.403 3.424 21.11h-8.038z"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.262 13.427l3.67 4.403a.968.968 0 01.201.83l-1.496 6.737a.969.969 0 01-1.552.546L19.52 23.25M8.738 13.427l-3.67 4.403a.97.97 0 00-.201.83l1.496 6.737a.969.969 0 001.552.546l3.566-2.693"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_181">
          <path fill="#fff" d="M0 0H31V31H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
