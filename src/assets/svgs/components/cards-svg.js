import * as React from "react";
const SvgCardsSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={48}
    fill="none"
    {...props}
  >
    <g filter="url(#cardsSvg_svg__a)">
      <rect
        width={48}
        height={48}
        x={0.5}
        fill="#fff"
        fillOpacity={0.4}
        rx={24}
      />
      <path
        fill="#F9FAFB"
        d="M28.503 21.408 19.913 30 18.5 28.588l8.591-8.591h-7.572V18H30.5v10.98h-1.997v-7.572Z"
      />
    </g>
    <defs>
      <filter
        id="cardsSvg_svg__a"
        width={108}
        height={108}
        x={-29.5}
        y={-30}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={15} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_143_340"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_143_340"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgCardsSvg;
