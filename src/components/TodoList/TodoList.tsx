import TodoInput from "./TodoInput"
import TodoTable from "./TodoTable"

const TodoList = () => (
  <div className="w-full flex flex-col items-center justify-center">
    <div className="w-1/2">
      <div className="flex gap-2">
        <TodoInput />
      </div>
      <TodoTable />
    </div>
  </div>
);

export default TodoList;
