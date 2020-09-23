import React from 'react';
import propTypes from 'prop-types';
import ClassNames from 'classnames';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={ClassNames({ completed: todo.completed })}
      >
        <TodoItem todo={todo} />
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: propTypes.arrayOf({
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired,
  }).isRequired,
};
