"use client"
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.css"
import { Menu } from "../components/Menu/page";
import { BannerCheckout } from "../components/Checkout/BannerCheckout/page";
import { BillingDetail } from "../components/Checkout/BillingDetail/page";
import { PlaceOrder } from "../components/Checkout/PlaceOrder/page";
import { ShopService } from "../components/Shop/ShopService/page";
import { Footer } from "../components/Footer/page";


type Props = {};

interface ProductType {
  id: number;
  currentprice: number;
  name: string;
}

const Checkout: FC<Props> = () => {
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

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.container}>
        <Menu />
        <BannerCheckout />
        <div className={styles.content}>
          <BillingDetail />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <PlaceOrder
              name={selectedProductForComparison?.name}
              currentprice={selectedProductForComparison?.currentprice}
            />
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

export default Checkout;