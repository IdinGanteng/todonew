import React, { useState } from "react";


export default function TodoForm1(props) {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input1)
    props.addTodo(input2)
    setInput1("")
    console.log(input1);
    localStorage.setItem("succes:",JSON.stringify(input1));
  }
  

  return (
    <div>
    <form className="todo-form">
      <input
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        className="todo-input"
        placeholder="Hari Ini  Ngapain?1"
      />
      <input
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        className="todo-input"
        placeholder="Hari Ini  Ngapain?2"
      />
    </form>
      <button onClick={handleSubmit} className="todo-button">Add Todo</button>
    </div>
    
  );
}