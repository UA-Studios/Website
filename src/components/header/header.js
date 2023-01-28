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
        <Typography>Call Us: +92-3157944844</Typography>
        <Typography sx={{ color: "#FF4A17" }}>+92-3157944844</Typography>
        <Typography>Mail Us: support@umeratiqstudio.com</Typography>
        <Typography sx={{ color: "#FF4A17" }}>
          support@umeratiqstudio.com
        </Typography>
      </Container>
    </AppBar>
  );
}
export default Header;
