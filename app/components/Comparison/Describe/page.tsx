import React, { FC } from "react";
import styles from "./styles.module.css"

type Props = {};

export const Describe: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.general}>
        <div className={styles.describeLeft}>
          <p className={styles.title}>General</p>
          <p className={styles.describe}>Sales Package</p>
          <p className={styles.describe}>Model Number</p>
          <p className={styles.describe}>Secondary Material</p>
          <p className={styles.describe}>Configuration</p>
          <p className={styles.describe}>Upholstery Material</p>
          <p className={styles.describeBottom}>Upholstery Color</p>
          <p className={styles.title}>Product</p>
          <p className={styles.describe}>Filling Material</p>
          <p className={styles.describe}>Finish Type</p>
          <p className={styles.describe}>Adjustable Headrest</p>
          <p className={styles.describe}>Maximum Load <br /> Capacity</p>
          <p className={styles.describeBottom}>Origin of Manufacture</p>
          <p className={styles.title}>Dimensions</p>
          <p className={styles.describe}>Width</p>
          <p className={styles.describe}>Height</p>
          <p className={styles.describe}>Depth</p>
          <p className={styles.describe}>Weight</p>
          <p className={styles.describe}>Seat Height</p>
          <p className={styles.describeBottom}>Leg Height</p>
          <p className={styles.title}>Warranty</p>
          <p className={styles.describeSummary}>Warranty Summary</p>
          <p className={styles.describeService}>Warranty Service <br />Type</p>
          <p className={styles.describeWarranty}>Covered in Warranty</p>
          <p className={styles.describeNotWarranty}>Not Covered in <br /> Warranty</p>
          <p className={styles.describe}>Domestic Warranty</p>
        </div>
        <div className={styles.linecenter}></div>
        <div className={styles.describeCenter}>
          <p className={styles.describe}>1 sectional sofa</p>
          <p className={styles.describe}>TFCBLIGRBL6SRHS</p>
          <p className={styles.describe}>Solid Wood</p>
          <p className={styles.describe}>L-shaped</p>
          <p className={styles.describe}>Fabric + Cotton</p>
          <p className={styles.describeBottomCenter}>Bright Grey & Lion</p>
          <p className={styles.describe}>Foam</p>
          <p className={styles.describe}>Bright Grey & Lion</p>
          <p className={styles.describe}>No</p>
          <p className={styles.describeKG}>280 KG</p>
          <p className={styles.describeBottomCenter}>India</p>
          <p className={styles.describe}>265.32 cm</p>
          <p className={styles.describe}>76 cm</p>
          <p className={styles.describe}>167.76 cm</p>
          <p className={styles.describe}>45 KG</p>
          <p className={styles.describe}>41.52 cm</p>
          <p className={styles.describeBottomCenter}>5.46 cm</p>
          <p className={styles.describe}>1 Year Manufacturing <br /> Warranty</p>
          <p className={styles.describe}>For Warranty Claims or <br /> Any Product Related <br /> Issues Please Email at <br /> operations@trevifurnitu <br />re.com</p>
          <p className={styles.describeWarrantyMid}>Warranty Against <br /> Manufacturing Defect</p>
          <p className={styles.describe}>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</p>
          <p className={styles.describeCenterBottom}>1 Year</p>
          <div className={styles.buttonAdd}>Add To Cart</div>
        </div>
        <div className={styles.linecenter}></div>
        <div className={styles.describeRight}>
          <p className={styles.describe}>1 Three Seater, 2 Single <br /> Seater</p>
          <p className={styles.describe}>DTUBLIGRBL568</p>
          <p className={styles.describe}>Solid Wood</p>
          <p className={styles.describe}>L-shaped</p>
          <p className={styles.describe}>Fabric + Cotton</p>
          <p className={styles.describeBottomCenter}>Bright Grey & Lion</p>
          <p className={styles.describe}>Foam</p>
          <p className={styles.describe}>Bright Grey & Lion</p>
          <p className={styles.describe}>yes</p>
          <p className={styles.describeKG}>300 KG</p>
          <p className={styles.describeBottomCenter}>India</p>
          <p className={styles.describe}>265.32 cm</p>
          <p className={styles.describe}>76 cm</p>
          <p className={styles.describe}>167.76 cm</p>
          <p className={styles.describe}>45 KG</p>
          <p className={styles.describe}>41.52 cm</p>
          <p className={styles.describeBottomCenter}>5.46 cm</p>
          <p className={styles.describe}>1.2 Year Manufacturing <br /> Warranty</p>
          <p className={styles.describe}>For Warranty Claims or <br /> Any Product Related <br /> Issues Please Email at <br /> operations@trevifurnitu <br />re.com</p>
          <p className={styles.describeWarrantyMid}>Warranty Against <br /> Manufacturing Defect</p>
          <p className={styles.describe}>The Warranty Does Not <br /> Cover Damages Due To <br /> Usage Of The Product <br /> Beyond Its Intended Use <br /> And Wear & Tear In The <br /> Natural Course Of <br /> Product Usage.</p>
          <p className={styles.describeCenterBottom}>3 Year</p>
          <div className={styles.buttonAdd}>Add To Cart</div>
        </div>
        <div className={styles.linecenter}></div>
      </div>

    </div>
  )
}