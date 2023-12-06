import "./App.css";
import React, { useState } from "react";

export default function App() {

  const [todos, setTodos] = useState([])
  const [newItem, setNewItem] = useState("")


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
        <label htmlFor="newItemInput">New Item </label>
        <input type="text" id="newItemInput" placeholder="Enter new Todo here" value={newItem}
          onChange={e => setNewItem(e.target.value)} />
        <button type="submit" onClick={handleSubmit} >
          Add
        </button>
        <ul>
          {todos.map(todo => {
            return (
              <li key={todo.id}>
                <label>
                  <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                  {todo.title}
                </label>
              </li>
            )
          })}
        </ul>
      </form >
    </>
  );
}