import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Box,
  CardContent,
} from "@mui/material";
import { workingHeader } from "../../../data";

const Working = (props) => {
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
        <Grid direction="column" xs={4} container>
          {props.leftCard?.map((p, i) => (
            <Grid item xs={4}>
              <Card
                sx={{
                  margin: "10px",
                  display: "flex",
                  minWdith: "320px",
                  minHeight: "140px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "40px",
                    height: "40px",
                    marginTop: "30px",
                    marginLeft: "10px",
                  }}
                  position="center"
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
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid direction="column" xs={4} container>
          <Grid item xs={4}>
            <img style={{ width: "100%" }} src={props.centerImg} />
          </Grid>
        </Grid>
        <Grid direction="column" xs={4} container>
          {props.rightCard?.map((p, i) => (
            <Grid item xs={4}>
              <Card
                sx={{
                  margin: "10px",
                  display: "flex",
                  minWdith: "320px",
                  minHeight: "140px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "40px",
                    height: "40px",
                    marginTop: "30px",
                    marginLeft: "10px",
                  }}
                  position="center"
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Working;
