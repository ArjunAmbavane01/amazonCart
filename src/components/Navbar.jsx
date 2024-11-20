import styles from './Navbar.module.css';

const Navbar = () => {

        return <div className={styles.container}>
            <div className={styles.navbarLeft}>
                Amazon.in
            </div>
            <div className={styles.navbarRight}>
                <p>Wishlist</p>
                <p>Cart</p>
            </div>
        </div>
}

export default Navbar