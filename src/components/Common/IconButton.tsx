import styles from "./IconButton.module.css";

type IconButtonProps = {
    icon: React.ReactElement;
}

export function ButtonIcon({ icon: Icon }: IconButtonProps) {
    return (
        <span className={styles.iconButton}>
            {Icon}
        </span>
    )
}