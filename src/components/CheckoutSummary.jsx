import React from 'react';
import styles from './CheckoutSummary.module.css'


const CheckoutSummary = () => {
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.checkoutSummary}>
      <h3>Order Summary</h3>
      {/* <p>Items ({cartItems.length}): ₹{totalPrice}</p> */}
      {/* <p className="order-total">Order Total: ₹{totalPrice}</p> */}
      {/* <button className="checkout-button">Proceed to Buy</button> */}
      <p>Items ({2}): ₹{500}</p>
      <p className="order-total">Order Total: ₹{500}</p>
      <button className="checkout-button">Proceed to Buy</button>
    </div>
  );
};

export default CheckoutSummary;
