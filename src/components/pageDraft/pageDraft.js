import React from "react";
import LandingImage from "../landingImage/landingImage";
import {
  Grid,
  Card,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { common_1, common_2 } from "../../data";

const PageDraft = (props) => {
  return (
    <div className="home_root">
      <LandingImage image={props.image} />
      <Grid sx={{ margin: "10px 10px" }} container spacing={2}>
        <Grid sx={{ padding: "10px" }} xs={6}>
          <Typography gutterBottom variant="h4" component="div">
            {props.grid1Header}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.grid1SubText}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Card>
            <iframe
              width="675"
              height="380"
              src={props.grid1Link}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <Card>
            <iframe
              width="675"
              height="380"
              src={props.grid2Link}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
          </Card>
        </Grid>
        <Grid xs={6}>
          <Typography variant="body2" color="text.secondary">
            {props.grid2SubText}
          </Typography>
        </Grid>
      </Grid>
      <LandingImage image={common_1} />
      <Grid container spacing={2}>
        <Typography
          sx={{
            margin: "15px 30px 10px 30px",
            flexGrow: 1,
            textAlign: "center",
          }}
          // align="center"
          gutterBottom
          variant="h4"
          component="div"
        >
          {props.explainertext}
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {props.link?.map((l, i) => (
            <Grid key={i} item xs={3}>
              <Card>
                <iframe
                  src={l.link}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <LandingImage image={common_2} />
      <Typography
        sx={{
          margin: "15px 30px 10px 30px",
          flexGrow: 1,
          textAlign: "center",
        }}
        // align="center"
        gutterBottom
        variant="h4"
        component="div"
      >
        {props.faqText}
      </Typography>
      {props.faq?.map((f, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{f.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{f.details}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PageDraft;
