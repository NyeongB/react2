import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem todo={todo}></TodoListItem>
      ))}
    </div>
  );
};

export default TodoList;
