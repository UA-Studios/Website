import * as React from "react";
import { AppBar, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { navbar } from "../../data";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "white" }} position="static">
        <Toolbar>
          <Link sx={{ flexGrow: 1 }} href="/">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={navbar.logo} width="120px" />
            </IconButton>
          </Link>

          {navbar.menuNames.map((n, i) => (
            <Link href="#" key={i}>
              <Button sx={{ color: "black" }}>{n.name}</Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
