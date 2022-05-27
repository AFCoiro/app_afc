import { useState , useEffect } from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList/ItemList'
import Grid from '@mui/material/Grid';

const ItemListContainer = ()=>{   
    const  [list, setList] = useState([])
    const listados = [
        {
            id:1,
            nombre:'Spiderman',
            titulo:'La última Caceria de Kraven',
            precio:'$1.300',
            stock:5

        },
        {
            id:2,
            nombre:'Batman',
            titulo:'Una muerte en la Familia(Agotado)',
            precio:'$1.500',
            stock:0
        },
        {
            id:3,
            nombre:'Slam Dunk',
            titulo:'Colección completa de 20 tomos',
            precio:'$12.000',
            stock:3
        }
    ] 
    const getItems = ()=>{
        return new Promise( (resolve)=>{
            setTimeout(() => {
                resolve(listados)
            }, 2000);
            
        })
    }
    useEffect(()=>{
        getItems()
        .then( (resp)=>{
            setList(resp)
        })
        .catch((err)=>{
            console.log('no anda', err)
        })
    
    }, [])
    return(
        <>
        <h2>Comics Destacados</h2>
        <Grid   
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center" >                    

            <ItemList listaProd={list} />

        </Grid>
        </>                 
        );
    }
        
export default ItemListContainer;

