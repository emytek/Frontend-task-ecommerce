// pages/index.js
import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Hidden,
  Divider,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Product } from "../../../../utils/ProductDetail";
import { textItem, textNav } from "../styles/ProductDetailStyle";
import styles from "./styles.module.css";

export default function Description({ product }: { product: Product }) {
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <>
      {isLargeScreen ? (
        <Container>
          {/* Display only on large screens (md and up) */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2.5rem",
            }}
          >
            <Typography variant="h6" style={textNav}>
              Description
            </Typography>
            <Typography variant="h6" style={textNav} marginLeft="4rem">
              Additional Information
            </Typography>
            <Typography variant="h6" style={textNav} marginLeft="4rem">
              Reviews (0)
            </Typography>
          </div>
        </Container>
      ) : (
        ""
      )}
      <div className={styles.containDesc}>
        {/* Text Section */}
        <div className={styles.textSection}>
          <Typography mb={{ sm: ".6rem", md: "1.5rem" }} style={textItem}>
            {product.description}
          </Typography>
          <Typography
            color="#252b42"
            fontSize="24px"
            fontWeight="700"
            lineHeight="32px"
            letterSpacing=".1px"
          >
            The quick fox jump over
          </Typography>
          <Typography mb={{ sm: ".6rem", md: "1.5rem" }} {...textItem}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met
          </Typography>
          <Box display="flex" alignItems="center">
            <Box
              borderRight={3}
              borderColor="#23856D"
              height={60}
              marginRight={2}
            />
            <Typography mb={{ sm: ".6rem", md: "1.5rem" }} {...textItem}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met
            </Typography>
          </Box>
          <Typography mb={{ sm: ".6rem", md: "1.5rem" }} {...textItem}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met
          </Typography>
        </div>

        {/* Image Section */}
        <div className={styles.imageSection}>
          <img src="/pics/desc.png" alt="Your Image" className={styles.image} />
        </div>
      </div>
    </>
  );
}
