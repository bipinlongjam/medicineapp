
import { useState } from 'react';
import OpenCart from './components/cart/OpenCart';
import AddCart from './components/form/AddCart';
import AddProduct from './components/form/AddProduct';
import Header from './components/header/Header';
import Overlay from './components/overlay/Overlay';
import UserContextProvider from './store/ProductContext';

function App() {
  // const[showOverlay, setShowOverlay] = useState(false)
  // const toggleOverlay =()=>{
  //   setShowOverlay(!showOverlay)
  // }
  return (
    <>  
    <UserContextProvider>
        <Header/>
        <AddProduct/>
        <AddCart/>
        <Overlay>
          <OpenCart/>
        </Overlay>
    </UserContextProvider>
    </>
  );
}

export default App;
