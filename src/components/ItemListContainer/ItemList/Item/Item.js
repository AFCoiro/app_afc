import ItemCount from './ItemCount/ItemCount';
const Item = ({id,nombre,titulo,precio,stock} )=>{ 
//   const = listado;
return( 
        <div className='ItemClass'>
        <h2>{id}-{nombre}</h2> 
        <h3>{titulo}</h3>
        <p>{precio} Stock disponible:{stock}</p> 
        <ItemCount stock={stock}/>
    </div>
    )
}
export default Item;
    

