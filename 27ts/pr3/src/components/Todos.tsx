import { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id + item.text}
          text={item.text}
          onRemove={() => todosCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
