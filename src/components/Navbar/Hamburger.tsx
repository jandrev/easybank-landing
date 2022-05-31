import { forwardRef } from 'react';

import HamburgerIcon from '@assets/icons/hamburger.svg';
import { UnstyledButton } from '@mantine/core';

interface HamburgerProps extends React.ComponentPropsWithoutRef<"button"> {
  icon?: React.ReactNode;
}

const Hamburger = forwardRef<HTMLButtonElement, HamburgerProps>(
  ({ icon, ...others }: HamburgerProps, ref) => (
    <UnstyledButton ref={ref} {...others}>
      <HamburgerIcon width={24} height={11} />
    </UnstyledButton>
  )
);
Hamburger.displayName = "UserButton";

export default Hamburger;
