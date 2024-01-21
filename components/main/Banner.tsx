import React from "react";
import { Grid, Paper, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

interface BannerProps {}

const useStyles = makeStyles<Theme>((theme) => ({
  banner: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  imageCard: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));

const Banner: React.FC<BannerProps> = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3} className={classes.banner}>
        {/* First Section */}
        <Grid item xs={12} md={6}>
          <Paper>
            {/* Image Card for First Section */}
            <img
              src="/path/to/first-section-image.jpg"
              alt="First Section"
              className={classes.imageCard}
            />
          </Paper>
        </Grid>

        {/* Second Section */}
        <Grid item xs={12} md={6} container>
          {/* Subsection A */}
          <Grid item xs={12} md={6}>
            <Paper>
              {/* Image Card for Subsection A */}
              <img
                src="/path/to/subsection-a-image.jpg"
                alt="Subsection A"
                className={classes.imageCard}
              />
            </Paper>
          </Grid>

          {/* Subsection B */}
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12}>
                <Paper>
                  {/* Image Card for Subsection B - First Card */}
                  <img
                    src="/path/to/subsection-b-image-1.jpg"
                    alt="Subsection B"
                    className={classes.imageCard}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  {/* Image Card for Subsection B - Second Card */}
                  <img
                    src="/path/to/subsection-b-image-2.jpg"
                    alt="Subsection B"
                    className={classes.imageCard}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
