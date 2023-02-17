import React from "react";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import { navbar, footer } from "../../data";

const Footer = () => {
  return (
    <React.Fragment>
      <Grid
        sx={{
          backgroundColor: "#13202B",
          borderRadius: "4px",
          width: "100%",
          margin: "auto",
          marginTop: "5%",
        }}
        container
        spacing={2}
      >
        <Grid sx={{ marginTop: "2%", marginBottom: "5%" }} item xs={3}>
          <Link sx={{ flexGrow: 1, textDecoration: "none" }} href="/">
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
            sx={{
              textAlign: "center",
              fontSize: "12px",
              color: "#FF4A17",
              marginBottom: "10%",
              width: "70%",
              marginLeft: "auto",
              marginTop: "5%",
            }}
            gutterBottom
            variant="h4"
            component="div"
          >
            {/* {s.headerText} */}
            Simplifying the complex, visually. Let us explain it for you!
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: "2%", marginBottom: "5%" }} container xs={9}>
          {footer.services?.map((f, i) => (
            <>
              <Grid key={i} item xs={3}>
                <>
                  <Link
                    sx={{ flexGrow: 1, textDecoration: "none" }}
                    href={f.link}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#FF4A17",
                        width: "70%",
                        marginLeft: "auto",
                      }}
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      {f.name}
                    </Typography>
                  </Link>
                </>
                {f.subServices?.map((f, i) => (
                  <Link
                    key={i}
                    sx={{ flexGrow: 1, textDecoration: "none" }}
                    href={f.link}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#FF4A17",
                        // marginBottom: "10%",
                        width: "70%",
                        marginLeft: "auto",
                        // marginTop: "5%",
                      }}
                      gutterBottom
                      variant="h4"
                      component="div"
                    >
                      {f.name}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            </>
          ))}
          {footer.newServices?.map((f, i) => (
            <>
              <Grid key={i} item xs={3}>
                {f.link ? (
                  <>
                    <Link
                      sx={{ flexGrow: 1, textDecoration: "none" }}
                      href={f.link}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          color: "#FF4A17",
                          width: "70%",
                          marginLeft: "auto",
                        }}
                        gutterBottom
                        variant="h4"
                        component="div"
                      >
                        {f.name}
                      </Typography>
                    </Link>
                  </>
                ) : null}
              </Grid>
            </>
          ))}
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
