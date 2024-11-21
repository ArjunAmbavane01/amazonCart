import styles from "./Wishlist.module.css";
import userWishlistAtom from "../store/wishItemsState";
import ItemCard from "./ItemCard";
import { useRecoilValue } from "recoil";

const Wishlist = () => {
  const Wishlist = useRecoilValue(userWishlistAtom);
    console.log(Wishlist)
  return <div className={styles.wishlistContainer}>
    {Wishlist.map((item,index)=>{
       return <ItemCard item={item} key={index} />
    })}
    {Wishlist.map((item,index)=>{
       return <ItemCard item={item} key={index} />
    })}
  </div>;

};

export default Wishlist;
