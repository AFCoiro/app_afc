
import './App.css';
import ResponsiveAppBar from './components/NavBar/NavBar'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

          <header>
              <ResponsiveAppBar/>
          </header>

          <Routes>
              <Route path='*' element="error 404- no se encontró la pagina" />
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<Detail />} />
              
          </Routes>

          <footer>
              <p className="Titulo">Diseñado por Agustín Coiro</p>
          </footer>

      </BrowserRouter>
    </div>
  );
}

export default App;
