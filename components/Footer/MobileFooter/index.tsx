import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Input,
  Button,
  TextField,
} from "@mui/material";
import { linkStyle, footerTop, mrg } from "../styles/FooterStyles";
import styles from "../styles/mailFooter.module.css";

export default function MobileFooter() {
  return (
    <>
      <Box bgcolor="#FFF" color="white" padding="32px">
        <Grid container direction="column" alignItems="flex-start">
          <Grid item>
            <Box>
              <Typography variant="h6" style={footerTop}>
                Company Info
              </Typography>
              <Typography variant="h6" style={linkStyle}>
                About Us
              </Typography>
              <Typography variant="h6" style={linkStyle}>
                Carrier
              </Typography>
              <Typography variant="h6" style={linkStyle}>
                We are hiring
              </Typography>
              <Typography variant="h6" style={linkStyle}>
                Blog
              </Typography>
            </Box>
          </Grid>
          <Grid item style={{ marginTop: "1.8rem" }}>
            <Box>
              <Typography style={footerTop}>Legal</Typography>
              <Typography style={linkStyle}>About Us</Typography>
              <Typography {...linkStyle}>Carrier</Typography>
              <Typography {...linkStyle}>We are hiring</Typography>
              <Typography {...linkStyle}>Blog</Typography>
            </Box>
          </Grid>
          <Grid item style={{ marginTop: "1.8rem" }}>
            {/* Footer links */}
            <Box>
              <Typography style={footerTop}>Features</Typography>
              <Typography style={linkStyle}>Business Marketing</Typography>
              <Typography {...linkStyle}>User Analytic</Typography>
              <Typography {...linkStyle}>Live Chat</Typography>
              <Typography {...linkStyle}>Unlimited Support</Typography>
            </Box>
          </Grid>
          <Grid item style={{ marginTop: "1.8rem" }}>
            {/* Social media icons */}
            <Box>
              <Typography style={footerTop}>Resources</Typography>
              <Typography style={linkStyle}>IOS & Android</Typography>
              <Typography {...linkStyle}>Watch a Demo</Typography>
              <Typography {...linkStyle}>Customers</Typography>
              <Typography {...linkStyle}>API</Typography>
            </Box>
          </Grid>
          <Grid item style={{ marginTop: "1.8rem" }}>
            {/* Input form with button */}
            <Box width="100%">
              <Box display="flex" flexDirection="column" alignItems="flex">
                <Typography style={footerTop} whiteSpace="nowrap">
                  Get In Touch
                </Typography>
                <div className={styles.inputContain}>
                  <input
                    id="outlined-basic"
                    placeholder="Your Email"
                    className={`${styles.inputFieldMobile} ${styles.inputFieldPlaceholder}`}
                  />
                  <button className={styles.buttonStyle}>
                    <span className={styles.buttonTextStyle}>Subscribe</span>
                  </button>
                </div>
                <p className={styles.lorem}>Lore imp dolor Amit</p>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <div className={styles.copyMobile}>
          <p className={styles.textInfoMobile}>
            Made with Love By FinLand All Rights Reserved
          </p>
        </div>
      </Box>
    </>
  );
}
