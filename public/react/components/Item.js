import React from "react"

export const Item = ({ item }) => {
	const currency = item.price.toFixed(2)
	return (
		<div className="item-card">
			<img className="image-size" src={item.image} alt={item.name} />
			<h3 className="item-name">{item.name}</h3>
			<p className="item-price">${currency}</p>
		</div>
	)
}
