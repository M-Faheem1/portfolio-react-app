import * as React from "react";
const SvgGradientTopSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1007}
    fill="none"
    {...props}
  >
    <g filter="url(#gradient-topSvg_svg__a)" opacity={0.4}>
      <ellipse cx={720} cy={0.5} fill="#6C4BEF" rx={720} ry={431.5} />
    </g>
    <defs>
      <filter
        id="gradient-topSvg_svg__a"
        width={2590}
        height={2013}
        x={-575}
        y={-1006}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_143_652"
          stdDeviation={287.5}
        />
      </filter>
    </defs>
  </svg>
);
export default SvgGradientTopSvg;
