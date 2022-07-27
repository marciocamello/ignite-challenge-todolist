import styles from './TodoForm.module.css';

import { Input } from '../Common/Input';
import { Button } from '../Common/Button';
import React, { useState } from 'react';

interface Props {
    onAddTodo: (text: string) => void;
}

export function TodoForm({ onAddTodo }: Props) {

    const [text, setText] = useState('');

    const canSubmit = text.length > 0;

    function handleCreateNewTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onAddTodo(text);
        setText('');
    }

    return (
        <form className={styles.form} onSubmit={handleCreateNewTodo}>
            <div className={styles.wrapper}>
                <Input
                    placeholder='Adicione uma nova tarefa'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Button
                    label="Criar"
                    iconPosition="right"
                    iconSize={18}
                    type="submit"
                    disabled={!canSubmit}
                />
            </div>
        </form>
    )
}