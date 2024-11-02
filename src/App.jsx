import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBarBootstrap from './components/NavBarBootstrap'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div>
      <NavBarBootstrap />
      <ItemListContainer greeting={"Encontrá los mejores cafes aca"} />
    </div>
  )
}

export default App
