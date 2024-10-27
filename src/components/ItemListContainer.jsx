const ItemListContainer = ({greeting}) => {
    return(
        <div className="hero-section">
            <div>
                <h2>{greeting}</h2>
                <a>Ver cafes</a>
            </div>
            <img src="./image/fondobanerinicio.png" alt="cofyok con fondo granos de cafe" />
        </div>
    )
}
export default ItemListContainer