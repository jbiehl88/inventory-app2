
import React, { useState, useEffect } from "react"
import { ItemList } from "./ItemList"

import {ItemForm} from "./ItemForm"
import { SingleItem } from "./SingleItem"


// import and prepend the api url to any fetch calls
import apiURL from "../api"
import { handle } from "express/lib/application"

export const App = () => {
	const [items, setItems] = useState([])
	const [singleItem, setSingleItem] = useState(null);	
	const [addView, setAddView] = useState(false);
	const [itemRefresh, setItemRefresh] = useState(false)


	async function fetchItems() {
		try {
			const response = await fetch(`${apiURL}/items`)
			const itemsData = await response.json()

			setItems(itemsData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchItems()
	}, [itemRefresh])

	//To fetch single item 
	async function fetchItemById (id){	
		try {
			const response = await fetch(`${apiURL}/items/${id}`)
			const data = await response.json();
			setSingleItem(data);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	  }

	async function deleteItem(id) {
		try {

			const response = await fetch(`${apiURL}/items/${id}`, {
				method: "DELETE",
			})
			const data = await response.json()
			console.log("Item deleted: ", data)

			// Re-fetch the updated list of Items
			const updatedItemsResponse = await fetch(`${apiURL}/`)
			const updatedItemsData = await updatedItemsResponse.json()
			setItems(updatedItemsData)

			// Switch back to the list view after deletion

		} catch (err) {
			console.log("Error deleting item: ", err)
		}	 

	}
	 function handleAddClick(e){
		setAddView(!addView)
	 }

	return (
		<main>
			<h1 className="header">Tee-JAM Store<button onClick={handleAddClick}>Add Item</button></h1>
			<h2 className="subheader">All items 🔥</h2>
			{addView?<ItemForm/>:
				<>
						<div className="item-display">
						{singleItem ? <SingleItem item={singleItem} /> : 
							<ItemList items={items} onItemClick={fetchItemById} />			
						}
						</div>
				</>
			}
		</main>
	)
}
=======
import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { SingleItem } from "./SingleItem";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);

  const [singleItem, setSingleItem] = useState(null);

  const [itemRefresh, setItemRefresh] = useState(false);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();

      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [itemRefresh]);

  //To fetch single item
  async function fetchItemById(id) {
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const data = await response.json();
      setSingleItem(data);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function deleteItem(id) {
    try {
      const response = await fetch(`${apiURL}/items/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log("Item deleted: ", data);

      // Re-fetch the updated list of Items
      const updatedItemsResponse = await fetch(`${apiURL}/items`);
      const updatedItemsData = await updatedItemsResponse.json();
      setItems(updatedItemsData);

      // Switch back to the list view after deletion
    } catch (err) {
      console.log("Error deleting item: ", err);
    }
  }
 //go Back to Item list
 function goBackToList() {
    setSingleItem(null);
  } 

  return (
    <main>
      <h1 className="header">Tee-JAM Store</h1>
      <h2 className="subheader">All items 🔥</h2>
      <div className="item-display">
        {singleItem ? (
          <SingleItem item={singleItem}  goBack={goBackToList}
          deleteItem={deleteItem} />
        ) : (
          <ItemList items={items} onItemClick={fetchItemById} />
        )}
      </div>
    </main>
  );
};

