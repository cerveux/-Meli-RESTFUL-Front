import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Buscador from "./components/Buscador";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Item from "./components/Item";
import Mensaje from "./components/Mensaje";
/* const express = require('express');
const app = express(); */

function App() {
  const [data, setData] = useState(null);
  const [item, setItem] = useState(null);
  const [descripcion, setDescripcion] = useState(null);

  const url = "https://meli-restful-api-cerveux.up.railway.app/";
  
  


  function infoItem(respuesta){
    fetch(`${url}item/${respuesta}`)
      .then((res) => res.json())
      .then((item) => setItem(item));
      description(respuesta);
  }
  function description(respuesta){
    fetch(`${url}item/${respuesta}/description`)
      .then((res) => res.json())
      .then((descripcion) => setDescripcion(descripcion))
      /* .then((item) => setItem(item)) */;

  }

  function busqueda(resultado) {
    fetch(`${url}api/${resultado}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  


  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header search={busqueda} />}>
          <Route path="/" element={<Mensaje />} />
            <Route
              path="/results/:result"
              element={
                <>
                  <Buscador  data={data} search={busqueda} />
                </>
              }
            />
            <Route path="/:id" element={
          <><Item item={item} descripcion={descripcion} infoItem={infoItem} /></>}></Route>
          </Route>
          
        </Routes>
      </Router>

      <p></p>
    </div>
  );
}

export default App;
