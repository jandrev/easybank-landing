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
      d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325v21.352C0 23.407 0.593 24 1.325 24h11.496v-9.294H9.691V11.084h3.127V8.412c0 -3.1 1.894 -4.788 4.66 -4.788 1.325 0 2.462 0.098 2.795 0.143v3.24h-1.918c-1.505 0 -1.795 0.716 -1.795 1.764v2.314h3.587l-0.468 3.622h-3.12V24h6.118c0.73 0 1.322 -0.593 1.322 -1.325V1.325C24 0.593 23.407 0 22.675 0z"
    />
  </svg>
);

export { SVGComponent as Facebook };
