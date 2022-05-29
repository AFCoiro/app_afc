import './ItemDetail.css'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';

const ItemDetail= ({data})=>{
    const {id,nombre,titulo,precio,imagen,desc} = data;

    return(
        <>
        <h1>{nombre} {id}-{titulo}</h1>

        <Grid container> 
            <Grid item md={6}>
                <div>           
                    <img src={`./${imagen}`} />   
                </div>
            </Grid>

            <Grid item md={6}>
                <h2>{precio}</h2>
                <p> 12 cuotas sin interés - 20% de descuento pagando con Efectivo Contraentrega para Envíos en moto- Transferencia o Deposito bancario - Efectivo o Débito en sucursal Quilmes</p>
                <Button href='#' variant="contained" color="error"> Agregar al Carrito</Button>
            </Grid>

        </Grid>

        <Grid >
            <h2>Descripción</h2>
            <p>{desc}</p>
        </Grid>
            


        </>
    )

}
export default ItemDetail;

