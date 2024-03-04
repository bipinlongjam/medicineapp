import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    medArray:[],
    counter:0,
    total:0,
    addProduct: () =>{},
    increaseQty: ()=>{},
    decreaseQty:()=>{},
    clearQty:()=>{},
    showOverlay:false,
    toggleOverlay:()=>{}
})
const obj = [
    {id: 1, name: "Paracetamol", desc: "It relieves fever", price: 50, qty: 10 },
    {id:2, name: "Coldoff", desc: "It relieves Cold", price: 30, qty: 20 },
    {id:3, name: "Painkiller", desc: "It relieves pain", price: 20, qty: 15 },
];

const UserContextProvider =(props) =>{
    const [medArray, setMedArray] = useState(obj);
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0);

    const[showOverlay, setShowOverlay] = useState(false)
    
    const toggleOverlay =() =>{
        setShowOverlay(!showOverlay)
    }
    useEffect(() =>{
        const totalCount = selectedProduct.reduce((total, item) => total + item.qty, 0)
        setCounter(totalCount) 
    },[medArray])
    useEffect(()=>{
        const totalCount = selectedProduct.reduce((total, item) => total + item.qty * item.price, 0)
        setTotal(()=>totalCount)
    },[medArray])
    
    const addProduct = (newItem)=>{
        setMedArray([...medArray, newItem])
    }
    const addToCart = (items) => {
        // You can add any additional logic here before adding the product to the cart
        setSelectedProduct([...medArray, items]);
      };
    const increaseQty =(index) =>{
        setSelectedProduct((prev) =>{
            const newArray = [...prev];
            newArray[index] = {...newArray[index], qty:newArray[index].qty+1}
            return newArray;
        })
    }
    const decreaseQty =(index) =>{
        setSelectedProduct((prev) =>{
            const newArray = [...prev];
            newArray[index] = {...newArray[index],qty:newArray[index].qty-1}
            return newArray;
        })
    }
    const clearQty =()=>{
        setSelectedProduct([]);
        setMedArray([]);
    };
return(
    <>
    <UserContext.Provider
        value={{
            medArray,
            setMedArray,
            selectedProduct,
            counter,
            total,
            addProduct,
            increaseQty,
            decreaseQty,
            clearQty,
            showOverlay,
            toggleOverlay,
            addToCart
        }}
    >
        {props.children}
    </UserContext.Provider>
    </>
)
}
export default UserContextProvider;