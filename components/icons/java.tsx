interface javaProps {
  className?: string;
}

export default function java({ className }: javaProps) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill="url(#pattern0_3_233)" d="M0 0H22.8824V22.8824H0z" />
      <defs>
        <pattern
          id="pattern0_3_233"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use href="#image0_3_233" transform="scale(.02083)" />
        </pattern>
        <image
          id="image0_3_233"
          width={48}
          height={48}
          preserveAspectRatio="none"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
