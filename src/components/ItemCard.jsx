import styles from "./ItemCard.module.css";

const ItemCard = ({ item }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={item.imageUrl} alt={item.imageAltUrl} />
      </div>
      <div className={styles.nameContainer}>{item.name}</div>
      <div className={styles.priceContainer}>Price : ${item.price}</div>
      <div className={styles.buttonContainer}>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
