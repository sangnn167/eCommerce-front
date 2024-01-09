"use client"
import React, { FC, useState, useEffect } from "react";
import products from '../../mock/products.json';
import styles from "./styles.module.css"
import { Menu } from "@/app/components/Menu/page";
import { HeaderTop } from "@/app/components/SingleProduct/HeaderTop/page";
import { ImagesProduct } from "@/app/components/SingleProduct/ImagesProduct/page";
import { ProductInfo } from "@/app/components/SingleProduct/ProductInfo/page";
import { ActionButton } from "@/app/components/SingleProduct/ActionButton/page";
import { Description } from "@/app/components/SingleProduct/Description/page";
import { ProductsCard } from "@/app/components/Home/ProductsCard/page";
import { ShowMoreButton } from "@/app/components/Common/Button";
import { Footer } from "@/app/components/Footer/page";
import { ProductOverlay } from "@/app/components/SingleProduct/ProductOverlay/page";


type Props = {
  params: {
    id: string;
  };
};

type Product = {
  id: number;
  name: string;
  stylist: string;
  image: string;
  initialprice: string;
  currentprice: number;
  discount: string;
  category: string;
  describe: string;
  description: string;
  review: number;
  tags: string;
  sku: string;
  imageSofa: string;
  horizontalImage: string;
  additionalImages: { idImg: number; img: string }[];
}

const SingleProduct: FC<Props> = ({ params }) => {

  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  const selectedProduct = products.find((product: any) => product.id.toString() === params.id);
  const relatedProducts = products.filter(
    (product: any) => product.category === selectedProduct?.category && product.id !== selectedProduct?.id
  ).slice(0, 4);
  const [selectedProductForComparison, setSelectedProductForComparison] = useState<Product | null>(null);

  const currentPrice = selectedProduct?.currentprice || 0;
  const formattedCurrentPrice = currentPrice.toLocaleString('vi-VN');


  const handleAddToCart = () => {
    setShowOverlay(true);
    if (selectedProduct) {
      setSelectedProductForComparison(selectedProduct);
      localStorage.setItem('selectedProductForComparison', JSON.stringify(selectedProduct));
    } else {
      setSelectedProductForComparison(null);
    }
  };

  const navigateToCart = () => {
    if (selectedProductForComparison) {
      window.location.href = '/cart';
    } else {
      alert("Không có sản phẩm để so sánh.");
    }
  };

  const navigateToCheckout = () => {
    if (selectedProductForComparison) {
      window.location.href = '/checkout';
    } else {
      alert("Không có sản phẩm để so sánh.");
    }
  };

  const navigateToProductComparison = () => {
    if (selectedProductForComparison) {
      window.open('/comparison', '_blank');
    } else {
      alert("Không có sản phẩm để so sánh.");
    }
  };


  return (
    <div className={styles.productContainer}>
      <div className={showOverlay ? styles.overlay : ''}></div>
      <ProductOverlay
        showOverlay={showOverlay}
        setShowOverlay={setShowOverlay}
        selectedProduct={selectedProduct}
        formattedCurrentPrice={formattedCurrentPrice}
        navigateToCart={navigateToCart}
        navigateToCheckout={navigateToCheckout}
        navigateToProductComparison={navigateToProductComparison} />
      <div className={styles.container}>
        <Menu />
        <div className={styles.headerTop}>
          <HeaderTop productName={{ name: selectedProduct?.name || '' }} />
        </div>
        <div className={styles.content}>
          <ImagesProduct
            mainImage={selectedProduct?.imageSofa}
            additionalImages={selectedProduct?.additionalImages}
            productName={selectedProduct?.name} />
          <div>
            <ProductInfo
              Name={selectedProduct?.name}
              Currentprice={formattedCurrentPrice}
              Review={selectedProduct?.review}
              Describe={selectedProduct?.describe}
            />
            <ActionButton
              Sku={selectedProduct?.sku}
              Category={selectedProduct?.category}
              Tags={selectedProduct?.tags}
              handleAddToCart={handleAddToCart}
            />
          </div>
        </div>
        <div className={styles.lineTop}></div>
        <Description
          Review={selectedProduct?.review}
          Description={selectedProduct?.description}
          Images={selectedProduct?.horizontalImage} />
        <div className={styles.lineMid}></div>
        <div className={styles.textRelatedProducts}>
          Related Products
        </div>
        <div className={styles.containerProduct}>
          <div className={styles.productsCard}>
            {relatedProducts.map((product) => (
              <div key={product.id}>
                <ProductsCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <ShowMoreButton title="Show More" className={styles.buttonShowMore} />
        <div className={styles.lineBottom}></div>
        <Footer />
      </div>
    </div>
  )
}

export default SingleProduct;