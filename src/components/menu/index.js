import MenuLink from 'pages/MenuLink';
import styles from './Menu.module.css';
function Menu() {
    return (
        <>
            <header>
                <nav className={styles.navegacao}>
                    <MenuLink to="/">
                        Início
                    </MenuLink>
                    <MenuLink to="/SobreMim">
                        Sobre mim
                    </MenuLink>
                </nav>
            </header>
        </>

    );
}

export default Menu;