
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  const handleInputChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const addTask = () => {
    if (newTaskName !== '') {
      const newTask = {  id: tasks.length + 1,
        name: newTaskName,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
    }
  };

  const deleteTask = (taskId) => {

    const updatedTasks = tasks.filter(task => task.id !== taskId);

    setTasks(updatedTasks);
  };

  const editTask = (taskId, newName) => {

    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add Data</h1>
      <div className="mb-3">
        <input type="text"  placeholder="Enter Data " value={newTaskName} onChange={handleInputChange}
        />
        <button className="btn btn-primary ml-2 m-2" onClick={addTask}>Add Task</button>
      </div>
      <ul className="list-group">
        {tasks.map(task => (
          <TodoItem key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
