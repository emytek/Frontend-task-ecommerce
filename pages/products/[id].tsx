// pages/[id].tsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CircularProgress, Grid, Container } from "@material-ui/core";
import axios from "axios";
import SingleProduct from "../../components/products/SingleProduct";
import BestSeller from "../../components/products/BestSeller";
import styles from "../../styles/productDetails.module.css";
import { md } from "../../components/products/SingleProduct/styles/ProductDetailStyle";

const ProductDetail = () => {
  const router = useRouter();
  console.log(router, "Router Data:");
  const { id } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Effect triggered with id:", id);

    const fetchProductDetail = async () => {
      try {
        console.log("Fetching product details for id:", id);
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        const data = response.data;
        console.log("Fetched product details->:", data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details->", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetail();
    }
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  // Check if product is defined before accessing its properties
  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div>
      <SingleProduct product={product} />
      <BestSeller />
      <div className={styles.container}>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className={styles.gridItem}>
              <img src={`/imgIcons/${index}.png`} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
      {/* <Container style={md}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Grid item key={index} xs={12} sm={6} md={3} lg={2}>
              <img src={`/imgIcons/${index}.png`} alt={`Image ${index}`} />
            </Grid>
          ))}
        </Grid>
      </Container> */}
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;
