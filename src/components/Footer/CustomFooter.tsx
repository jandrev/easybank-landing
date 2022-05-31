import { Button, Footer, Group, Text, Stack, ActionIcon } from "@mantine/core";
import { LogoDark } from "@assets/react-icons";
import { createStyles } from "@mantine/core";
import { SOCIAL } from "./SocialData";
import CallToAction from "common/CallToAction";

const ANCHORS = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

const useStyles = createStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    padding: "40px 78px",
    gap: 32,
    alignItems: "center",
    backgroundColor: theme.other.primaryPalette.darkBlue,
  },
  logo: {
    width: 139,
    height: 20,
  },
  socialSection: {
    display: "flex",
    gap: 16,
  },
  anchor: {
    fontSize: 15,
    fontWeight: theme.other.weights.md,
    color: "white",
    textAlign: "center",
  },
  final: {
    alignItems: "center",
  },
  copyright: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: theme.other.weights.md,
    color: theme.other.secondaryPalette.grayishBlue,
  },
}));

export const CustomFooter = () => {
  const { classes } = useStyles();
  return (
    <footer className={classes.footer}>
      <LogoDark className={classes.logo} />
      <div className={classes.socialSection}>
        {SOCIAL.map((Icon) => (
          <Icon key={Icon.toString()} />
        ))}
      </div>
      <Stack>
        {ANCHORS.map((anchor) => (
          <Text className={classes.anchor} component="a" key={anchor}>
            {anchor}
          </Text>
        ))}
      </Stack>
      <Stack spacing={24} className={classes.final}>
        <CallToAction />
        <Text className={classes.copyright}>
          © Easybank. All Rights Reserved
        </Text>
      </Stack>
    </footer>
  );
};
