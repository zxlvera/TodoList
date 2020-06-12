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
        <button className="btn__del" key={item.id}
          onClick={deleteItem}>❌</button>
        {item.completed ?
          <input
            type="checkbox"
            value={item.id}
            onChange={handleChange}
            checked={true} />
          :
          <input
            type="checkbox"
            value={item.id}
            onChange={handleChange}
            checked={false}
          />
        }
        {item.title}

      </p>
    </div>
  )
}

export default TodoItem
