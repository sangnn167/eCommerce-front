"use client";
import React, { FC, useState } from "react";
import styles from "./styles.module.css"
import { Menu } from "../components/Menu/page";
import { BannerShop } from "../components/Shop/BannerTop/page";
import { FillterTop } from "../components/Shop/FilterTop/page";
import products from '../mock/products.json';
import { ProductsCard } from "../components/Home/ProductsCard/page";
import { ShopService } from "../components/Shop/ShopService/page";
import { Footer } from "../components/Footer/page";
import { SelectPage } from "../components/Shop/SelectPage/page";

type Props = {};

const Shop: FC<Props> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.shopContainer}>
      <div className={styles.container}>
        <Menu />
        <BannerShop />
        <div className={styles.filterContainer}>
          <FillterTop />
        </div>
        <div className={styles.productContainer}>
          <div className={styles.productsCard}>
            {products.slice(0, 16).map((product) => (
              <div key={product.id}>
                <ProductsCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <SelectPage
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        <div className={styles.shopService}>
          <ShopService />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Shop;