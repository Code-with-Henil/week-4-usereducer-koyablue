import { useContext } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { TodoContext } from "@/context/todoContext";

const TodoTable = () => {
  const { state: todos, dispatch } = useContext(TodoContext);

  const todosToShow = todos.filter(todo => !todo.isComplete);

  const completeTodo = (id: number) => {
    dispatch({ type: 'TOGGLE', payload: { id } });
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Todos: {todosToShow.length}</TableHead>

          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todosToShow.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium text-left">
              <div className="w-32 truncate">
                {todo.name}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Button
                className="bg-teal-400 border-teal-400 text-white hover:border-teal-300 hover:bg-teal-300"
                onClick={() => completeTodo(todo.id)}
              >
                Done
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoTable;
