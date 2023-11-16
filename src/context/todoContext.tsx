import React, { createContext, useReducer, ReactNode } from 'react';
import { initialTodos } from '@/data/todos';

export type Todo = {
  id: number;
  name: string;
  isComplete: boolean;
}

export type Action =
  | { type: 'ADD'; payload: { taskName: string } }
  | { type: 'TOGGLE'; payload: { id: number } }

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), name: action.payload.taskName, isComplete: false }];
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
    default:
      throw new Error('Unhandled action');
  }
};

type TodoContextProps = {
  state: Todo[];
  dispatch: React.Dispatch<Action>;
}

export const TodoContext = createContext<TodoContextProps>({
  state: [],
  dispatch: () => null,
});

export const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
