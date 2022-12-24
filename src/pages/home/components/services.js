import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { service } from "../../../data";

const ServicesCard = () => {
  const theme = useTheme();
  return (
    <Card sx={{ display: "flex", margin: "10px" }}>
      {service?.map((s, i) => (
        <React.Fragment key={i}>
          <CardMedia
            component="img"
            sx={{ width: 100, height: 100 }}
            image={s.image}
            // alt="Live from space album cover"
          />

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography gutterBottom variant="h5" component="div">
                {s.headerText}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {s.SubText}
              </Typography>
            </CardContent>
          </Box>
        </React.Fragment>
      ))}
    </Card>
  );
};
export default ServicesCard;
