import { Header } from "./components/Header"
import { TodoListView } from "./components/TodoListView"

import './styles/global.css'

import styles from './App.module.css';
import { TodoForm } from "./components/TodoForm";
import { useState } from "react";

export type TodoProps = {
    id: number;
    text: string;
    status: 'todo' | 'done';
}

function App() {

    const [todos, setTodos] = useState<TodoProps[]>([] as TodoProps[]);

    function handleAddTodo(text: string) {
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                text,
                status: 'todo'
            }
        ]);
    }

    function handleToggleTodo(id: number) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    status: todo.status === 'todo' ? 'done' : 'todo'
                }
            }
            return todo;
        }));
    }

    function handleRemoveTodo(id: number) {
        if (todos.length > 0) {
            if (window.confirm('Deseja realmente excluir esta tarefa?')) {
                setTodos(todos.filter(todo => todo.id !== id));
            }
        }
    }

    return (
        <main>
            <Header />
            <div className={styles.main}>
                <TodoForm
                    onAddTodo={handleAddTodo}
                />
                <TodoListView
                    todos={todos}
                    onToggleTodo={handleToggleTodo}
                    onRemoveTodo={handleRemoveTodo}
                />
            </div>
        </main>
    )
}

export default App
