// pages/Products.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { fetchProducts } from "../../../utils/requests/fetchedData";
import IntroSection from "../../IntroSection";
import { CircularProgress } from "@material-ui/core";

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

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const fetchedProducts = await fetchProducts();
  //     setProducts(fetchedProducts);
  //   };

  //   fetchData();
  // }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const fetchedProducts = await fetchProducts();
    setProducts((prevProducts) => [...prevProducts, ...fetchedProducts]);
    setLoading(false);
  };

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  return (
    <>
      <IntroSection
        title="Featured Products"
        option="THE BEST PRODUCTS"
        note="Problems trying to resolve the conflict between"
      />
      <div className={styles.productsContainer}>
        <div className={styles.productGrid}>
          {products.slice(0, visibleProducts).map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className={styles.productCard}>
                <img src={product.images[0]} alt={`Product ${product.id}`} />
                <div className={styles.productDetails}>
                  <p className={styles.productTitle}>{product.title}</p>
                  <p className={styles.productCategory}>{product.category}</p>
                  <div className={styles.productPriceInfo}>
                    <div>
                      <p className={styles.productPrice}>
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <p className={styles.productDiscount}>
                      $
                      {(
                        product.price *
                        (product.discountPercentage / 100)
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {loading ? (
          <CircularProgress className={styles.loadingSpinner} />
        ) : (
          visibleProducts < products.length && (
            <div className={styles.loadMoreButton}>
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className={styles.loadBtn}
              >
                LOAD MORE PRODUCTS
              </button>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default ProductList;
