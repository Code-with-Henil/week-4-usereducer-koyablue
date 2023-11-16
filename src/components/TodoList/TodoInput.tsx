import { useContext, useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TodoContext } from "@/context/todoContext";

const TodoInput = () => {
  const [newTaskName, setNewTaskName] = useState<string>('');
  const { dispatch } = useContext(TodoContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(event.target.value);
  };

  const addTodo = () => {
    dispatch({ type: 'ADD', payload: { taskName: newTaskName } });
    setNewTaskName('');
  };

  return (
    <>
      <Input
        type="text"
        placeholder="New task name"
        value={newTaskName}
        onChange={handleInputChange}
      />
      <Button variant="outline" onClick={addTodo}>Add</Button>
    </>
  );
};

export default TodoInput;
