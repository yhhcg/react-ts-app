import React from 'react';
import { Checkbox, List } from 'antd';

type Todo = Readonly<{
  id: number;
  text: string;
  done: boolean;
}>;

type CompletedTodo = Todo & {
  readonly done: true;
};

interface TodoListState {
  todos: Todo[];
}

export default class TodoList extends React.Component<Record<string, never>, TodoListState> {
  state: TodoListState = {
    todos: [
      { id: 1, text: 'First todo', done: false },
      { id: 2, text: 'Second todo', done: false },
    ],
  };

  onChange: (index: number) => void = (index) => {
    this.handleChange(index);
  };

  handleChange: (index: number) => void = (index) => {
    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos.slice(0, index),
          this.toggleTodo(prevState.todos[index]),
          ...prevState.todos.slice(index + 1),
        ],
      };
    });
  };

  toggleTodo = (todo: Todo): Todo => {
    return {
      ...todo,
      done: !todo.done,
    };
  };

  onChangeAll: () => void = () => {
    this.setState((prevState) => {
      return {
        todos: this.completeAll(prevState.todos),
      };
    });
  };

  completeAll = (todos: readonly Todo[]): CompletedTodo[] => {
    return todos.map((todo) => ({
      ...todo,
      done: true,
    }));
  };

  render(): React.ReactNode {
    const { todos } = this.state;
    return (
      <div>
        <Checkbox onChange={this.onChangeAll}>全选</Checkbox>
        <List
          dataSource={todos}
          renderItem={(item, index) => (
            <List.Item key={item.id}>
              <Checkbox checked={item.done} onChange={() => this.onChange(index)}>
                {item.text}
              </Checkbox>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
