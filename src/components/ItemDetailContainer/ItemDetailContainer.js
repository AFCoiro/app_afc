import { useEffect , useState } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import {listado} from '../../utils/DataMock';

const ItemDetailContainer = ()=>{
    const  [data, setData] = useState([])

    const getItems = ()=>{
        return new Promise( (resolve)=>{
            setTimeout(() => {
                resolve(listado)
            }, 3000);   
        })
    }

    useEffect( ()=>{
        getItems()
        .then( (resp)=>{
            setData(resp)
        })
  
    }, [])

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer; 