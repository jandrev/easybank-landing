import { createStyles, Stack, Title } from "@mantine/core";

import ArticleCard from "./ArticleCard";
import { DATA } from "./ArticleData";

const useStyles = createStyles((theme) => ({
  container: {
    padding: "88px 24px",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: theme.other.weights.sm,
    textAlign: "center",
    color: theme.other.primaryPalette.darkBlue,
  },
}));

export const Articles = () => {
  const { classes } = useStyles();
  return (
    <Stack spacing={31} className={classes.container}>
      <Title className={classes.title}>Latest Articles</Title>
      <Stack spacing={24}>
        {DATA.map((feature) => (
          <ArticleCard {...feature} key={feature.title} />
        ))}
      </Stack>
    </Stack>
  );
};
