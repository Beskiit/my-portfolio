interface xProps {
  className?: string;
}

export default function x({ className }: xProps) {
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
        d="M21.836 22.328a.813.813 0 01-.711.422H16.25a.812.812 0 01-.685-.377l-4.113-6.462-5.976 6.573a.812.812 0 01-1.202-1.093l6.273-6.906L4.19 4.499a.813.813 0 01.686-1.249H9.75a.812.812 0 01.686.377l4.112 6.462 5.976-6.573a.812.812 0 011.202 1.093l-6.273 6.901 6.358 9.992a.813.813 0 01.025.826z"
        fill="#000"
      />
    </svg>
  );
}
