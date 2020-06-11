import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { v4 as uuid } from 'uuid';
import './App.scss';

const App = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users/1/todos');
    const data = await response.json();
    setItems(data);
  }

  const addItem = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    setItems([newTodo, ...items]);
  }

  const markComplete = (id) => {
    
    setItems(items.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    } 
    ));
  }

  const delItem = (id) => { 
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <AddTodo addItem={addItem} />
      <TodoList 
      items={items} 
      markComplete={markComplete} 
      delItem={delItem} />
    </div>
  );
}

export default App;
