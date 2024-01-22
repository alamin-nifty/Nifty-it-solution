import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles()((theme) => ({
  root: {
    background: "#F0F4F7",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4, 8),
    display: "grid",
    gap: theme.spacing(7),
    alignItems: "center",
    justifyContent: "center",
    gridTemplateColumns: "3fr 1fr",
    boxShadow: theme.shadows[4],
    border: `2px solid ${"#458FCD"}`,
    margin: theme.spacing("auto", "auto"),
  },
  // firstContainer: {
  //   flexGrow: 1,
  // },
  heading: {
    color: "#458FCD",
    fontWeight: 500,
    padding: theme.spacing(1, 0),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === "rtl" ? "transform: rotate(180deg)" : "none",
  },
}));

function CustomFlyer() {
  const { t } = useTranslation("common");
  const { classes } = useStyles();
  const theme = useTheme();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Box className={classes.firstContainer}>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          className={classes.heading}
        >
          {t("agency-landing.flyer_title")}
        </Typography>
        <Typography variant="body1">
          {t("agency-landing.flyer_subtitle")}
        </Typography>
      </Box>
      <Button variant="contained" size="large" className={classes.button}>
        {t("agency-landing.banner_button")}
        <SendIcon className={classes.icon} />
      </Button>
    </Container>
  );
}

export default CustomFlyer;
