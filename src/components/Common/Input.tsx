import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {

}

export function Input({ ...props }: InputProps) {

    return (
        <input
            className={styles.input}
            type="text"
            {...props}
        />
    );
}