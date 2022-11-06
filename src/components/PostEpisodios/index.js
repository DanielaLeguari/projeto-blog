import styles from './PostEpisodios.module.css';
import episodios from 'json/episodios.json';
import Episodio from 'components/Episodio';

const PostEpisodios = () => {

    return (
        <>
            <main className={styles.containerEpisodios}>
                <h1 className={styles.episodios}> 1ª Temporada-Episódios</h1>
                <p className={styles.descricao}> A 1ª temporada de "The Winchesters" é composta de 13 episódios lançados semanalmente.</p>
                {episodios.map((episodio) => (
                    <li key={episodio.id}>
                        <Episodio episodio={episodio} />
                    </li>
                ))}
            </main>
        </>


    );
}


export default PostEpisodios;