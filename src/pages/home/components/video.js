import React from "react";
import { Typography, Grid, Card } from "@mui/material";
import { workingHeader } from "../../../data";

const Video = () => {
  return (
    <div className="home_root">
      <Typography
        sx={{ textAlign: "center", fontSize: "42px" }}
        gutterBottom
        variant="h5"
        component="div"
      >
        {workingHeader}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card>
            <Typography variant="h5">hello</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Typography variant="h5">hello</Typography>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <Typography variant="h5">hello</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Video;
