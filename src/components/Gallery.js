import { useEffect, useState } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import Detail from "./Detail";
function Gallery(props) {
  const [carros, setCarrosList] = useState([]);
  const [carrosDetail, setCarroDetail] = useState({});
  useEffect(() => {
    let URL = "https://raw.githubusercontent.com/ahernandezo2/parcial1Web/master/src/datos.json";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setCarrosList(data);
      });
  }, []);

  const handleCafeDetail = (carro) => {
    setCarroDetail(carro);
  }


  return (
    <div>
    <Row>
    <Col width="50%">
      
      <div>
        {carros.map((carro) => (
          
          <Card >
          <div key={carro.id}>
            <h3>{carro.nombre}</h3>
            <p>Nombre: {carro.carModel}</p>
            <p>Marca: {carro.carMaker}</p>
          </div>
          </Card>
        ))}
      </div>
      </Col>
      
      </Row>
    </div>
  );
}

export default Gallery;
