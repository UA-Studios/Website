import React from "react";
import LandingImage from "../../components/landingImage/landingImage";
import { LandingCardImg } from "../../data";
import ServicesCard from "./components/services";
import Portfolio from "./components/portfolio";
import Working from "./components/working";
import VideoType from "./components/videoType";
import Stats from "./components/statsReviews";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { homepage } from "../../data";
// import { image, text } from "../../data";
// import "./home.scss";

const Home = () => {
  return (
    <React.Fragment>
      <Grid
        sx={{
          position: "absolute",
          marginTop: "20px",
        }}
        direction="row"
        container
      >
        <Button
          sx={{ width: "50px", height: "50px", borderRadius: "50%" }}
          variant="contained"
        >
          <PlayArrowIcon />
        </Button>
        <Typography>see how it works</Typography>
      </Grid>
      <LandingImage image={LandingCardImg} sx={{}} />
      <Box
        sx={{
          maxWidth: "95vw",
        }}
        className="home_root"
      >
        <ServicesCard />
        <Portfolio />
        <Working
          leftCard={homepage.working.leftCard}
          centerImg={homepage.working.centerCard}
          rightCard={homepage.working.rightCard}
        />
        <VideoType
          headerText={homepage.videoType.headerText}
          card={homepage.videoType.card}
        />
        <Stats
          headerText={homepage.stats.headerText}
          card={homepage.stats.card}
          clientText={homepage.clients.headerText}
          logo={homepage.clients.logo}
          reviewText={homepage.reviews.headerText}
          review={homepage.reviews.review}
        />
      </Box>
    </React.Fragment>
  );
};

export default Home;
