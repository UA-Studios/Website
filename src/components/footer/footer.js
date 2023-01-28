import React from "react";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import { navbar } from "../../data";

const Footer = () => {
  return (
    <React.Fragment>
      <Grid
        sx={{
          backgroundColor: "#13202B",
          borderRadius: "4px",
        }}
        container
        spacing={2}
      >
        <Grid sx={{ marginTop: "5%" }} item xs={3}>
          <Link sx={{ flexGrow: 1 }} href="/">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ marginLeft: "30%", mr: 2 }}
            >
              <img src={navbar.logo} width="120px" />
            </IconButton>
          </Link>
          <Typography
            sx={{ textAlign: "center", fontSize: "42px", color: "#FF4A17" }}
            gutterBottom
            variant="h4"
            component="div"
          >
            {/* {s.headerText} */}
            hello
          </Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{
          backgroundColor: "#0E0D0D",
          borderRadius: "4px",
          // width: "1160px",
          height: "50px",
          // flex: "0 0 50px",
          // marginTop: "100vh",
        }}
        container
        direction="row"
        spacing={2}
      >
        <Grid sx={{ marginLeft: "120px" }} item>
          <Typography
            sx={{ textAlign: "center", fontSize: "20px", color: "#FFFFFF" }}
            gutterBottom
            variant="h4"
            component="div"
          >
            Copyright © 2022 | UA Studios All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
