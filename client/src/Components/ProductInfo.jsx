import React from 'react';

const Product = ({product}) => (
  <div>
    <div>{product.category}</div><div>${product.price}</div>
    <div>Nike Air {product.name}</div>
  </div>
);

export default Product;