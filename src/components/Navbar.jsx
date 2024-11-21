import styles from './Navbar.module.css';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

        return <div className={styles.container}>
            <div className={styles.navbarLeft} >
                Amazon.in
            </div>
            <div className={styles.navbarRight}>
                <p style={{cursor:'pointer'}} onClick={()=>navigate('/wishlist')}>Wishlist</p>
                <p style={{cursor:'pointer'}} onClick={()=>navigate('/cart')}>Cart</p>
            </div>
        </div>
}

export default Navbar