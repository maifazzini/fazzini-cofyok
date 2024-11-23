import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarBootstrap from './components/NavBarBootstrap'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBarBootstrap />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Encontrá los mejores cafes aca"} />} />
          <Route path='/categoria/:categoriaid' element={<ItemListContainer greeting={"Encontrá los mejores cafes aca"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
