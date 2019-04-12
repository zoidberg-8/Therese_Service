import React from 'react';
import styles from './Styles.module.css';

const ProductInfo = ({product}) => (
  <div className={styles.info}>
    <h2 className={styles.category}>{product.category}</h2><div className={styles.price}>${product.price}</div>
    <div className={styles.name}>Nike Air {product.name}</div>
  </div>
);

export default ProductInfo;