// pages/[productId].tsx

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Effect triggered with productId:", productId);

    const fetchProductDetail = async () => {
      try {
        console.log("Fetching product details for productId:", productId);
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`
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

    if (productId) {
      fetchProductDetail();
    }
  }, [productId]);

  if (loading) {
    return <CircularProgress />;
  }

  // Check if product is defined before accessing its properties
  if (!product) {
    return <div>No product found</div>;
  }

  return (
    <div>
      <h1>Product Info</h1>
      {/* <h1>{product?.title}</h1>
      <p>{product?.description}</p> */}
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;
