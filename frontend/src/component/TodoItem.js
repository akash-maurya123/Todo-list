
import React, { useState } from 'react';

const TodoItem = ({ task, onDelete, onEdit }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(task.name);

  const handleInputChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handleEdit = () => {
    onEdit(task.id, newTaskName);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (<input  type="text" value={newTaskName} onChange={handleInputChange}/>)
       : (task.name )}
       
      <div>

        {isEditing ? (
          <button className="btn btn-success mx-2" onClick={handleEdit}>Save</button>
        ) : (
          <button className="btn btn-warning mx-2" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="btn btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
