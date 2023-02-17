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
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { navbar } from "../../data";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: "white" }} position="static">
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Link sx={{ width: "50%" }} href="/">
                <img src={navbar.logo} width="120px" />
              </Link>
            </IconButton>
          </div>
          {navbar.menuNames.map((n, i) => (
            <React.Fragment>
              {n.services ? (
                <div
                  // onClick={() => setIsOpen(true)}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
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
                            style={{
                              listStyle: "none",
                              // display:"block"
                            }}
                            // onClick={() => setIsSubOpen(true)}
                            onMouseEnter={() => setIsSubOpen(true)}
                            // onMouseLeave={() => setIsSubOpen(false)}
                            key={i}
                          >
                            <li>
                              {s.link ? (
                                <Typography>
                                  <Link
                                    sx={{ textDecoration: "none" }}
                                    href={s.link}
                                  >
                                    {s.name}
                                  </Link>
                                </Typography>
                              ) : (
                                <Typography>{s.name}</Typography>
                              )}
                              {isSubOpen ? (
                                <Card
                                  sx={{
                                    position: "absolute",
                                    marginLeft: "80%",
                                    width: "110%",
                                  }}
                                >
                                  {s.subServices?.map((s, i) => (
                                    <ul key={i} style={{ display: "contents" }}>
                                      <Link
                                        sx={{ textDecoration: "none" }}
                                        href={s.link}
                                      >
                                        <Typography
                                          sx={{
                                            textAlign: "left",
                                            marginLeft: "7%",
                                          }}
                                        >
                                          {s.name}
                                        </Typography>
                                      </Link>
                                    </ul>
                                  ))}
                                </Card>
                              ) : null}
                            </li>
                          </ul>
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Button sx={{ color: "black" }}>
                  <Link sx={{ textDecoration: "none" }} href={n.link} key={i}>
                    {n.name}
                  </Link>
                </Button>
              )}
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
