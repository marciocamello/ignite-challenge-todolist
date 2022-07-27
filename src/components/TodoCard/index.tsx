import { Trash } from 'phosphor-react';
import { TodoProps } from '../../App';
import { Checkbox } from '../Common/Checkbox';

import styles from './TodoCard.module.css';

interface Props {
    todo: TodoProps;
    onRemoveTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

export function TodoCard({ todo, onToggleTodo, onRemoveTodo }: Props) {
    return (
        <main className={styles.card}>
            <Checkbox
                onChange={() => onToggleTodo(todo.id)}
                checked={todo.status === 'done'}
            />
            <p className={todo.status === 'done' ? styles.checked : ''}>{todo.text}</p>
            <button onClick={() => onRemoveTodo(todo.id)}>
                <Trash />
            </button>
        </main>
    )
}