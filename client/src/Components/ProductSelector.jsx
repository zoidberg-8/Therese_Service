import React from 'react';
import styles from './Styles.module.css';
// import ProductSelected from './ProductSelected.jsx';

class ProductSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className={styles.selector}>
      <img className={styles.selectImg} src={this.props.shoe.main_img}/>
    </div>
    );
  }
}

export default ProductSelector;