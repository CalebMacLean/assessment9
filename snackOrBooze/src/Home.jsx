import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import Menu from "./FoodMenu";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <Menu items={ snacks } menuType={"food"}/>
      <Menu items={ drinks } menuType={"drink"}/>
    </section>
  );
}

export default Home;
