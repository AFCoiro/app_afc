import './Card.css'

const ItemListContainer = (greeting)=>{
    return(
        <div className='ItemList'>
        <h2>{greeting.titulo}</h2> 
        <p>{greeting.text}</p> 
        </div>
    )
}
export default ItemListContainer;