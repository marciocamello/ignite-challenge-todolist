import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

export function Checkbox({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={styles.container}>
            <input
                type="checkbox"
                {...props}
            />
            <span className={styles.checkmark}></span>
        </label>
    )
}