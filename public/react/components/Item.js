import React from "react"

export const Item = ({ item }) => {
	return (
		<div className="item-display">
			<div className="item-card">
				<img className="image-size" src={item.image} alt={item.name} />
				<h3>{item.name}</h3>
				<p>{item.price}</p>
			</div>
		</div>
	)
}
