import "./App.css";
import React, { useState, useEffect } from "react";
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

  const condUrl1 = "https://meli-restful-api-cerveux.up.railway.app/";
  const condUrl2 = "https://meli-restful-api-cerveux.onrender.com/";
  let url = "";

  useEffect(() => {
    fetch(condUrl2)
      .then((res) => (res.json()))
      .catch(err => console.error(err))

    fetch(condUrl1)
      .then((res) => (res.json()))
      .then(item => item.status)
      .then(item => (item === "server running") ? (url = condUrl1) : (url = condUrl2) )
      .catch(err => console.error(err))
    
  }, []);
  
  


  function infoItem(respuesta){
    fetch(`${url}item/${respuesta}`)
      .then((res) => res.json())
      .then((item) => setItem(item))
      .catch((err)=> console.log(err));
      description(respuesta);
  }
  function description(respuesta){
    fetch(`${url}item/${respuesta}/description`)
      .then((res) => res.json())
      .then((descripcion) => setDescripcion(descripcion))
      .catch((err)=> console.log(err));
      /* .then((item) => setItem(item)) */;

  }

  function busqueda(resultado) {
    fetch(`${url}api/${resultado}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(
        (err)=> console.log("holo"));;
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
