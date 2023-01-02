import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { service } from "../../../data";
import { Grid } from "@mui/material";

const ServicesCard = () => {
  return (
    <Grid
      sx={{ margin: "10px 0px 0px 0px", display: "flex" }}
      container
      spacing={4}
    >
      {service?.map((s, i) => (
        <Grid Item xs={3} key={i}>
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
              image={s.image}
              // alt="Live from space album cover"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography gutterBottom variant="h6" component="div">
                  {s.headerText}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.SubText}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default ServicesCard;
