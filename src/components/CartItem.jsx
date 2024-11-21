import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img className={styles.itemImage} src={item.imageUrl} alt={item.imageAltUrl} />
      <div className={styles.itemDetails}>
        <p className={styles.itemName}>{item.name}</p>
        <div className={styles.itemActions}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
          <button className={styles.delete}>Delete</button>
        </div>
      </div>
      <p className={styles.itemPrice}>₹{item.price}</p>
    </div>
  );
};

export default CartItem;
