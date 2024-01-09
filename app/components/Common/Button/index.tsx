import React, { FC } from 'react';
import styles from './styles.module.css';

type Props = {
  title: string;
  className?: string;
  onClick?: () => void;
};

export const ShowMoreButton: FC<Props>  = ({title,onClick ,className = ''}) => {
  return (
    <div className={className}>
      {title}
    </div>
  );
};


