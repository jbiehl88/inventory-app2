import React from "react"

export const Item = ({ item }) => {
	return (
		<div className="item-card">
			<img className="image-size" src={item.image} alt={item.name} />
			<h3 className="item-name">{item.name}</h3>
			<p className="item-price">{item.price}</p>
		</div>
	)
}
