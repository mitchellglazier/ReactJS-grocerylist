import React from 'react'

const Item = ({id, name, price, complete, itemClick}) => {
  return (
    <div
    style={ complete ? {...styles.item, ...styles.complete} : styles.item}
    onClick={() => itemClick(id)}
    >{name}</div>
  )
}

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' }
}

export default Item;
