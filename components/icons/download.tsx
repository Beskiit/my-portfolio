interface downloadProps {
  className?: string;
}

export default function download({ className }: downloadProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 11.25v6a.75.75 0 01-.75.75H.75a.75.75 0 01-.75-.75v-6a.75.75 0 111.5 0v5.25h15v-5.25a.75.75 0 111.5 0zm-9.53.53a.748.748 0 001.06 0l3.75-3.75a.75.75 0 10-1.06-1.06L9.75 9.44V.75a.75.75 0 00-1.5 0v8.69L5.78 6.97a.75.75 0 00-1.06 1.06l3.75 3.75z"
        fill="#000"
      />
    </svg>
  );
}
