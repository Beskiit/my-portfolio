interface facebookProps {
  className?: string;
}

export default function facebook({ className }: facebookProps) {
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
        d="M23.563 13a10.58 10.58 0 01-9.299 10.487.405.405 0 01-.451-.406v-7.643h2.437a.81.81 0 00.813-.867.83.83 0 00-.838-.758h-2.413v-2.438a1.625 1.625 0 011.626-1.625h1.624a.812.812 0 00.813-.866.83.83 0 00-.84-.759h-1.598a3.25 3.25 0 00-3.25 3.25v2.438H9.75a.813.813 0 00-.813.866.83.83 0 00.84.758h2.41v7.646a.408.408 0 01-.45.406 10.578 10.578 0 01-9.292-10.886C2.648 7.119 7.09 2.66 12.578 2.447A10.575 10.575 0 0123.563 13z"
        fill="#000"
      />
    </svg>
  );
}
