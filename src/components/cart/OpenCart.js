import React, { useContext } from 'react'
import { UserContext } from '../../store/ProductContext'
import classes from './OpenCart.module.css'

const OpenCart = (props) => {
    const {selectedProduct, increaseQty, decreaseQty, clearQty, toggleOverlay, total} = useContext(UserContext)

   // const [cartItm, setCartItm] = useState(selectedItems);

    const cartItems = selectedProduct.reduce((acc, product) =>{
        const existingProductIndex = acc.findIndex(item => item.id === product.id);
        if(existingProductIndex !== -1){
            acc[existingProductIndex].quantity++;
            acc[existingProductIndex].total += product.price;
        }else{
            acc.push({
                ...product,
                quantity:1,
                total:product.price
            })
        }
        return acc;
    },[])
    
    const addQty = (index)=>{
        increaseQty(index)
    }
    const subtractQty =(index)=>{
        decreaseQty(index)
    }
    const clear = ()=>{
        clearQty();
        toggleOverlay()
    }

    const body = cartItems.map((item, index) =>{
        return(
            <div className={classes.orderBody} key={index}>
                <span className={classes.singleOrder}>{item.name}</span>
                <span className={classes.singleOrder}>{`Rs ${item.price}`}</span>

                <div className={classes.qtyModify}>
                    <button
                    onClick={() =>{
                        subtractQty(index);
                    }}
                    >-</button>
                    <span className={classes.singleQty}>{item.qty}</span>
                    <button
                    onClick={()=>{
                        addQty(index)
                    }}
                    >
                        +
                    </button>
                </div>
                <span className={classes.singleOrder}>
                    {`Rs ${item.price * item.qty}`}
                </span>
            </div>
        )
    })
  return (
    <>
    <h3>Order Summary:</h3>
    {body}
    <div className={classes.totalAmt}>
        {`Total amt is : Rs ${total}`}
    </div>
    <button onClick={toggleOverlay} className={classes.buttonOrder}>Order</button>
    <button onClick={()=> { clear() }} className={classes.buttonClr}>Clear</button>
    </> 
  )
}

export default OpenCart