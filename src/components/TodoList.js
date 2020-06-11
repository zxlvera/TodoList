import React from 'react'
import TodoItem from '../components/TodoItem';

const TodoList = ({ items, markComplete, delItem }) => {
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
