import styles from "./Wishlist.module.css";
import userWishlistAtom from "../store/wishItemsState";
import ItemCard from "./ItemCard";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import userCartAtom from "../store/cartItemsState";

const Wishlist = () => {
  const [wishlist,setWishlist] = useRecoilState(userWishlistAtom);
  const [cart,setCart] = useRecoilState(userCartAtom);

  const handleAddToCart = (item) => {
    const updatedWishlist = wishlist.filter(x=>x.id != item.id);
    alert('Added to cart')
    item.quantity=1;
    setCart([...cart,item])
    setWishlist(updatedWishlist);
  }
  
  return (
    <div className={styles.wishlistContainer}>
      {wishlist.map((item, index) => {
        return <ItemCard item={item} key={index} handleAddToCart={handleAddToCart} />;
      })}
    </div>
  );
};

export default Wishlist;
