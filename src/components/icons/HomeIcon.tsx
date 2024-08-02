import { SVGProps } from "react";
const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <g fill="currentColor" filter="url(#a)">
      <rect width={7.92} height={10.08} x={4} y={0.5} rx={0.72} />
      <rect width={7.92} height={10.08} x={14.08} y={8.42} rx={0.72} />
      <rect width={7.92} height={6.12} x={14.08} y={0.5} rx={0.72} />
      <rect width={7.92} height={6.12} x={4} y={12.38} rx={0.72} />
    </g>
    {/* <defs>
      <filter
        id="a"
        width={26}
        height={26}
        x={0}
        y={0.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_368_374" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_368_374"
          result="shape"
        />
      </filter>
    </defs> */}
  </svg>
);
export default HomeIcon;
