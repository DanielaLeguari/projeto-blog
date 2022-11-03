import styles from './MenuLink.module.css';
import { Link, useLocation } from 'react-router-dom';
//componente matriz
//extraindo info do Menu (desestruturando)
//children(filhote/desestruturação) -> informação(nome do link) , to -> props -> link em si
const MenuLink = ({ children, to }) => {
    const localizacao = useLocation(); //retorna a localização exata de algum componente ou função dentro do projeto

    return (
        <Link className={`
        ${styles.link}
        ${localizacao.pathname === to ? styles.linkSublinhado : ''}
        `} to={to}>
            {children}  {/* recebe o valor do texto dentro do link */}
        </Link>
    );
}



export default MenuLink;