import React, { useContext } from 'react'
import classes from './AddProduct.module.css'
import { UserContext } from '../../store/ProductContext'

const AddProduct = () => {
    const product = useContext(UserContext)

    const handleSubmit =(event)=>{
        event.preventDefault();
        const obj = {
            name:event.target.name.value,
            desc:event.target.desc.value,
            price:event.target.price.value,
            qty:event.target.quantity.value
        }
        product.addProduct(obj);
        console.log("addItems",product)
    }
  return (
    <div className={classes.form}>
       <form  onSubmit={handleSubmit} > 
        <span>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name"/>
        </span>
        <span>
            <label htmlFor="desc">Desc</label>
            <input type="text" id="desc" name="desc"/>
        </span>
        <span>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price"/>
        </span>
        <span>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity"/>
        </span>
        <span>
            <button type="submit" className={classes.button}>
            {" "}
                Add Product</button>
        </span>
    </form>     
    </div>
  )
}

export default AddProduct