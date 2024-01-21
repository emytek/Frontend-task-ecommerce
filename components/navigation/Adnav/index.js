import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Link,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const textStyle = {
  color: "#FFF",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "24px",
  letterSpacing: ".2px",
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#23856D",
    width: "100%", // Make the navbar take full width
    height: 58,
    maxWidth: 1440,
    display: "none", // Hide on mobile devices
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Space between the three sections
  },
  textA: {
    marginRight: theme.spacing(2),
    ...textStyle,
  },
  middleSection: {
    flex: 1,
    textAlign: "center",
    ...textStyle,
  },
  socialIcons: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
  socialText: {
    marginLeft: theme.spacing(1),
    ...textStyle,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar>
          {/* First Section */}
          <div className={classes.section}>
            <div className={classes.textA}>
              <Typography variant="body1">Text A</Typography>
            </div>
            <Typography variant="body1">Test B</Typography>
          </div>

          {/* Second Section */}
          <div className={classes.middleSection}>
            <Typography variant="body1">
              Long Text in the Second Section
            </Typography>
          </div>

          {/* Third Section */}
          <div className={classes.socialIcons}>
            <Typography variant="body1" className={classes.socialText}>
              Follow us
            </Typography>
            <Typography
              variant="body1"
              className={classes.socialText}
              component={Link}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Typography>
            <Typography
              variant="body1"
              className={classes.socialText}
              component={Link}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Typography>
            <Typography
              variant="body1"
              className={classes.socialText}
              component={Link}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
