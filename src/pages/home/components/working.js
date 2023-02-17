import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  Box,
  CardContent,
  Fade,
  Slide,
} from "@mui/material";
import { workingHeader } from "../../../data";

const Working = (props) => {
  return (
    <div className="home_root">
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "42px",
          marginTop: "2%",
          marginBottom: "5%",
        }}
        gutterBottom
        variant="h5"
        component="div"
      >
        {workingHeader}
      </Typography>
      <Grid sx={{ marginLeft: "1%" }} container spacing={2}>
        <Grid direction="column" xs={4} container>
          {props.leftCard?.map((p, i) => (
            <Grid item key={i} xs={4}>
              <Slide in="true" direction="right" timeout={1500}>
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
              </Slide>
            </Grid>
          ))}
        </Grid>
        <Grid direction="column" xs={4} container>
          <Grid sx={{ marginTop: "10%" }} item xs={4}>
            {/* <Slide in="true" direction="bottom" timeout={1500}> */}
            <img style={{ width: "100%" }} src={props.centerImg} />
            {/* </Slide> */}
          </Grid>
        </Grid>
        <Grid direction="column" xs={4} container>
          {props.rightCard?.map((p, i) => (
            <Grid item xs={4}>
              <Slide in="true" direction="left" timeout={1500}>
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
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Working;
