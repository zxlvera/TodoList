import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid';

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const funData = [
    {
      id: uuid(),
      title: "Write some tasks here",
      complete: false
    },
    
    {
      id: uuid(),
      title: "Created by",
      complete: false
    },
    {
      id: uuid(),
      title: "Vera @ github.com/zxlvera",
      complete: false
    },
  ]
  const getData = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users/1/todos');
    const data = await response.json();
    setItems(funData,...data);
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
    <TodoContext.Provider value={{
      items,
      addItem,
      markComplete,
      delItem
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoProvider, TodoContext }
