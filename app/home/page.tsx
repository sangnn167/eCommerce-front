'use client'
import React, { FC } from "react"
import styles from "./styles.module.css"
import products from '../mock/products.json';
import { Banner } from "../components/Home/Banner/page";
import { Menu } from "../components/Menu/page";
import { Browse } from "../components/Home/BrowseTheRange/page";
import { ProductsCard } from "../components/Home/ProductsCard/page";
import { ShowMoreButton } from "../components/Common/Button";
import { TitleRooms } from "../components/Home/TitleRooms/page";
import { BedRoom } from "../components/Home/BedRoom/page";
import { FurnitureImages } from "../components/Home/FurnitureImages/page";
import { Footer } from "../components/Footer/page";
import SliderRoom from "../components/Home/SliderRoom/page";

type Props = {};

const Home: FC<Props> = () => {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.container}>
        <Menu />
        <Banner />
        <div className={styles.content}>
          <p className={styles.titleContent}>Browse The Range</p>
          <p className={styles.describeContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.containerContent}>
            {products.slice(0, 3).map((product) => (
              <div className={styles.productContent} key={product.id}>
                <Browse
                  name={product.name}
                  imageroom={product.imageroom}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.product}>
          <p>Our Products</p>
          <div className={styles.productsCard}>
            {products.slice(0, 8).map((product) => (
              <div key={product.id}>
                <ProductsCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <ShowMoreButton title="Show More" className={styles.buttonShowMore} />
        <div className={styles.roomsContainer}>
          <TitleRooms />
          <BedRoom />
          <SliderRoom />
        </div>
        <div className={styles.funiroFurniture}>
          <p className={styles.titleFurniture}>Share your setup with</p>
          <p className={styles.describeFurniture}>#FuniroFurniture</p>
          <FurnitureImages />
        </div>
        <div className={styles.line}></div>
        <Footer />
      </div>
    </div>
  )
}

export default Home;
