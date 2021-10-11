import React, { useReducer } from 'react';
import { Checkbox, List } from 'antd';

type Todo = Readonly<{
  id: number;
  text: string;
  done: boolean;
}>;

type TODOSACTIONTYPE = { type: 'toggle'; payload: number } | { type: 'completeAll' };

const initialTodosState: Todo[] = [
  { id: 1, text: 'First todo', done: false },
  { id: 2, text: 'Second todo', done: false },
];

const todosReducer = (state: typeof initialTodosState, action: TODOSACTIONTYPE) => {
  switch (action.type) {
    case 'toggle':
      return [
        ...state.slice(0, action.payload),
        {
          ...state[action.payload],
          done: !state[action.payload].done,
        },
        ...state.slice(action.payload + 1),
      ];
    case 'completeAll':
      return state.map((item) => ({
        ...item,
        done: true,
      }));
    default:
      throw new Error();
  }
};

const TodoListHook: React.FC = () => {
  const [todosState, dispatchTodos] = useReducer(todosReducer, initialTodosState);

  const handleAllChange = () => {
    dispatchTodos({ type: 'completeAll' });
  };

  const handleChange = (index: number) => {
    dispatchTodos({ type: 'toggle', payload: index });
  };

  return (
    <div>
      hook
      <Checkbox onChange={handleAllChange}>全选</Checkbox>
      <List
        dataSource={todosState}
        renderItem={(item, index) => (
          <List.Item key={item.id}>
            <Checkbox checked={item.done} onChange={() => handleChange(index)}>
              {item.text}
            </Checkbox>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListHook;
