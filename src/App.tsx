import './App.css'
import { TodoContextProvider } from './context/todoContext';
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  )
}

export default App
