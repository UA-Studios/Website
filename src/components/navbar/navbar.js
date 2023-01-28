import React, { useState } from "react";
import {
  AppBar,
  Link,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Card,
} from "@mui/material";
import { navbar } from "../../data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);

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
            <React.Fragment>
              {n.services ? (
                <div
                  onClick={() => setIsOpen(true)}
                  // onMouseEnter={() => setIsOpen(true)}
                  //   onMouseLeave={() => setIsOpen(false)}
                  style={{
                    display: "inulne-block",
                    position: "relative",
                  }}
                >
                  <Button>{n.name}</Button>
                  {isOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        backgroundColor: "black",
                        left: 0,
                      }}
                    >
                      {n.services.map((s, i) => (
                        <React.Fragment>
                          <ul
                            onClick={() => setIsSubOpen(true)}
                            // onMouseEnter={() => setIsSubOpen(true)}
                            // onMouseLeave={() => setIsSubOpen(false)}
                            key={i}
                          >
                            <Typography>{s.name}</Typography>
                          </ul>
                          <Card sx={{ marginLeft: "50px" }}>
                            {isSubOpen &&
                              s.subServices.map((s, i) => (
                                <Link href={s.link} key={i}>
                                  <ul>
                                    <Typography>{s.name}</Typography>
                                  </ul>
                                </Link>
                              ))}
                          </Card>
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link href={n.link} key={i}>
                  <Button sx={{ color: "black" }}>{n.name}</Button>
                </Link>
              )}
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
