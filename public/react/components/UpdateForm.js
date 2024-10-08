import { useState } from "react"
import apiURL from "../api"

export const UpdateForm = ({ item, itemRefresh, setItemrefresh }) => {
	const [itemUpdate, setItemUpdate] = useState({
		name: item.name,
		description: item.description,
		price: item.price,
		category: item.category,
		image: item.image,
	})

	async function handleEdit(e) {
		e.preventDefault()
		const itemKey = item.id
		const res = await fetch(`${apiURL}/items/${itemKey}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(itemUpdate),
		})
		const data = await res.json()
		setItemrefresh(!itemRefresh)
	}

	return (
		<>
			<h3>Edit {item.name}</h3>
			<form onSubmit={handleEdit}>
				<input type="text" value={itemUpdate.name} onChange={(e) => setItemUpdate({ ...itemUpdate, name: e.target.value })} />
				<br />
				<input type="text" value={itemUpdate.description} onChange={(e) => setItemUpdate({ ...itemUpdate, description: e.target.value })} />
				<br />
				<input type="number" value={itemUpdate.price} onChange={(e) => setItemUpdate({ ...itemUpdate, price: e.target.value })} />
				<br />
				<input type="text" value={itemUpdate.category} onChange={(e) => setItemUpdate({ ...itemUpdate, category: e.target.value })} />
				<br />
				<input type="text" value={itemUpdate.image} onChange={(e) => setItemUpdate({ ...itemUpdate, image: e.target.value })} />
				<br />
				<button type="submit">Submit</button>
			</form>
		</>
	)
}
