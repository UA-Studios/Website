import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Box,
  CardContent,
} from "@mui/material";

const VideoType = (props) => {
  return (
    <div className="home_root">
      <Typography
        sx={{ textAlign: "center", fontSize: "42px" }}
        gutterBottom
        variant="h5"
        component="div"
      >
        {props.headerText}
      </Typography>
      <Grid container spacing={2}>
        {props.card?.map((p, i) => (
          <Grid key={i} item xs={4}>
            <div
              sx={{
                border: "none",
                margin: "10px",
                minWdith: "320px",
                minHeight: "140px",
              }}
            >
              <CardMedia
                component="img"
                // sx={{
                //   width: "40px",
                //   height: "40px",
                //   marginTop: "30px",
                //   marginLeft: "10px",
                // }}
                // position="center"
                image={p.image}
                // alt="Live from space album cover"
              />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {p.headerText}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {p.SubText}
                  </Typography>
                </CardContent>
              </Box>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default VideoType;
