import React from 'react';
import styles from './CartItem.module.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import userCartAtom from '../store/cartItemsState';

const CartItem = ({ item,handleDelete }) => {
  const [cart,setCart] = useRecoilState(userCartAtom);
  const [quantity,setQuantity] = useState(item.quantity || 1);
  const updateCartItem = (updatedItem) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === updatedItem.id ? updatedItem : cartItem
    );
    setCart(updatedCart);
  };

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItem({ ...item, quantity: newQuantity });
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    updateCartItem({ ...item, quantity: newQuantity });
  };
  return (
    <div className={styles.cartItem}>
      <img className={styles.itemImage} src={item.imageUrl} alt={item.imageAltUrl} />
      <div className={styles.itemDetails}>
        <p className={styles.itemName}>{item.name}</p>
        <div className={styles.itemActions}>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
          <button className={styles.delete} onClick={()=>handleDelete(item)}>Delete</button>
        </div>
      </div>
      <p className={styles.itemPrice}>₹{item.price}</p>
    </div>
  );
};

export default CartItem;
