import { ClipboardText } from 'phosphor-react';
import { TodoProps } from '../../App';
import { TodoCard } from '../TodoCard';

import styles from './TodoListView.module.css';

interface Props {
    todos: TodoProps[];
    onRemoveTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

export function TodoListView({
    todos,
    onRemoveTodo,
    onToggleTodo
}: Props) {

    const allTodos = todos.length;
    const finishedTodos = todos.filter(todo => todo.status === 'done');

    return (
        <main className={styles.todoListWrapper}>
            <section>
                <div>
                    <p>Tarefas criadas <span>{allTodos}</span></p>
                </div>
                <div>
                    <p>Concluidas <span>{finishedTodos.length} de {allTodos}</span></p>
                </div>
            </section>
            {todos.length > 0 ? (
                <div className={styles.todoList}>
                    {todos.map(todo => (
                        <TodoCard
                            key={`todo-${todo.id}`}
                            todo={todo}
                            onToggleTodo={onToggleTodo}
                            onRemoveTodo={onRemoveTodo}
                        />
                    ))}
                </div>
            ) : (
                <section>
                    <ClipboardText size={40} />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </section>
            )}
        </main>
    );
}