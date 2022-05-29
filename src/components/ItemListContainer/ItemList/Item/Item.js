import ItemCount from './ItemCount/ItemCount';
const Item = ({id,nombre,titulo,precio,stock,imagen} )=>{ 
//   const = listado;
return( 
        <div className='ItemClass'>
        <h2>{id}-{nombre}</h2> 
        <h3>{titulo}</h3>
        <img src={`./../../../public/prod/${imagen}`}  alt={nombre}/>
        <p>{precio} Stock disponible:{stock}</p> 
        <ItemCount stock={stock}/>
    </div>
    )
}
export default Item;
    

