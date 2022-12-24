import {
  Grid,
  Typography,
  Card,
  CardMedia,
  Box,
  CardContent,
} from "@mui/material";
import React from "react";
import LandingImage from "../../components/landingImage/landingImage";
import {
  contactLandingImg,
  contactGetInTouch,
  contactGetInTouchSubtext,
  contactList,
  contactArt,
} from "../../data";
import RoomIcon from "@mui/icons-material/Room";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";

const ContactUS = () => {
  return (
    <div className="home_root">
      <LandingImage image={contactLandingImg} />
      <Grid container spacing={2}>
        <Grid xs={7}>
          <img src={contactArt} />
        </Grid>
        <Grid xs={5}>
          <Typography
            sx={{ textAlign: "center", fontSize: "42px" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {contactGetInTouch}
          </Typography>
          <Typography
            sx={{ textAlign: "left", fontSize: "22px" }}
            gutterBottom
            variant="body2"
            color="text.secondary"
          >
            {contactGetInTouchSubtext}
          </Typography>

          {contactList?.map((c, i) => (
            <Card sx={{ display: "flex", margin: "10px" }} key={i}>
              {c.icon == 1 ? (
                <RoomIcon />
              ) : c.icon == 2 ? (
                <AlternateEmailIcon />
              ) : (
                <CallIcon />
              )}

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {c.header}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {c.subText}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactUS;
