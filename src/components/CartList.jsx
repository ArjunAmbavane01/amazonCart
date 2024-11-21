import { useRecoilState } from "recoil";
import userCartAtom from "../store/cartItemsState"
import React from 'react';
import CartItem from './CartItem';
import styles from './CartList.module.css'
import userWishlistAtom from "../store/wishItemsState";


const CartList = () => {
    const [wishlist,setWishlist] = useRecoilState(userWishlistAtom);
    const [cart,setCart] = useRecoilState(userCartAtom);
  
    const handleDelete = (item) => {
      const updatedCart = cart.filter(x=>x.id != item.id);
      alert('Added to Wishlist')
      setCart(updatedCart);
      setWishlist([...wishlist,item])
    }
    

  return (
    <div className={styles.cartList}>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default CartList;
