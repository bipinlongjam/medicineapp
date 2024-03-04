import React, { useContext } from 'react'
import { UserContext } from '../../store/ProductContext'
import classes from './Overlay.module.css'

const Overlay = (props) => {
  const product = useContext(UserContext)

  return (
    <div>
   {product.showOverlay &&(
        <div className={classes.overlay}>
        <div className={classes["overlay-content"]}>{props.children}</div>
        </div>
     )}     
    </div>
  )
}

export default Overlay