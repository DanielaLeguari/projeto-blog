import MenuLink from 'pages/MenuLink';
import styles from './Menu.module.css';
function Menu() {
    return (
        <>
            <header>
                <nav className={styles.navegacao}>
                    <MenuLink to="/">
                    Os Winchesters
                    </MenuLink>
                    <MenuLink to="/SobreMim">
                        Sobre a série
                    </MenuLink>
                </nav>
            </header>
        </>

    );
}

export default Menu;