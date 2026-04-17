interface responsiveProps {
  className?: string;
}

export default function responsive({ className }: responsiveProps) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fill="url(#pattern0_3_168)" d="M0 0H26V26H0z" />
      <defs>
        <pattern
          id="pattern0_3_168"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#image0_3_168" transform="scale(.02083)" />
        </pattern>
        <image
          id="image0_3_168"
          width={48}
          height={48}
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
