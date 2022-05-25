
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import React from "react";
import Grid from '@mui/material/Grid';


function App() {

  return (
    <div className="App">
      <header>
      <ResponsiveAppBar/>
      </header>
      
      
        <Grid   container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center" >
            <Grid item md={4}><ItemListContainer id={1} titulo={'Spiderman'} texto={'La última Caceria de Kraven'} stock={5}/>
            </Grid>

            <Grid item md={4}><ItemListContainer id={2} titulo={'Batman'} texto={'Muerte en Familia(Agotado)'} stock={2}/>
            </Grid>
            
            <Grid item md={4}><ItemListContainer id={3} titulo={'Slam Dunk'} texto={'Colección completa de 20 tomos'} stock={3}/>
            </Grid>
          
        </Grid>
      

      
<footer>
        <p className="Titulo">
          Agustín Coiro editó <code>src/App.js</code> y agregó componentes.
        </p>
</footer>



    </div>
  );
}

export default App;
