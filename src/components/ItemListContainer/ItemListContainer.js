import './ItemListContainer.css'
import ItemCount from './ItemCount/ItemCount'


const ItemListContainer = (greeting)=>{   
    const {id,titulo,texto,stock}= greeting;
        return( 
            <div className='ItemList'>
                <h2>{id}-{titulo}</h2> 
                <p>{texto} Stock disponible:{stock}</p> 
                <ItemCount stock={stock}/>
            </div>
            
                )
            }
        
export default ItemListContainer;

