import React from 'react'

const TodoItem = ({ item, markComplete, delItem }) => {

  const itemStyle = {
    textDecoration: item.completed ? 'line-through' : 'none'
  }

  const handleChange = () => {
    markComplete(item.id);
  }

  const deleteItem = () => {
    delItem(item.id);
  }

  return (
    <div style={itemStyle} className="list__item">
      <p>

        <button className="btn__del"
          onClick={deleteItem}><span>❌</span></button>
        {item.completed ?
          <button className="btn__done" key={item.id}
            onClick={handleChange}><span>🌝</span></button>
          :
          <button className="btn__done" key={item.id}
            onClick={handleChange}><span>😫</span></button>
        }
        {item.title}

      </p>
    </div>
  )
}

export default TodoItem
