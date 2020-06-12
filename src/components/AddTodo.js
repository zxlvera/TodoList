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
      <input className="form__input"
        type="text"
        name="title"
        placeholder="Add todo..."
        value={title}
        onChange={e => setTitle(e.target.value)} />
    </form>
  );
}

export default AddTodo
