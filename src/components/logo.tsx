import clsx from "clsx";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className)}
    >
      <path
        d="M18.55 5.4L21 1H8.73L2 13.08L7.53 23H12.44L7.53 14.2H13.64L16.09 9.8H8.73L11.19 5.4H18.55Z"
        fill="url(#paint0_linear_119_10649)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_119_10649"
          x1="11.5"
          y1="1"
          x2="11.5"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
