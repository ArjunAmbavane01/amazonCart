import { useRecoilValue } from "recoil";
import userCartAtom from "../store/cartItemsState"
import React from 'react';
import CartItem from './CartItem';
import styles from './CartList.module.css'


const CartList = () => {
    const CartItems = useRecoilValue(userCartAtom);

  return (
    <div className={styles.cartList}>
      {CartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
