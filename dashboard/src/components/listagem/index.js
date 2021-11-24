import React, { useEffect, useState } from "react";
import axios from "axios";
import Item from "../item";

const Listagem = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    axios
      .get("/json/cursos.json")
      .then((response) => {
        setCursos(response.data.cursos);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
    {cursos.length > 0 &&
      cursos.map(curso => {
        return (
          <Item curso={curso} />
        )
      })
    }
     
    </>
  );
};

export default Listagem;
