import { Link, useLocation } from "react-router-dom";
import logoYellow from "../../../favicon.ico";
import Search from "../Search";
import styles from "./header.module.scss";

const Header:React.FC = () => {
    console.log('Header');
    const { pathname } = useLocation();

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.header__logo}>
                        <img width="45" src={logoYellow} loading="lazy" alt="Tool-Kit" />
                    </div>
                </Link>
                {pathname === '/' && <Search />}
            </div>
        </div>
    )
}

export default Header;