"use client"
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.css"
import { Menu } from "../components/Menu/page";
import { BannerCart } from "../components/Cart/BannerCart/page";
import { CartInfomation } from "../components/Cart/CartInfomation/page";
import CartTotal from "../components/Cart/CartTotals/page";
import { ShopService } from "../components/Shop/ShopService/page";
import { Footer } from "../components/Footer/page";

type ProductType = {
  id: number;
  name: string;
  stylist: string;
  imageSofa: string;
  currentprice: number;
}

const Cart: FC<ProductType> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProductForComparison, setSelectedProductForComparison] = useState<ProductType | null>(null);

  useEffect(() => {
    setLoading(true);
    const selectedProduct = localStorage.getItem('selectedProductForComparison');
    if (selectedProduct) {
      setSelectedProductForComparison(JSON.parse(selectedProduct));
    }
    setLoading(false);
  }, []);

  const navigateToProductCart = () => {
    if (selectedProductForComparison) {
      window.location.href = '/checkout';
    } else {
      alert("Không có sản phẩm để so sánh.");
    }
  };

  return (
    <div className={styles.cartContainer}>
      <div className={styles.container}>
        <Menu />
        <BannerCart />
        <div className={styles.content}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <CartInfomation
                Images={selectedProductForComparison?.imageSofa}
                name={selectedProductForComparison?.name}
                currentprice={selectedProductForComparison?.currentprice}
              />
              <CartTotal
                currentprice={selectedProductForComparison?.currentprice}
                navigateToProductCart={navigateToProductCart}
              />
            </>
          )}
        </div>
        <div className={styles.shopService}>
          <ShopService />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Cart;