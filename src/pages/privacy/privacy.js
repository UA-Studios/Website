import React from "react";
import { Box, Typography } from "@mui/material";
import { privacy } from "../../data";

const Privacy = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography>{privacy}</Typography>
    </Box>
  );
};

export default Privacy;
