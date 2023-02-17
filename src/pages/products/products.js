import React from "react";
import LandingImage from "../../components/landingImage/landingImage";
import { Grid, Card, Typography } from "@mui/material";
import { about } from "../../data";

const Products = () => {
  return (
    <div>
      <LandingImage image={about.image} />
      <Grid
        sx={{ margin: "auto", maxWidth: "95%", justifyContent: "center" }}
        container
        spacing={2}
      >
        <Grid sx={{ padding: "10px" }} xs={6}>
          {/* <Card> */}
          <img
            style={{ margin: "auto" }}
            width="600 "
            height="400"
            src={about.rightimg}
          />
          {/* </Card> */}
        </Grid>
        <Grid sx={{ padding: "10px" }} xs={6}>
          <Typography gutterBottom variant="h4" component="div">
            ANIMATION
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our animation services offer top-quality, visually engaging content
            for your brand. From character design to full-length animated
            videos, our team of experts bring your ideas to life. We specialize
            in 2D and 3D animation, motion graphics, explainer videos, and more.
            Our process includes storyboarding, voice-over recording, sound
            design, and final post-production. Let us help you effectively
            communicate your message and captivate your audience.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{
          margin: "auto",
          maxWidth: "95%",
          justifyContent: "center",
        }}
        container
        spacing={2}
      >
        <Grid sx={{ padding: "10px" }} xs={6}>
          <Typography gutterBottom variant="h4" component="div">
            GRAPHIC DESIGNING
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our graphic design services provide visually stunning, effective
            solutions for your brand. From logos and marketing materials to
            website design and packaging, our team of expert graphic designers
            create eye-catching designs that effectively communicate your
            message. We specialize in a range of design services including
            branding, print design, digital design, and packaging design. Our
            process includes research, conceptualization, and revisions to
            ensure your complete satisfaction with the final product. Let us
            help you make a lasting impression with impactful, memorable graphic
            design.
          </Typography>
        </Grid>
        <Grid sx={{ padding: "10px" }} xs={6}>
          <Card>
            <img width="675 " height="380" src={about.rightimg} />
          </Card>
        </Grid>
      </Grid>
      <Grid
        sx={{ margin: "auto", maxWidth: "95%", justifyContent: "center" }}
        container
        spacing={2}
      >
        <Grid sx={{ padding: "10px" }} xs={6}>
          {/* <Card> */}
          <img
            style={{ margin: "auto" }}
            width="600 "
            height="400"
            src={about.rightimg}
          />
          {/* </Card> */}
        </Grid>
        <Grid sx={{ padding: "10px" }} xs={6}>
          <Typography gutterBottom variant="h4" component="div">
            GAME DEVELOPMENT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our game development services bring your creative visions to life.
            Our team of experienced game developers use cutting-edge technology
            to craft immersive and interactive gaming experiences. We specialize
            in the development of mobile, PC, and console games across various
            genres, including action, adventure, sports, strategy, and more. Our
            services include game design, programming, 2D/3D art creation, and
            QA testing to deliver a polished, high-quality product. Let us help
            you take your game to the next level.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        sx={{
          margin: "auto",
          maxWidth: "95%",
          justifyContent: "center",
        }}
        container
        spacing={2}
      >
        <Grid sx={{ padding: "10px" }} xs={6}>
          <Typography gutterBottom variant="h4" component="div">
            WEB DEVELOPMENT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our website design and development services create a professional,
            user-friendly online presence for your brand. Our team of
            experienced designers and developers work together to create a
            custom website that meets your specific needs and goals. We
            specialize in responsive website design, e-commerce development, and
            custom website development. Our services include website planning,
            design, development, and ongoing website maintenance to ensure a
            seamless user experience. Let us help you create a website that
            effectively showcases your brand and drives results.
          </Typography>
        </Grid>
        <Grid sx={{ padding: "10px" }} xs={6}>
          <Card>
            <img width="675 " height="380" src={about.rightimg} />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Products;
