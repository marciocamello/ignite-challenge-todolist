import { PlusCircle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react"

import { ButtonIcon } from "./IconButton";

import styles from "./Button.module.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    iconPosition?: "left" | "right";
    iconSize?: number;
}

export function Button({ label, iconPosition, iconSize, ...props }: ButtonProps) {

    return (
        <button
            className={styles.button}
            {...props}
        >
            {iconPosition === "left" && (
                <ButtonIcon
                    icon={<PlusCircle size={iconSize} />}
                />
            )}
            {label}
            {iconPosition === "right" && (
                <ButtonIcon
                    icon={<PlusCircle size={iconSize} />}
                />
            )}
        </button>
    )
}