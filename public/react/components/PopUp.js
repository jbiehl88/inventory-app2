import React from "react"

export const PopUp = ({ item }) => {
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

//the reason why you can have a destructed prop in here is because the component is being called elsewhere. This component is being called in Item??