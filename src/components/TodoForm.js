import React, { useState } from "react";


export default function TodoForm(props) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input1)
    props.addTodo(input2)
    setInput1("")
    
  }
  

  return (
    <div>

    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        className="todo-input"
        placeholder="Hari Ini Mau Ngapain?"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        className="todo-input"
        placeholder="Hari Ini  Ngapain?"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
    </div>
    
  );
}