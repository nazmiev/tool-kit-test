import { Link } from 'react-router-dom';
import styles from "./repoBlock.module.scss";

const Repoblock = ( { nameWithOwner, name, stargazers, updatedAt, url} :any ) => {
    return (
        <section className={styles.root}>
            <h3>Имя репозитория: <Link to={`/repository/${nameWithOwner}`}> {name}</Link></h3>
            <p>Звёзд: {stargazers.totalCount}</p>
            <p>Дата последнего commita: {updatedAt.split('T')[0]}</p>
            <a href={url}>Ссылка на репозиторий на GitHub</a>
        </section>
    )
}

export default Repoblock;