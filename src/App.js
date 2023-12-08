import "./App.css";
import React, { useEffect, useState } from "react";

export default function App() {

    const [newItem, setNewItem] = useState("")
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) return[]
        return JSON.parse(localValue)
})

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])


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
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }

    function deleteTodo(id){
        setTodos(currentTodos => {
            return currentTodos.filter(todo => id !== todo.id)
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
                {todos.length === 0 && "No Todos"}
                {todos.map(todo => {
                    return (
                        <li key={todo.id}>
                            <label>
                            <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                            {todo.title}
                            </label>
                        <button onClick={() => deleteTodo(todo.id)} >
                            Delete
                        </button>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}