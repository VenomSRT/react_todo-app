import React from 'react';
import propTypes from 'prop-types';

export const TodoItem = ({ todo }) => (
  <>
    <div className="view">
      <input type="checkbox" className="toggle" />
      <label>{todo.title}</label>
      <button type="button" className="destroy" />
    </div>
    <input type="text" className="edit" />
  </>
);

TodoItem.propTypes = {
  todo: propTypes.objectOf({
    title: propTypes.string.isRequired,
  }).isRequired,
};
