import styles from './Inicio.module.css';
import Banner from "components/Banner";
import posts from 'json/posts.json';
import PostCard from 'components/PostCard';

function Inicio() {
    return (
        <>
            <Banner />
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>

        </>
    );
}

export default Inicio;