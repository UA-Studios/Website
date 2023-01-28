import {
  Grid,
  Typography,
  Card,
  Box,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import {
  contactGetInTouch,
  contactGetInTouchSubtext,
  contactList,
  contactArt,
} from "../../../data";
import RoomIcon from "@mui/icons-material/Room";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";

const Address = (props) => {
  return (
    <Grid sx={props.sx} container spacing={2}>
      <Grid sx={{ position: "center" }} xs={7}>
        <img width={"100%"} src={contactArt} />
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
          <div
            style={{ display: "flex", margin: "10px", border: "none" }}
            key={i}
          >
            <IconButton
              sx={{
                marginLeft: "5px",
                marginTop: "5%",
                "&:hover": {
                  backgroundColor: "lighGray",
                },
              }}
              variant="contained"
            >
              <img style={{ width: "50px", height: "50px" }} src={c.icon} />
            </IconButton>
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
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default Address;
