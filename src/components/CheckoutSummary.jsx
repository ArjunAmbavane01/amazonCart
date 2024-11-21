import React from 'react';
import styles from './CheckoutSummary.module.css'
import { useRecoilValue } from 'recoil';
import cartTotalSelector from '../store/cartTotalSelector';


const CheckoutSummary = () => {

  const cartDetails = useRecoilValue(cartTotalSelector);

  return (
    <div className={styles.checkoutSummary}>
      <h3>Order Summary</h3>
      <p>Items : ({cartDetails.cartLength})</p>
      <p className={styles.orderTotal}>Order Total: ₹{cartDetails.cartTotal}</p>
      <button className={styles.checkoutButton}>Proceed to Buy</button>
      {/* <p>Items : ({2})</p>
      <p className={styles.orderTotal}>Order Total: ₹{500}</p>
      <button className={styles.checkoutButton}>Proceed to Buy</button> */}
    </div>
  );
};

export default CheckoutSummary;
