"use client"
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.css"
import { Menu } from "../components/Menu/page";
import { BannerComparison } from "../components/Comparison/BannerComparison/page";
import { ProductComparison } from "../components/Comparison/ProductComparison/page";
import { Describe } from "../components/Comparison/Describe/page";
import { ShopService } from "../components/Shop/ShopService/page";
import { Footer } from "../components/Footer/page";


type ProductType = {
  id: number;
  name: string;
  imageSofa: string;
  currentprice: number;
  star: string;
  review: string;
}

const Comparison: FC<ProductType> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedProductForComparison, setSelectedProductForComparison] = useState<ProductType | null>(null);

  useEffect(() => {
    setLoading(true);
    const selectedProduct = localStorage.getItem('selectedProductForComparison');
    if (selectedProduct) {
      setSelectedProductForComparison(JSON.parse(selectedProduct));
    }
    setLoading(false);
  }, []);

  return (
    <div className={styles.comparisonContainer}>
      <div className={styles.container}>
        <Menu />
        <BannerComparison />
        <div className={styles.product}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ProductComparison
              images={selectedProductForComparison?.imageSofa}
              name={selectedProductForComparison?.name}
              currentprice={selectedProductForComparison?.currentprice}
              star={selectedProductForComparison?.star}
              review={selectedProductForComparison?.review}
            />
          )}
        </div>
        <Describe />
        <div className={styles.shopService}>
          <ShopService />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Comparison;
