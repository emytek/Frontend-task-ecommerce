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
  md,
} from "./styles/ProductDetailStyle";
import Rating from "@mui/material/Rating";
import useMediaQuery from "@mui/material/useMediaQuery";
import Description from "./Description";
import MobileDescription from "./Description/MobileDesc";

export interface Product {
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
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <>
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
            <p style={priceStyle} className={styles.priceMt}>
              {" "}
              ${product.price.toFixed(2)}
            </p>
            <Box display="flex" alignItems="flex-start" mt=".7rem">
              <Typography style={info1}>Availability :</Typography>
              <Typography component="span" style={info2}>
                {" "}
                In Stock
              </Typography>
            </Box>

            {!isLargeScreen && <MobileDescription product={product} />}

            <div className={styles.hr}>
              <Divider
                style={{
                  width: "445px",
                  backgroundColor: "#BDBDBD",
                  display: theme.breakpoints.up("lg") ? "block" : "none",
                }}
              />
            </div>

            <div className={styles.icon}>
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
            </div>

            <div className={styles.elements}>
              <Box padding="10px 20px" borderRadius="5px" mr="1rem">
                <Button
                  style={{
                    backgroundColor: "#23A6F0",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "24px",
                    letterSpacing: ".2px",
                    color: "#FFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  Select Options
                </Button>
              </Box>

              <div className={styles.md}>
                <img src="/icons/cart.png" alt="Icon 1" />
                <img
                  src="/icons/wish.png"
                  alt="Icon 2"
                  className={styles.md2}
                />
                <img src="/icons/eye.png" alt="Icon 3" className={styles.md3} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLargeScreen ? <Description product={product} /> : ""}
    </>
  );
}
