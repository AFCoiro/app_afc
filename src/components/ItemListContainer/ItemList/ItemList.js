import Item from './Item/Item';


const ItemList = ({listaProd})=>{  
    return( 
        listaProd.map( ({id,nombre,titulo,precio,stock} )=>{
            return(
                <div item md={4} key={listaProd.id}>
                    <Item id={id} nombre={nombre} titulo={titulo} precio={precio} stock={stock}  />
                </div>   
            )
        })        
    )
}

export default ItemList;