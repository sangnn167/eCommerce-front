import React, { FC } from "react";
import styles from "./styles.module.css"

type Props = {
  currentPage?: number;
  handlePageChange: (page: number) => void;
};

export const SelectPage: FC<Props> = ({
  currentPage,
  handlePageChange,
}) => {

  const getNumberOfPageStyle = (page: number) => {
    return page === currentPage
      ? `${styles.numberOfPage} ${styles.selectedPage}`
      : `${styles.numberOfPage2}`;
  };

  return (
    <div className={styles.selectPage}>
      <div className={getNumberOfPageStyle(1)} onClick={() => handlePageChange(1)}>
        1
      </div>
      <div className={getNumberOfPageStyle(2)} onClick={() => handlePageChange(2)}>
        2
      </div>
      <div className={getNumberOfPageStyle(3)} onClick={() => handlePageChange(3)}>
        3
      </div>
      <div className={styles.nextPage}>
        Next
      </div>
    </div>
  )
}