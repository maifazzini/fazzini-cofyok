import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarBootstrap from './components/NavBarBootstrap'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView';
import Checkout from './components/Checkout';


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBarBootstrap />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Encontrá los mejores cafes aca"} />} />
            <Route path='/categoria/:categoriaid' element={<ItemListContainer greeting={"Encontrá los mejores cafes aca"} />} />
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartView/>}/>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
