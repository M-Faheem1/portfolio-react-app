import * as React from "react";
const SvgVideoIconSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64}
    height={64}
    fill="none"
    {...props}
  >
    <g filter="url(#videoIconSvg_svg__a)">
      <circle cx={114} cy={114} r={24.667} fill="#6C4BEF" />
      <circle cx={114} cy={114} r={24.667} stroke="#F9FAFB" strokeWidth={2} />
    </g>
    <g filter="url(#videoIconSvg_svg__b)">
      <circle cx={114} cy={114} r={32} fill="#fff" fillOpacity={0.2} />
    </g>
    <path
      fill="#F9FAFB"
      d="M107 107.274c0-1.707 1.826-2.792 3.325-1.977l12.362 6.727c1.566.852 1.566 3.1 0 3.952l-12.362 6.727c-1.499.815-3.325-.27-3.325-1.977v-13.452Z"
    />
    <defs>
      <filter
        id="videoIconSvg_svg__a"
        width={28}
        height={28}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_142_1159"
          stdDeviation={44}
        />
      </filter>
      <filter
        id="videoIconSvg_svg__b"
        width={28}
        height={28}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_142_1159"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_142_1159"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgVideoIconSvg;
