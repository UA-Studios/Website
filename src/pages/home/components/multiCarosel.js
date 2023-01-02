import React from "react";
import Carousel from "nuka-carousel";
import { Box } from "@mui/material";

const MultiCarosel = (props) => {
  return (
    <Box sx={{ width: "50%" }}>
      <Carousel autoplay={true} slidesToShow={3}>
        {props.src?.map((p, i) => (
          <img key={i} width="50%" src={p.src} />
        ))}
      </Carousel>
    </Box>
  );
};
export default MultiCarosel;
