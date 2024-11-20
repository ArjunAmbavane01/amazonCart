import { Outlet } from "react-router-dom"
import styles from './Layout.module.css'
import Navbar from './Navbar'

const Layout = () => {
    return <div className={styles.container}>
        <Navbar />
        <Outlet />
    </div>
}



export default Layout