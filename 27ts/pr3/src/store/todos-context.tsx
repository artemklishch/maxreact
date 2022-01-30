import React, { useState } from 'react'
import Todo from "../models/todo";

type TodosContextType = {
  items: Todo[];
  addTodo: (test: string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  addTodo: () => { },
  removeTodo: (id: string) => { }
})
const TodosProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (textValue: string) => {
    const newTodo = new Todo(textValue)
    setTodos(prevTodos => [...prevTodos, newTodo])
  }
  const removeItemHandler = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id))
  }
  const contextValue: TodosContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeItemHandler
  }
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}
export default TodosProvider