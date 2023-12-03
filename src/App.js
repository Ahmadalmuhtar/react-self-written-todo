import "./App.css";
import React, { useState } from "react";

function App() {

  const [todos, setTodos] = useState([
    { title: "go to school" },
    { title: "go back home" },
    { title: "play Dota" },
  ])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    setTodos(
      [...todos,
      { title: newTodo }]
    )
    setNewTodo("");
  }


  return (
    <>
      <form onSubmit={addTodo}>
        <input onChange={(e) => setNewTodo(e.target.value)} type="text" placeholder="Add Todo here" value={newTodo} />
        <button type="submit">
          Add new Todo!
        </button>
      </form>
      {todos.map((singleTodo, index) => <p key={index}>{singleTodo.title}</p>)}
    </>
  )
}

export default App;