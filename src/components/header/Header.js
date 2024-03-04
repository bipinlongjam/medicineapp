import React, { useContext } from 'react'
import classes from './Herder.module.css'
import { UserContext } from '../../store/ProductContext'

const Header = () => {
    const product = useContext(UserContext)

  return (
    <div className={classes.header}>
        <h1>Medicine Order App</h1>
        <div className={classes.cart} onClick={product.toggleOverlay}>
            <span>Cart</span>
            <span> ({product.counter})</span>
        </div>
    </div>
  )
}

export default Header