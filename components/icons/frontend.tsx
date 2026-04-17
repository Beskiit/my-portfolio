interface frontendProps {
  className?: string;
}

export default function frontend({ className }: frontendProps) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="34" height="34" fill="url(#pattern0_3_190)" />
      <defs>
        <pattern
          id="pattern0_3_190"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_3_190" transform="scale(0.0208333)" />
        </pattern>
        <image
          id="image0_3_190"
          width="48"
          height="48"
          preserveAspectRatio="none"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADJElEQVR4AeyXP+hOURjHbzIYDAbFQFEURShCBkQxGIwGis3GQEZGymAzogwGA2UgA4oQA1GUATEYDAaDweD7uc7z9rznPX73z3nf369X59fzvc/f89zzPM+9576/edWU/5UC5nqAZQJlApkdKI9QZgOzl5cJZLcwM0GZQGYDs5eXCWS3MDPBfzWBdWrGYiFFK2QEYtV8XbYJu2bAZvk8odt6bzd5gQRi4vsvlX2N8E+yCZxTxBvhoxAvOCTbh4CD4peEp8KDGfBCvvMCxd4XRyc3NqlDtEraO4GYL+LcQ6yiINbgO4khBSvgcHAuFD8geNovhY0AksddkjtJi2Ql115xozMS4gadks2mwyQuS4dYi47MfeEjsALYnDkpwuQUPy7jEeGYcEHwdFoKdvxsjCJkGiIa4g37vCKZx0asHVkB7aL/Rv0Quy5cFe4Knm5KwY7/p+QU+QKYhnU/Fdto61NAY9KGgB3y28Q5CKT2pw4F9L9JWGkT4RHlBcVsBfxG6YNUATuViFPJsEH6OOiJS2Iv9p5gex14Z5YqgK6cVSbDRsnjICbwOSSiAPLaifY42DuzVAGdk7RcwGZto1u1xr/MZpe5G6UKuKYUux3uSR4X2UY530+EpEzmVZA7s1QBn5TlocM3yeMiK4B8dt4/l5L6XsjcTKkCmlf1j3irpXxHxAZEUZxMA0MXYbYLYG/+NEJ/xqUvZrOAZWGTdDyINYv12hhdlkg/GoFDobIC/IeEl0qxrehXFBXr3m338B3n/I/vZ3Hezk+OK0rmwc+WQQH8dpG/YtEdBAd0koJbzo7I6fEeQXgkxC88myWnXNUNLgK2r+KQ3Zc8HB7YbnMRiLc4qSNU38smwFd3vUJWCrYhiTVR6WpJIC6Ajm+Sb4vAx0lsiMi1XBZycw+JFWvWSmDdRXGIF5sYbPz/gY3NE7ddij/WkbHV/wJYAYqpOCG+IyRAd0DCVW/opRxMSGyE2By5vYOp0PWUzechjon5Yx0ZWx3nC/DJpkYuBcz1qMoEygQyO1AeocwGZi+fzASyt9U+QSmgfa8mE1kmMJm+ts869RP4AwAA//8NEH93AAAABklEQVQDAIeth2FZO3SdAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
}
