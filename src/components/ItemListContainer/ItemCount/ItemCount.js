import { useState } from 'react';
import { Button } from '@mui/material';


// const onAdd = (count)=>{
    
//     return(
//         console.log(`Compraste ${count}`)
//     )
// }


const ItemCount = (stock)=>{
    const [count, setCount] =useState(1);
    return(
        <>
            <div className='Contador'>
                <Button onClick={()=> setCount(count - 1)} disabled={count === 0}>-</Button>
                <p>{count}</p>
                <Button onClick={()=> setCount(count + 1)} disabled={count === {stock}}>+</Button>
            </div>
            <Button onClick={()=> console.log(`Compraste ${count} de un stock de ${{stock}}`)}>COMPRAR</Button>

         </>
    )

}
export default ItemCount;