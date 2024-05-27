import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();
  const navigate = useNavigate();

  let item = items.find(i => i.id === id);
  
  useEffect(() => {
    if (!item) navigate(cantFind);
  }, [item, navigate, cantFind])

  return (
    <section>
      {item ? (
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {item.name}
            </CardTitle>
            <CardText className="font-italic">{item.description}</CardText>
            <p>
              <b>Recipe:</b> {item.recipe}
            </p>
            <p>
              <b>Serve:</b> {item.serve}
            </p>
          </CardBody>
        </Card>
      ) : (
        <p>Item not found.</p>
      )}
    </section>
  );
}

export default FoodItem;
