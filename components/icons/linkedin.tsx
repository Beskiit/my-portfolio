interface linkedinProps {
  className?: string;
}

export default function linkedin({ className }: linkedinProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3_71)">
        <path
          d="M20.25 3H3.75a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75zM11.25 10.5v6M8.25 10.5v6"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 13.125a2.625 2.625 0 015.25 0V16.5"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.25 9a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_71">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
