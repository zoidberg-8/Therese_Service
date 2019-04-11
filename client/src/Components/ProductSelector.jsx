import React from 'react';
import ProductSelected from './ProductSelected.jsx';

class ProductSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      {this.props.product.map((shoe, index) => {
        <ProductSelected key={index} shoe={shoe} />
      })}
    </div>
    );
  }
}

export default ProductSelector;