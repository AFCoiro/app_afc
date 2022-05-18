
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Card/Card'
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
            <grid item md={4}><ItemListContainer titulo={'Hola'} text={'Idioma español'}/>
            </grid>

            <grid item md={4}><ItemListContainer titulo={'Hello'} text={'Idioma ingles'}/>
            </grid>
            
            <grid item md={4}><ItemListContainer titulo={'Ciao'} text={'Idioma italiano'}/>
            </grid>
          
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
