import React from "react";
import LandingImage from "../../components/landingImage/landingImage";
import { Grid, Card, Typography } from "@mui/material";
import { about } from "../../data";

const AboutUS = () => {
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
            We Work for Your Incredible Success
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Umeratiq Studio is a full-service digital agency with over 6 years
            of experience helping startups, SMEs, and Fortune 500 companies
            achieve their goals. From animation and video production, to website
            design and development, and game development, we have a wide range
            of services to help your business grow and succeed. Our talented
            team of animators, designers, illustrators, and developers work
            closely with each client to understand their unique needs and create
            customized solutions that deliver results.
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            At Umeratiq Studio, we are passionate about helping businesses bring
            their vision to life through creative, engaging digital solutions.
            Our services include Corporate Animated Videos, Explainer Videos,
            Motion Graphics, Wedding Invitations, Funny Animated Videos, website
            design and development, and game development. Whether you're looking
            to create a powerful explainer video, build a stunning website, or
            develop a cutting-edge game, our team has the skills and expertise
            to help you achieve your goals.
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
            Why do you need our services?
          </Typography>
          <Typography variant="body2" color="text.secondary">
            To bring your products, services, and ideas to life in the most
            impactful way possible, on the best possible mediums, and at the
            most competitive rates. We believe that animation and video
            production, website design and development, and game development are
            powerful tools that can help you engage with your audience and
            achieve your business goals. We would love to meet with you and
            discuss your needs over a cup of tea or coffee. If you're far away,
            a call or email will work just as well. Let us help you take your
            business to the next level with innovative, engaging digital
            solutions.
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

export default AboutUS;
