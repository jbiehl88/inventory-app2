import React, { useState } from "react";
// add single view to Item (Tiff)
import { PopUp } from "react";

export const Item = ({ item }) => {
	const currency = item.price.toFixed(2)
	//added
	const [isImgClicked, setIsImageClicked] = useState(false);

	function handleImgClick() {
		setIsImageClicked(true);
	}

	function handleClose() {
		setIsImageClicked(false);
	}

	
	return (
		<div className="item-card">
			<img className="image-size" src={item.image} alt={item.name} onClick={handleImgClick}/>
			{/* {isImgClicked && <PopUp item ={item} onClose={handleClose}/>} */}
			<h3 className="item-name">{item.name}</h3>
			<p className="item-price">${currency}</p>
		</div>
	)
}
