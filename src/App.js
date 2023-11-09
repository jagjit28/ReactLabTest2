import React, { useState } from 'react';
import './App.css';

function App() {
  const [TodoList, setTodoList] = useState([]);
  const [TodoItem, setTodoItem] = useState('');

  const addTask = () => {
    if (TodoItem) {
      setTodoList([...TodoList, { text: TodoItem, completed: false }]);
      setTodoItem('');
    }
  };

  const toggleCompletion = (index) => {
    const newTodoList = TodoList.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTodoList(newTodoList);
  };

  const deleteTask = (index) => {
    const newTodoList = TodoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <input
        value={TodoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {TodoList.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {task.text}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
            />
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;