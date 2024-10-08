import React from "react"

export const SingleItem = ({ item }) => {
    return (
        <div className="item-card">
            <ul>
                <li>Name:{item.name}</li>
                <li>Price:{item.price}</li>
                <li>Category:{item.category}</li>
                <li>Description:{item.description}</li>
            </ul>
        </div>
    )
}
