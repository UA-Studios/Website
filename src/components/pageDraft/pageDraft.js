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
    <div>
      <LandingImage image={props.image} />
      <Grid
        sx={{ margin: "auto", maxWidth: "95%", justifyContent: "center" }}
        container
        spacing={2}
      >
        <Grid sx={{ padding: "10px" }} xs={6}>
          {props.grid1Header ? (
            <Typography gutterBottom variant="h4" component="div">
              {props.grid1Header}
            </Typography>
          ) : null}
          <Typography variant="body2" color="text.secondary">
            {props.grid1SubText}
          </Typography>
        </Grid>
        <Grid sx={{ padding: "10px" }} xs={6}>
          <Card>
            {props.grid1Link ? (
              <iframe
                width="675 "
                height="380"
                src={props.grid1Link}
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            ) : (
              <img
                style={{ margin: "auto" }}
                width="600 "
                height="400"
                src={props.grid1Img}
              />
            )}
          </Card>
        </Grid>
      </Grid>
      {(props.grid2Link && props.grid2SubText) || props.grid1Img ? (
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
            <Card>
              {props.grid2Link ? (
                <iframe
                  width="675 "
                  height="380"
                  src={props.grid2Link}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              ) : (
                <img
                  style={{ margin: "auto" }}
                  width="600 "
                  height="400"
                  src={props.grid2Img}
                />
              )}
            </Card>
          </Grid>
          <Grid sx={{ padding: "10px" }} xs={6}>
            <Typography variant="body2" color="text.secondary">
              {props.grid2SubText}
            </Typography>
          </Grid>
        </Grid>
      ) : null}

      <LandingImage image={common_1} />
      <Grid sx={{ justifyContent: "center" }} container spacing={2}>
        <Typography
          sx={{
            margin: "auto",
            marginTop: "6%",
            marginBottom: "2%",
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
        <Grid
          container
          sx={{ maxWidth: "95%", justifyContent: "center" }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {props.explainervids?.map((e, i) => (
            <React.Fragment>
              <Typography
                sx={{
                  margin: "auto",
                  marginTop: "2%",
                  marginBottom: "2%",
                  flexGrow: 1,
                  textAlign: "center",
                }}
                // align="center"
                gutterBottom
                variant="h4"
                component="div"
              >
                {e.title}
              </Typography>
              <Grid
                container
                sx={{ maxWidth: "95%", justifyContent: "center" }}
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 2 }}
              >
                {e.links?.map((l, i) => (
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
                {e.imgs?.map((i, k) => (
                  <Grid key={k} item xs={3}>
                    <Card>
                      <img width={300} height={150} src={i.img} />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
      <LandingImage sx={{ marginTop: "2%" }} image={common_2} />
      <Typography
        sx={{
          margin: "auto",
          marginTop: "2%",
          marginBottom: "2%",
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
        <Accordion
          sx={{
            width: "80%",
            left: "50%",
            transform: "translate(-50%)",
          }}
          key={i}
        >
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
