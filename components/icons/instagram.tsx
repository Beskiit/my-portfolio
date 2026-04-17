interface instagramProps {
  className?: string;
}

export default function instagram({ className }: instagramProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.875 2.438h-9.75a5.694 5.694 0 00-5.688 5.687v9.75a5.694 5.694 0 005.688 5.688h9.75a5.694 5.694 0 005.688-5.688v-9.75a5.693 5.693 0 00-5.688-5.688zM13 17.874a4.875 4.875 0 110-9.75 4.875 4.875 0 010 9.75zm6.094-9.75a1.22 1.22 0 110-2.438 1.22 1.22 0 010 2.438zM16.25 13a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"
        fill="#000"
      />
    </svg>
  );
}
