import styles from './AmazonCart.module.css'
import CartList from "./CartList";
import CheckoutSummary from "./CheckoutSummary";

const AmazonCart = () => {

    return <div className={styles.cartContainer}>
    <CartList />
    <CheckoutSummary/>
  </div>

}

export default AmazonCart