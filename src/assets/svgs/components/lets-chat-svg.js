import * as React from "react";
const SvgLetsChatSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#D1D5DB"
      d="M15 15h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1Zm9.06 8.683-6.412-5.445-1.295 1.524 7.72 6.555 7.581-6.56-1.308-1.513-6.286 5.439Z"
    />
    <rect width={47} height={47} x={0.5} y={0.5} stroke="#D1D5DB" rx={23.5} />
  </svg>
);
export default SvgLetsChatSvg;
