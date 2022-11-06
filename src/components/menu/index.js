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
                    <MenuLink to="/SobreSerie">
                        Sobre a série
                    </MenuLink>
                    <MenuLink to="/Opiniao">
                        Deixe sua opinião
                    </MenuLink>
                </nav>
            </header>
        </>

    );
}

export default Menu;