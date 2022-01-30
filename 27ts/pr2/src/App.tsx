import { useState } from 'react'
import './App.css';
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodoHandler = (textValue: string) => {
    const newTodo = new Todo(textValue)
    setTodos(prevTodos => [...prevTodos, newTodo])
  }
  const removeItemHandler = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id))
  }
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeItemHandler} />
    </div>
  );
}

export default App;
