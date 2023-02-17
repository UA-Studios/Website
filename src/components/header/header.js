import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import ContactUS from "../../pages/contactUS/contactUS";

function Header() {
  return (
    <AppBar
      sx={{ backgroundColor: "#13202B", height: "35px" }}
      position="static"
    >
      <Container sx={{ display: "flex" }} maxWidth="xl">
        <div style={{ display: "inherit" }}>
          <Typography>Call Us: </Typography>
          <Typography sx={{ color: "#FF4A17" }}>+92-3157944844</Typography>
        </div>
        <div
          style={{ display: "inherit", marginLeft: "auto", marginRight: "0" }}
        >
          <Typography>Mail Us: </Typography>
          <Typography sx={{ color: "#FF4A17" }}>
            support@umeratiqstudio.com
          </Typography>
        </div>
      </Container>
    </AppBar>
  );
}
export default Header;
