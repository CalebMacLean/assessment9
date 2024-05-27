import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

function FoodMenu({ items, menuType }) {
  let snackOrDrink = menuType === 'food' ? "Food Menu" : "Drink Menu";
  let BASE_URL = menuType === 'food' ? "/snacks" : "/drinks";

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snackOrDrink}
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {items.map(item => (
              <ListGroupItem key={item.id}>
                <Link to={`${BASE_URL}/${item.id}`}>{item.name}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodMenu;
