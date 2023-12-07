import "./App.css";
import React, { useEffect, useState } from "react";

export default function App() {

    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState([])


    function handleSubmit(e) {
        e.preventDefault()
        setTodos(currentTodos => {
            return [
                ...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false },
            ]
        })
        setNewItem("")
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) return { ...todo, completed }
            })
        })
    }

    return (
        <>
            <form>
                <label htmlFor="todoItem">
                    New Item
                    <input type="text" id="todoItem" value={newItem} onChange={e => setNewItem(e.target.value)} />
                </label>
                <button type="submit" onClick={handleSubmit} >Add New Item</button>
            </form>
            <ul>
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                            {todo.title}
                        </li>
                    )
                })}
            </ul>
        </>
    );
}