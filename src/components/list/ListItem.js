import React from 'react'

const ListItem = ({ item, remove }) => {
	return (
		<div>
			{item.text}
			<i
				className="far fa-trash-alt"
				onClick={() => {
					remove(item.id)
				}}
			/>
		</div>
	)
}

export default ListItem
