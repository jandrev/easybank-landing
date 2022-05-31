import { useContext } from "react";

import { Close, Hamburger, LogoLight } from "@assets/react-icons";
import { MenuContext } from "@core/context/MenuContext";
import { createStyles, Navbar, UnstyledButton } from "@mantine/core";

const useStyles = createStyles(() => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRight: 0,
    height: 64,
    padding: "22px 24px",
  },
  logo: {
    width: 139,
    height: 20,
  },
  burger: {
    border: 0,
    padding: 0,
    background: "transparent",
  },
}));

export const CustomNavbar = () => {
  const { classes } = useStyles();
  const { opened, setOpened } = useContext(MenuContext);
  return (
    <Navbar className={classes.navbar}>
      <Navbar.Section>
        <LogoLight className={classes.logo} />
      </Navbar.Section>
      <Navbar.Section>
        <UnstyledButton onClick={() => setOpened(!opened)}>
          {opened ? <Close /> : <Hamburger />}
        </UnstyledButton>
      </Navbar.Section>
    </Navbar>
  );
};
