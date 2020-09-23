import React, { useState } from 'react';
import { TodoList } from '../TodoList/TodoList';

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({});
  const [todoTitle, setTodoTitle] = useState('title');

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      setNewTodo({
        id: todos.length,
        title: todoTitle,
        completed: false,
      });

      setTodos([...todos, newTodo]);
    }
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={event => event.preventDefault()}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            value={todoTitle}
            onChange={event => setTodoTitle(event.target.value)}
            onKeyDown={event => addTodo(event)}
          />
        </form>
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList todos={todos} />

      </section>

      <footer className="footer">
        <span className="todo-count">
          3 items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </>
  );
};
