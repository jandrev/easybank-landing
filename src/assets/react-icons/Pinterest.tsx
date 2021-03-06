import { SVGProps } from "react";

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FFF"
      d="M12 0C5.374 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174 -0.106 -0.949 -0.2 -2.406 0.042 -3.442 0.218 -0.936 1.406 -5.964 1.406 -5.964s-0.359 -0.72 -0.359 -1.783c0 -1.668 0.967 -2.914 2.172 -2.914 1.022 0 1.517 0.768 1.517 1.69 0 1.03 -0.654 2.568 -0.994 3.996 -0.283 1.194 0.6 2.168 1.776 2.168 2.134 0 3.773 -2.249 3.773 -5.496 0 -2.872 -2.064 -4.882 -5.012 -4.882 -3.414 0 -5.418 2.562 -5.418 5.208 0 1.031 0.397 2.137 0.894 2.737l-0.334 1.36c-0.053 0.22 -0.174 0.268 -0.402 0.161 -1.499 -0.697 -2.436 -2.888 -2.436 -4.649 0 -3.785 2.75 -7.262 7.93 -7.262 4.163 0 7.398 2.968 7.398 6.931 0 4.136 -2.608 7.464 -6.228 7.464 -1.216 0 -2.358 -0.63 -2.749 -1.378l-0.748 2.854c-0.271 1.043 -1.002 2.35 -1.493 3.145 1.124 0.348 2.317 0.535 3.554 0.535 6.626 0 12 -5.372 12 -12S18.626 0 12 0z"
    />
  </svg>
);

export { SVGComponent as Pinterest };
