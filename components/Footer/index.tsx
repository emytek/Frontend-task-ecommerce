import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Input,
  Button,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { linkStyle, footerTop, mrg } from "./styles/FooterStyles";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AdFooter from "./AdFooter";
import styles from "./styles/mailFooter.module.css";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false); // Use state to manage modal visibility
  const isLargeScreen = useMediaQuery("(min-width:1025px)");

  const numColumns = {
    xs: 1,
    md: 3,
    lg: 5,
  };

  return (
    <>
      <AdFooter />
      {isLargeScreen ? (
        <Box mt="2.5rem">
          <motion.header>
            <Box
              component={Grid}
              container
              justifyContent="center"
              alignItems="center"
              style={mrg}
            >
              {/* Column 1 */}
              <Grid item xs={1} md={3} lg={2}>
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

              {/* Column 2 */}
              <Grid item xs={1} md={3} lg={2}>
                <Box>
                  <Typography style={footerTop}>Legal</Typography>
                  <Typography style={linkStyle}>About Us</Typography>
                  <Typography {...linkStyle}>Carrier</Typography>
                  <Typography {...linkStyle}>We are hiring</Typography>
                  <Typography {...linkStyle}>Blog</Typography>
                </Box>
              </Grid>

              <Grid item xs={1} md={3} lg={2}>
                <Box>
                  <Typography style={footerTop}>Features</Typography>
                  <Typography style={linkStyle}>Business Marketing</Typography>
                  <Typography {...linkStyle}>User Analytic</Typography>
                  <Typography {...linkStyle}>Live Chat</Typography>
                  <Typography {...linkStyle}>Unlimited Support</Typography>
                </Box>
              </Grid>

              <Grid item xs={1} md={3} lg={2}>
                <Box>
                  <Typography style={footerTop}>Resources</Typography>
                  <Typography style={linkStyle}>IOS & Android</Typography>
                  <Typography {...linkStyle}>Watch a Demo</Typography>
                  <Typography {...linkStyle}>Customers</Typography>
                  <Typography {...linkStyle}>API</Typography>
                </Box>
              </Grid>
              {/* Add more columns (Column 3, Column 4, Column 5) with similar structure */}

              {/* Column 5 */}
              <Grid item xs={1} md={3} lg={2}>
                <Box width="100%">
                  <Box display="flex" flexDirection="column" alignItems="flex">
                    <Typography style={footerTop} whiteSpace="nowrap">
                      Get In Touch
                    </Typography>
                    <div className={styles.inputContainer}>
                      <input
                        id="outlined-basic"
                        placeholder="Your Email"
                        className={`${styles.inputField} ${styles.inputFieldPlaceholder}`}
                      />
                      <button className={styles.buttonStyle}>
                        <span className={styles.buttonTextStyle}>
                          Subscribe
                        </span>
                      </button>
                    </div>
                    <p className={styles.lorem}>Lore imp dolor Amit</p>
                  </Box>
                </Box>
              </Grid>
            </Box>
            <div className={styles.copy}>
              <p className={styles.textInfo}>
                Made with Love By FinLand All Rights Reserved
              </p>
            </div>
          </motion.header>
        </Box>
      ) : (
        <MobileFooter />
      )}
    </>
  );
};

export default Footer;
