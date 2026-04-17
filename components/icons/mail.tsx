interface mailProps {
  className?: string;
}

export default function mail({ className }: mailProps) {
  return (
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 3.768V8.5a1.5 1.5 0 01-1.412 1.498L9.5 10h-7a1.5 1.5 0 01-1.498-1.412L1 8.5V3.768l4.723 3.148.058.033a.5.5 0 00.439 0l.058-.033L11 3.768z"
        fill="#000"
      />
      <path
        d="M9.5 2c.54 0 1.014.285 1.277.713L6 5.9 1.223 2.713a1.5 1.5 0 011.177-.71L2.5 2h7z"
        fill="#000"
      />
    </svg>
  );
}
