import styles from './Header.module.css';

import LogoImg from '../../assets/logo.svg';

import { Input } from '../Common/Input';
import { Button } from '../Common/Button';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.avatar}>
                <img src={LogoImg} alt="logo" />
            </div>

            <form className={styles.form}>
                <div className={styles.wrapper}>
                    <Input
                        placeholder='Adicione uma nova tarefa'
                    />
                    <Button
                        label="Criar"
                        iconPosition="right"
                        iconSize={18}
                        type="button"
                    />
                </div>
            </form>
        </header>
    )
}