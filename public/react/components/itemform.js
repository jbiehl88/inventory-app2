import React, {useState} from 'react';
import { create } from 'react-test-renderer/cjs/react-test-renderer.production.min';
import apiURL from '../api';

const ItemForm = () => {
    const [itemName, setItemName] = useState('')
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('')
    const [itemimage, setItemImage] = useState('')

    const item = {
       name:itemName,
       description:description,
       price:price, //fix this
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
        setCategory('');// check this
        setItemImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Item</h2>

            <label htmlFor='item-name'>item Name:</label>
            <input 
             type='text'
             id='item-name'
             value={itemName}
             onChange={(e) => setItemName(e.target.value)} 
             requied
             /><br/>

             <label htmlFor='description'>Description:</label>
             <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                required
             ></textarea><br/>

             <label htmlFor='price'>Price:</label>
             <input
             type='number'
             id='price'
             value={price}
             onChange={(e) => setPrice(e.value.target)}
             min='0'
             step='0.01'
             required
             /><br/>

             <label htmlFor='category'>Category</label>
             <select
             id='category'
             value={category}
             onChange={(e) => setCategory(e.target.value)}
             required
             />

             <label htmlFor='image'>Image:</label> 
             <input
                type='file'
                id='image'
                value={itemimage}
                onChange={(e) => setItemImage(e.target.value)}
             /><br />
             
             <button type='submit'>Add Item</button>
        </form> 
    );
};

export default ItemForm