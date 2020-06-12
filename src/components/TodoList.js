import React, { useContext } from 'react'
import TodoItem from '../components/TodoItem';
import { TodoContext } from '../Context';

const TodoList = () => {
  const appContext = useContext(TodoContext);
  const { items, markComplete, delItem } = appContext;

  return (
    items.map((item => (
      <TodoItem
        key={item.id}
        item={item}
        markComplete={markComplete}
        delItem={delItem}
      />
    )))
  )
}

export default TodoList
