import React from 'react';
import styles from './Styles.module.css';

class ProductView extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={styles.pics}>
        <img
        className={styles.topLeft}
        src={this.props.product.main_img}
        />
        <img
        className={styles.topRight}
        src={this.props.product.front_view}
        />
        <img
        className={styles.midLeft}
        src={this.props.product.back_view}
        />
        <img
        className={styles.midRight}
        src={this.props.product.bottom_view}
        />
        <img
        className={styles.botLeft}
        src={this.props.product.top_view}
        />
        <img
        className={styles.botRight}
        src={this.props.product.right_side}
        />
      </div>
    )
  }
}

export default ProductView;
