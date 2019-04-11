import React from 'react';

class ProductView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <img
        src={this.props.product.main_img}
        />
        <img
        src={this.props.product.front_view}
        />
        <img
        src={this.props.product.back_view}
        />
        <img
        src={this.props.product.bottom_view}
        />
        <img
        src={this.props.product.top_view}
        />
        <img
        src={this.props.product.right_side}
        />
      </div>
    )
  }
}

export default ProductView;
