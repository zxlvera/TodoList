import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {

  return (
    <div className="container">
      <h1 className="header">Todo List with React</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
