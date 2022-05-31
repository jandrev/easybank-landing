import CallToAction from "common/CallToAction";
import Image from "next/image";

import HeroImage from "@assets/images/image-mockups.png";
import { HeroDesktop, HeroMobile } from "@assets/react-images";
import { createStyles, Stack, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  textContainer: {
    padding: "0px 24px",
    alignItems: "center",
  },
  heroContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    overflow: "hidden",
    maxHeight: "100%",
  },
  heroBackground: {
    position: "absolute",
    width: "100%",
  },
  heroImage: {
    marginTop: -40,
  },
  centeredText: {
    textAlign: "center",
  },
  title: {
    fontWeight: theme.other.weights.sm,
    color: theme.other.primaryPalette.darkBlue,
    fontSize: 40,
  },
  description: {
    fontWeight: theme.other.weights.md,
    color: theme.other.secondaryPalette.grayishBlue,
  },
}));

export const Hero = () => {
  const { classes, cx } = useStyles();
  return (
    <Stack>
      <div className={classes.heroContainer}>
        <HeroMobile className={classes.heroBackground} />
        <div className={classes.heroImage}>
          <Image src={HeroImage} width={327} height={402} />
        </div>
      </div>
      <Stack spacing={16} className={classes.textContainer}>
        <Title className={cx(classes.title, classes.centeredText)}>
          Next generation digital banking
        </Title>
        <Text className={cx(classes.description, classes.centeredText)}>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Text>
        <CallToAction mt={16} />
      </Stack>
    </Stack>
  );
};
