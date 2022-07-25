import styles from './Header.module.css';

import LogoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.avatar}>
                <img src={LogoImg} alt="logo" />
            </div>
        </header>
    )
}