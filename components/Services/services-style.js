import { alpha, lighten } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import imgApi from "~/public/images/imgAPI";

const useStyles = makeStyles({ uniqId: "services" })(
  (theme, _params, classes) => ({
    root: {
      background:
        theme.palette.mode === "dark"
          ? alpha(theme.palette.primary.dark, 0.4)
          : lighten("#8fbce1", 0.1),
      padding: theme.spacing(10, 0),
      position: "relative",
      [theme.breakpoints.down("lg")]: {
        padding: theme.spacing(15, 0, 10),
      },
    },
    title: {
      left: 0,
    },
    puzzle: {
      position: "relative",
      left: 120,
      top: -30,
      "& > div": {
        transform: "rotate(45deg)",
        overflow: "hidden",
        position: "absolute",
        background: "#dedede",
      },
      "& span": {
        background: `url(${imgApi.agency[1]}) no-repeat fixed`,
        backgroundSize: "auto 800px",
        transform: "rotate(-45deg)",
        width: 600,
        height: 1000,
        display: "block",
        position: "relative",
        top: -110,
        left: 0,
      },
    },
    pieceBig: {
      width: 390,
      height: 120,
      top: -140,
      left: 50,
      borderRadius: 32,
    },
    pieceSmallTop: {
      width: 120,
      height: 120,
      borderRadius: 24,
      top: 60,
      left: 185,
    },
    pieceSmallBottom: {
      width: 120,
      height: 120,
      borderRadius: 24,
      top: 155,
      left: 90,
    },
    carouselHandle: {
      height: 380,
      position: "relative",
      width: "100%", // Set width to half of the parent to take right side
      right: -200, // Align to the right
      top: 0,
      zIndex: 10,
    },
    carouselWrap: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      width: "100%",
      overflow: "hidden",
    },
    item: {
      "&:focus": {
        outline: "none",
      },
    },
    carouselProp: {
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
      "& div": {
        width: theme.direction === "rtl" ? 500 : 300,
      },
    },
    tile: {
      position: "relative",
      top: 30,
      left: 50,
    },
    floatingTitle: {
      position: "absolute",
      width: "100%",
      // width: "50%",
      left: 0,
      top: theme.spacing(5),
      [theme.breakpoints.up("lg")]: {
        left: theme.spacing(-4),
        top: theme.spacing(2),
      },
      [theme.breakpoints.up(1400)]: {
        left: theme.spacing(10),
      },
      [`& .${classes.title}`]: {
        [theme.breakpoints.up("md")]: {
          marginRight: theme.spacing(5),
        },
        [theme.breakpoints.up("lg")]: {
          float: "right",
        },
        [theme.breakpoints.up(1400)]: {
          marginRight: theme.spacing(-5),
        },
      },
    },
    // arrow: {
    //   direction: theme.direction === "rtl" ? "rtl" : "ltr",
    //   marginTop: theme.direction === "rtl" ? 160 : 140,
    //   right: theme.direction === "rtl" ? 160 : 0,
    //   position: "relative",
    //   zIndex: 10,
    //   "& button": {
    //     background: theme.palette.background.paper,
    //     margin: theme.spacing(0.5),
    //     color:
    //       theme.palette.mode === "dark"
    //         ? theme.palette.primary.light
    //         : theme.palette.primary.dark,
    //   },
    //   [theme.breakpoints.down(1280)]: {
    //     display: "none",
    //   },
    //   [theme.breakpoints.down("lg")]: {
    //     display: "none",
    //     marginTop: 560,
    //   },
    // },
  })
);

export default useStyles;
