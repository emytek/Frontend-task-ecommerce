// pages/index.js
import React from "react";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import { Product } from "../../../../../utils/ProductDetail";
import { textItem } from "../../styles/ProductDetailStyle";
import styles from "./styles.module.css";

export default function MobileDescription({ product }: { product: Product }) {
  return (
    <div className={styles.textSection}>
      <Typography mb={{ sm: ".6rem", md: "1.5rem" }} style={textItem}>
        {product.description}
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
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met
        </Typography>
      </Box>
      <Typography mb={{ sm: ".6rem", md: "1.5rem" }} {...textItem}>
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent door ENIM RELIT Mollie. Excitation venial
        consequent sent nostrum met
      </Typography>
    </div>
  );
}
