import React from 'react'
import ListItem from './ListItem'

const List = ({ items, remove }) => {
	return items.length ? (
		<div className="itemList">{items.map((item) => <ListItem item={item} key={item.id} remove={remove} />)}</div>
	) : (
		<p>Your list is empty!</p>
	)
}

export default List
