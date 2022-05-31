import { SVGProps } from "react";

const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={11} {...props}>
    <g fill="#2D314D" fillRule="evenodd">
      <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
    </g>
  </svg>
);

export { SVGComponent as Hamburger };
