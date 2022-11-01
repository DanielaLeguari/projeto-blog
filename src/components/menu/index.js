import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
function Menu() {
    return (
        <>

            <header>
                <nav className={styles.navegacao}>
                    <Link to='/' className={`
                ${styles.link}
                ${styles.linkSublinhado}
                `}>Início</Link>
                    <Link to='/SobreMim' className={styles.link}>Sobre Mim</Link>
                </nav>
            </header>
        </>

    );
}

export default Menu;