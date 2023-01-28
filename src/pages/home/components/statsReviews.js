import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Carousel from "nuka-carousel";

const Stats = (props) => {
  return (
    <React.Fragment>
      <Typography
        sx={{ textAlign: "center", fontSize: "42px", marginBottom: "5%" }}
        gutterBottom
        variant="h5"
        component="div"
      >
        {props.headerText}
      </Typography>
      <Grid
        sx={{
          backgroundColor: "#13202B",
          marginLeft: "8%",
          borderRadius: "4px",
          width: "1160px",
          height: "253px",
        }}
        container
        spacing={2}
      >
        {props.card?.map((s, i) => (
          <Grid sx={{ marginTop: "5%" }} key={i} item xs={3}>
            <Typography
              sx={{ textAlign: "center", fontSize: "42px", color: "#FF4A17" }}
              gutterBottom
              variant="h4"
              component="div"
            >
              {s.headerText}
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontSize: "22px", color: "#FFFFFF" }}
              variant="body2"
              color="text.secondary"
            >
              {s.SubText}
            </Typography>
          </Grid>
        ))}

        <Box
          sx={{
            marginTop: "5%",
            // marginLeft: "4%",
          }}
        >
          <Typography
            sx={{
              marginTop: "40px",
              textAlign: "center",
              fontSize: "42px",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.clientText}
          </Typography>

          <Box sx={{ width: "100%" }}>
            <Carousel autoplay={true} slidesToShow={3}>
              {props.logo?.map((p, i) => (
                <img key={i} width="50%" src={p.logo} alt="" />
              ))}
            </Carousel>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "5%",
            marginLeft: "6%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "42px",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.reviewText}
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Carousel autoplay={true}>
              {props.review?.map((p, i) => (
                <img key={i} width="100%" src={p.review} alt="" />
              ))}
            </Carousel>
          </Box>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default Stats;
