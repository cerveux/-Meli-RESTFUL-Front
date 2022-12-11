import { useState } from "react";

export default function useApi()  {

    const [url, setUrl] = useState(null);
    const [descripcion, setDescripcion] = useState(null);
    const [item, setItem] = useState(null);


  
    const condUrl1 = "https://meli-restful-api-cerveux.up.railway.app/";
    const condUrl2 = "https://meli-restful-api-cerveux.onrender.com/";

  const definirServidor = async () => {
    fetch(condUrl2)
      .then((res) => res.json())
      .catch((err) => console.error(err));

    fetch(condUrl1)
      .then((res) => res.json())
      .then((item) => item.status)
      .then((item) => item === "server running" && setUrl(condUrl1))
      .catch((err) => {
        console.error(err);
        setUrl(condUrl2);
      });

      console.log(url);


  };

  function description(respuesta){
    fetch(`${url}item/${respuesta}/description`)
      .then((res) => res.json())
      .then((descripcion) => setDescripcion(descripcion))
      .catch((err)=> console.log(err));
      ;

  }

  function infoItem(respuesta){
    fetch(`${url}item/${respuesta}`)
      .then((res) => res.json())
      .then((item) => setItem(item))
      .catch((err)=> console.log(err));
      description(respuesta);
  }
  

  return { url, item, descripcion, definirServidor, infoItem };
};

