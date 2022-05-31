import React from "react";

import { createStyles, Stack, Text, Title } from "@mantine/core";

import Feature from "./FeatureCard";
import { DATA } from "./FeaturesData";

const useStyles = createStyles((theme) => ({
  wrapper: {
    alignItems: "center",
    marginTop: "88px",
    padding: "64px 24px",
    backgroundColor: theme.other.secondaryPalette.lightGrayishBlue,
  },

  title: {
    fontSize: 32,
    fontWeight: theme.other.weights.sm,
    color: theme.other.primaryPalette.darkBlue,
  },

  description: {
    fontSize: 15,
    fontWeight: theme.other.weights.md,
    color: theme.other.secondaryPalette.grayishBlue,
    marginTop: "14px",
  },
  features: {},
  centeredText: {
    textAlign: "center",
  },
}));

export function FeaturesGrid() {
  const { classes, cx } = useStyles();
  const features = DATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Stack spacing={56} className={classes.wrapper}>
      <div>
        <Title className={cx(classes.title, classes.centeredText)}>
          Why choose Easybank?
        </Title>
        <Text
          size="sm"
          className={cx(classes.description, classes.centeredText)}
        >
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </Text>
      </div>

      <Stack spacing={32}>{features}</Stack>
    </Stack>
  );
}
