import { Button } from '@mui/material';

const Item = ({id,nombre,titulo,precio,stock,imagen} )=>{ 

return( 
        <div className='ItemClass'>
        <h2 className='titulo'>{nombre} - {titulo}</h2> 
        
        <img src={`/prod/${imagen}`}  alt={nombre} className='imgProd'/>
        <h4>{precio}</h4> 
        <Button href='#' variant="contained" color="error"> DETALLE</Button>

    </div>
    )
}
export default Item;
    

