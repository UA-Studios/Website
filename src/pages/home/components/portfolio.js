import React from "react";
import { Card, Typography, Grid, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  portfolio,
  portfolioHeader,
  portfolioFooter,
  portfolioFooterBtnText,
} from "../../../data";
import { Container } from "@mui/system";

const Portfolio = () => {
  return (
    <div className="home_root">
      <Typography
        sx={{ textAlign: "center", fontSize: "42px" }}
        gutterBottom
        variant="h5"
        component="div"
      >
        {portfolioHeader}
      </Typography>
      <Grid
        container
        sx={{ margin: "2px", justifyContent: "center" }}
        spacing={2}
      >
        {portfolio?.map((p, i) => (
          <Grid item key={i}>
            <Card>
              <iframe
                src={p.link}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* <Grid container sx={{ margin: "2px", justifyContent: "center" }}> */}
      <Typography gutterBottom variant="h5" component="div">
        {portfolioFooter}
      </Typography>
      <Button variant="outlined" startIcon={<YouTubeIcon />}>
        {portfolioFooterBtnText}
      </Button>
      {/* </Grid> */}
    </div>
  );
};

export default Portfolio;
