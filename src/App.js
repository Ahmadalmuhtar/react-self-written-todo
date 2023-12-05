import "./App.css";
import React, { useState } from "react";

 export default function App() {

  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])




function handleSubmit(e) {
  e.preventDefault()
  setTodos([
    ...todos, {id: crypto.randomUUID, title: newItem, completed: false},
  ])
}


  return (
    <>
      <form>
        <label htmlFor="addTodo">
          Add New Item
          <input type="text" id="addTodo" value={newItem} onChange={e => setNewItem(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Add Item</button>
      </form>

      <ul>
        {todos.map(todo => {
          return(
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              {todo.title}
            </label>
          </li>)
        })}
      </ul>
    </>
  );}