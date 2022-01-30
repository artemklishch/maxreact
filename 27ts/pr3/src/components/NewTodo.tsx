import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from '../store/todos-context'

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim() === "") {
      // throw an error
      return;
    }
    todosCtx.addTodo(enteredText)
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todotext">Toso text</label>
      <input ref={todoTextInputRef} type="text" id="todotext" />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewTodo;
