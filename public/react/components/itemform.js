import React, {useState} from 'react';
import { create } from 'react-test-renderer/cjs/react-test-renderer.production.min';
import apiURL from '../api';

export const ItemForm = () => {
    const [itemName, setItemName] = useState('')
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('')
    const [itemimage, setItemImage] = useState('')

    const item = {
       name:itemName,
       description:description,
       price:price, 
       category:category,
       image: itemimage,
    };

    const handleSubmit = async(event) => {
        event.preventDefault();

       

        const response = await fetch(`${apiURL}/items`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(item)
        })

        const data = await response.json()

        setItemName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setItemImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Item</h2>

            <label htmlFor='item-name'>Item Name:</label>
            <input 
             type='text'
             id='item-name'
             value={itemName}
             onChange={(e) => setItemName(e.target.value)} 
             requied
             /><br/>

             <label htmlFor='description'>Description:</label>
             <input
                type='text'
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                required
             ></input><br/>

             <label htmlFor='price'>Price:</label>
             <input
             type='text'
             id='price'
             value={price}
             onChange={(e) => setPrice(e.value.target)}
             min='0'
             step='0.01'
             required
             /><br/>

             <label htmlFor='category'>Category:</label>
             <input
             type='text'
             id='category'
             value={category}
             onChange={(e) => setCategory(e.target.value)}
             required
             /><br/>

             <label htmlFor='image'>Image:</label> 
             <input
                type='text'
                id='image'
                value={itemimage}
                onChange={(e) => setItemImage(e.target.value)}
             /><br />
             
             <button type='submit'>Add Item</button>
        </form> 
    );
};
