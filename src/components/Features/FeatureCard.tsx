import { Text, useMantineTheme } from "@mantine/core";
import React, { SVGProps } from "react";
import { createStyles } from "@mantine/core";

export interface FeatureProps {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: React.ReactNode;
  description: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  icon: {
    width: 72,
    height: 72,
    background: theme.fn.linearGradient(
      60,
      theme.other.primaryPalette.limeGreen,
      theme.other.primaryPalette.lightCyan
    ),
    borderRadius: "100%",
  },
  centered: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: theme.other.weights.sm,
    color: theme.other.primaryPalette.darkBlue,
    marginTop: "24px",
  },
  featureDescription: {
    fontSize: 15,
    fontWeight: theme.other.weights.md,
    color: theme.other.secondaryPalette.grayishBlue,
    marginTop: "16px",
  },
  centeredText: {
    textAlign: "center",
  },
}));

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.centered}>
      <Icon className={classes.icon} />
      <Text className={cx(classes.centeredText, classes.featureTitle)}>
        {title}
      </Text>
      <Text className={cx(classes.centeredText, classes.featureDescription)}>
        {description}
      </Text>
    </div>
  );
}
export default Feature;
