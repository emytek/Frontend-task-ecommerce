import React from "react";
import styles from "./styles/styles.module.css";
import {
  CircularProgress,
  Button,
  Grid,
  Box,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import {
  addButtonStyle,
  info1,
  info2,
  priceStyle,
  titleStyle,
  reviewsStyle,
} from "./styles/ProductDetailStyle";
import Rating from "@mui/material/Rating";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function SingleProduct({ product }: { product: Product }) {
  console.log("Product from single page: ", product);
  const theme = useTheme();

  return (
    <section className={styles.productDetailSection}>
      <div className={`${styles.detailWrapper} ${styles.flex}`}>
        <div className={styles.left}>
          <div className={styles.mainImage}>
            <img
              src={product.images[0]}
              className={styles.slide}
              alt={`Product ${product.id}`}
            />
          </div>
          <div className={`${styles.option} ${styles.flex}`}>
            {product.images.slice(0, 6).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${product.id} Option ${index + 1}`}
                // onClick={() => img(image)}
                className={styles.optionImage}
              />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <Typography style={titleStyle}>{product.title}</Typography>
          <Box display="flex" alignItems="flex-start" mt="1rem">
            <Rating
              name="product-rating"
              value={product.rating}
              precision={0.1}
              readOnly
            />
            <Typography style={reviewsStyle}> 10 Reviews</Typography>
          </Box>
          <Typography style={priceStyle} mt={{ sm: ".5rem", md: "1.6rem" }}>
            {" "}
            ${product.price.toFixed(2)}
          </Typography>
          <Box
            display="flex"
            alignItems="flex-start"
            mt={{ sm: ".3rem", md: ".7rem" }}
          >
            <Typography style={info1}>Availability :</Typography>
            <Typography component="span" style={info2}>
              {" "}
              In Stock
            </Typography>
          </Box>

          <Divider
            style={{
              width: "445px",
              backgroundColor: "#BDBDBD",
              display: theme.breakpoints.up("lg") ? "block" : "none",
            }}
          />

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={{ sm: ".6rem", md: "2.6rem" }}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <img
                  src="/icons/color1.png"
                  alt="Icon 1"
                  className={styles.icon}
                />
              </Grid>
              <Grid item>
                <img
                  src="/icons/color2.svg"
                  alt="Icon 2"
                  className={styles.icon}
                />
              </Grid>
              <Grid item>
                <img
                  src="/icons/color3.svg"
                  alt="Icon 3"
                  className={styles.icon}
                />
              </Grid>
              <Grid item>
                <img
                  src="/icons/color4.svg"
                  alt="Icon 3"
                  className={styles.icon}
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={{ sm: "1.2rem", md: "3.6rem" }}
            gap="12px"
          >
            <Button style={addButtonStyle}>Select Options</Button>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <img
                  src="path-to-your-icon-1.png"
                  alt="Icon 1"
                  className={styles.icon}
                />
              </Grid>
              <Grid item>
                <img
                  src="path-to-your-icon-2.png"
                  alt="Icon 2"
                  className={styles.icon}
                />
              </Grid>
              <Grid item>
                <img
                  src="path-to-your-icon-3.png"
                  alt="Icon 3"
                  className={styles.icon}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </section>
  );
}
