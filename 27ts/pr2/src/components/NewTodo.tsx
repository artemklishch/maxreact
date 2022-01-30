import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim() === "") {
      // throw an error
      return;
    }
    props.onAddTodo(enteredText);
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
