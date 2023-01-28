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
            <Card
              sx={
                p.id == 1
                  ? { width: "560px", height: "315px" }
                  : { width: "366.66px", height: "206.23px" }
              }
            >
              <iframe
                src={p.link}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                width="100%"
                height="100%"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        direction="column"
        sx={{
          margin: "2px",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "2%",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontSize: "30px" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {portfolioFooter}
        </Typography>
        <Button
          sx={{ width: "15%", marginLeft: "6%", marginTop: "1%" }}
          variant="outlined"
          startIcon={<YouTubeIcon />}
        >
          {portfolioFooterBtnText}
        </Button>
      </Grid>
    </div>
  );
};

export default Portfolio;
