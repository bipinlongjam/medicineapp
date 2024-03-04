import React, { useContext } from 'react'
import classes from './AddCart.module.css'
import { UserContext } from '../../store/ProductContext';


const heading = ["Med-Name", "Description","Price","Quantity", "Add-To-Cart"];

const AddCart = () => {
  
    const {medArray, setMedArray, addToCart, increaseQty} = useContext(UserContext)

    const addQty= (index)=>{
        increaseQty(index)
    }
    const handleAddToCart = (item) => {
    
        const updatedProduct = { ...item, qty:1};
        addToCart(updatedProduct);
        
        const updatedProducts = medArray.map((product) => {
          if (product.id === item.id) {
            return {...product, qty:product.qty - 1};
          }
          return product;
        });
        
        setMedArray(updatedProducts);
      
    };
    const head =(
        <ul className={[classes.heading, classes.alignedContent].join(" ")}>
            {heading.map((item, index) =>(
                <li key={index}>
                    <h3>{item}</h3>
                </li>
            ))}
        </ul>
    )
    const body = medArray.map((item, index) => (
        <div
          key={index}
          className={[classes.meds, classes.alignedContent].join(" ")}
        >
          <span>{item.name}</span>
          <span>{item.desc}</span>
          <span>{item.price}</span>
          <span>{item.qty}</span>
          {/* <button
            onClick={() => {
              handleAddToCart(item);
            }}
          >
            Add To Cart
          </button> */}
          {item.qty > 0 ? (
                <button
                    onClick={() => {
                        handleAddToCart(item);
                    }}
                >
                    Add To Cart
                </button>
            ) : (
                <button disabled style={{ backgroundColor: 'gray' }}>
                    Add To Cart
                </button>
            )}
        </div>
      ));

  return (
    <div>
    {head}
    {body}
    </div>
  )
}

export default AddCart