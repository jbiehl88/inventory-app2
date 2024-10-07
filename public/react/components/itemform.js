import React, {useState} from 'react';

const ItemForm = () => {
    const [itemName, setItemName] = useState('')
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('electronics')

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            itemName,
            description,
            price: parseFloat(price),
            category,
        };

        console.log(item);

        setItemName('');
        setDescription('');
        setPrice('');
        setCategory('electronics');
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

             <button type='submit'>Add Item</button>
        </form>
    );
};

export default ItemForm