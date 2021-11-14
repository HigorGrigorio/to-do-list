import React from 'react';
import PropTypes from 'prop-types';
import './Tasks.css';

import { FaWindowClose, FaEdit } from 'react-icons/fa';

// eslint-disable-next-line react/function-component-definition
export default function Tasks({
  tasks, handleEdit, handleDelete,
}) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span className="actions">
            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, index)}
            />
            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
