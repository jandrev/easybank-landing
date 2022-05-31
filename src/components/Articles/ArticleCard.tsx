import { Title, Text, Stack, createStyles } from "@mantine/core";
import Image from "next/image";
import { StaticImageData } from "next/image";

const useStyles = createStyles((theme) => ({
  card: {},
  authorText: {
    fontSize: 10,
    color: theme.other.secondaryPalette.grayishBlue,
    marginTop: 25,
  },
  textLayout: {
    marginRight: 31,
    marginLeft: 31,
  },
  title: {
    marginTop: 8,
    fontWeight: theme.other.weights.sm,
    fontSize: 16,
    color: theme.other.primaryPalette.darkBlue,
  },
  description: {
    fontWeight: theme.other.weights.md,
    color: theme.other.secondaryPalette.grayishBlue,
    fontSize: 13,
    marginTop: 8,
    marginBottom: 24,
  },
}));

const ArticleCard = ({
  title,
  description,
  author,
  image,
}: {
  title: string;
  description: string;
  author: string;
  image: StaticImageData;
}) => {
  const { classes, cx } = useStyles();
  return (
    <Stack spacing={0} className={classes.card}>
      <Image src={image} width={327} height={200} />
      <Text className={cx(classes.authorText, classes.textLayout)}>
        By {author}
      </Text>
      <Title className={cx(classes.title, classes.textLayout)}>{title}</Title>
      <Text className={cx(classes.description, classes.textLayout)}>
        {description}
      </Text>
    </Stack>
  );
};
export default ArticleCard;
