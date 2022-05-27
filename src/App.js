
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
      
        <Grid>
                
              <ItemListContainer />
              

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
