// pages/Products.tsx
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
import { fetchProducts } from "../../../utils/requests/fetchedData";

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

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productGrid}>
        {products.slice(0, 10).map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.images[0]} alt={`Product ${product.id}`} />
            <div className={styles.productDetails}>
              <p>{product.brand}</p>
              <p>
                ${product.price.toFixed(2)} (Discount: $
                {(product.price * (product.discountPercentage / 100)).toFixed(
                  2
                )}
                )
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
