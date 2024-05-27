// Imports
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/** NewItemsForm Component
 * 
 * This component renders a form that lets users select a menu type (food or drink) and add a new item to the menu.
 * 
 * Props: 
 * - addItem: a function to add a new item to either snacks or drinks.
 * 
 * State:
 * - formData: an object containing the form data
 */
const NewItemsForm = ({ addSnack, addDrink }) => {
    // Hooks
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ itemCategory: "", name: "", description: "", recipe: "", serve: "" });

    // Helper Methods
    const addItem = (formData) => {
        // get the category of the item
        const category = formData.itemCategory;
        // check if the item is food or drink
        if (category !== "food" && category !== "drinks") return alert("Please select a valid category");
        // add item to the appropriate menu
        if (category === "food") addSnack(formData);
        if (category === "drinks") addDrink(formData)
        // navigate back to the home page
        navigate("/");
    }

    // Event Handlers
    // Handles changes to the form data
    const handleChange = (evt) => {
        const { name, value} = evt.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    }

    // Handles form submission
    const handleSubmit = (evt) => {
        evt.preventDefault();

        if(formData.menuType === "food") {
            addSnack(formData);
        }

        if(formData.menuType === "drinks") {
            addDrink(formData);
        }

        addItem(formData);
        navigate("/");
    }

    // Render
    return (
        <form className="NewItemsForm" onSubmit={handleSubmit}>

            <label htmlFor="itemCategory">Item Category</label>
            <select id="itemCategory" name="itemCategory" onChange={handleChange}>
                <option value="food">Food</option>
                <option value="drinks">Drinks</option>
            </select>

            <label htmlFor="name">Name</label>
            <input id="name" name="name" onChange={handleChange} />

            <label htmlFor="description">Description</label>
            <input id="description" name="description" onChange={handleChange} />

            <label htmlFor="recipe">Recipe</label>
            <input id="recipe" name="recipe" onChange={handleChange} />
            
            <label htmlFor="serve">Serve</label>
            <input id="serve" name="serve" onChange={handleChange} />

            <button>Add Item</button>
        </form>
    )
};

// Exports
export default NewItemsForm;