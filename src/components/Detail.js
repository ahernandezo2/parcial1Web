import React from "react";
import { Card } from "react-bootstrap";
function Detail(props) {
  let cafe = props.cafe;
  return (
    <div>
      <Card>
        <Card.Title>Detalle</Card.Title>
        <Card.Body>
          <Card.Text>
            <p>Nombre: {} </p>
            <p>Tipo: </p>
            <p>Región: </p>
            <p>Descripción: </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Detail;
