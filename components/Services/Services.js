import React, { useEffect, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import Carousel from "react-slick";
import PrevIcon from "@mui/icons-material/ArrowBack";
import NextIcon from "@mui/icons-material/ArrowForward";
import TitleDeco from "../Title/WithDecoration";
import { useTranslation } from "next-i18next";
import desktop from "~/public/images/services/desktop.svg";
import smartPhone from "~/public/images/services/smartphone.svg";
import advice from "~/public/images/services/advice.svg";

import useStyles from "./services-style";
import TitleIcon from "../Title/WithIcon";
import Card from "../Cards/Default";
import DotsParallax from "../Parallax/Dots";

const servicesList = [
  {
    title: "Software Development",
    desc: "A software development company with over 5 years of experience, we are committed to creating reliable, scalable, and secure software solution",
    img: desktop,
  },
  {
    title: "Mobile App Development",
    desc: "At Nifty IT Solution, we leverage years of expertise to deliver mobile solutions that cater precisely to your business needs and market demands.",
    img: smartPhone,
  },
  {
    title: "Outsourcing/Advisory",
    desc: "Nifty Bookkeepers LLC, a subsidiary of Nifty IT Solution, excels in Outsourcing/Advisory. From meticulous bookkeeping and seamless XERO/QuickBooks transitions to cloud-based systems, our team ensures financial order.",
    img: advice,
  },
  // {
  //   title: "Lorem Ipsum",
  //   desc: "Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.",
  //   img: imgApi.agency[2],
  // },
  // {
  //   title: "Etiam rhoncus",
  //   desc: "Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.",
  //   img: imgApi.agency[3],
  // },
  // {
  //   title: "Duis fermentum",
  //   desc: "Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.",
  //   img: imgApi.agency[4],
  // },
];

function Services() {
  const { t } = useTranslation("common");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { classes } = useStyles();
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (theme.direction === "ltr" && window.innerWidth > 1200) {
      const limit = window.innerWidth > 1400 ? 3 : 2;
      const lastSlide = Math.floor(servicesList.length - limit);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Container fixed>
          <div>
            <TitleIcon extended />
            <div className={classes.tile}>
              <TitleDeco text={t("agency-landing.services_title")} />
            </div>
            {isDesktop && (
              <div className={classes.puzzle}>
                <div className={classes.pieceBig}>
                  <span />
                </div>
                <div className={classes.pieceSmallTop}>
                  <span />
                </div>
                <div className={classes.pieceSmallBottom}>
                  <span />
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      <div className={classes.carouselHandle}>
        <DotsParallax />
        <div className={classes.carouselWrap}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )}
            {servicesList.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <Card
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  button={t("agency-landing.services_button")}
                />
              </div>
            ))}
            {/* {isDesktop && (
              <div className={classes.item}>
                <div className={classes.carouselProp}>
                  <div />
                </div>
              </div>
            )} */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Services;
