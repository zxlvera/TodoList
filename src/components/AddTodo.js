import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context';

const AddTodo = () => {

  const appContext = useContext(TodoContext);
  const { addItem } = appContext;

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(title);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit} className="list__add">
      <input type="text"
        name="title"
        placeholder="Add todo..."
        value={title}
        onChange={e => setTitle(e.target.value)} />
      <input
        type="submit"
        value="Submit"
        className="btn"/>
      </form>
  );
}

export default AddTodo
