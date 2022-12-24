import React from "react";
import { Card, Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

const LandingImage = (props) => {
  return (
    <Box sx={props.sx} className="LandingCard_root">
      <Card>
        <CardMedia
          component="img"
          //   height="140"
          image={props.image}
          alt="green iguana"
        />
      </Card>
    </Box>
  );
};

export default LandingImage;
