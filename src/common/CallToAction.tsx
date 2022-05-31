import { Button, ButtonProps, createStyles } from "@mantine/core";
import { FC } from "react";

const useStyles = createStyles((theme) => ({
  callToAction: {
    color: theme.white,
    background: theme.fn.linearGradient(
      60,
      theme.other.primaryPalette.limeGreen,
      theme.other.primaryPalette.lightCyan
    ),
    width: 163,
    height: 44,
    borderRadius: 22,
    fontSize: 14,
    fontWeight: theme.other.weights.lg,
    border: 0,
  },
}));

interface CallToActionProps {
  mt?: number;
}

const CallToAction: FC<CallToActionProps> = ({ mt = 0 }) => {
  const { classes } = useStyles();
  return (
    <Button mt={mt} className={classes.callToAction}>
      Request Invite
    </Button>
  );
};
export default CallToAction;
