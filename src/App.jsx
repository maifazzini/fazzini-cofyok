import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Encontrá los mejores cafes aca"} />
    </div>
  )
}

export default App
