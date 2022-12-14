import styles from './PostCard.module.css';

const PostCard = ({ post }) => {

    return (
        <>
            <div className={styles.post}>
                <img className={styles.capa}
                    src={`/assets/posts/${post.id}/img.png`}
                    alt="Imagem do Post"
                />
            </div>
            <h2 className={styles.titulo}>
                {post.titulo}
            </h2>
            <button className={styles.botaoLer}>Ler</button>
        </>
    );

}

export default PostCard;