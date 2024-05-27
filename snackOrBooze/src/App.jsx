import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./FoodMenu";
import Item from "./FoodItem";
import NewItemForm from "./NewItemsForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }

    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }

    getDrinks();
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  // console.log("drinks", drinks);
  // console.log("snacks", snacks);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={ snacks } drinks={ drinks } />} />
            <Route path="/snacks" element={<Menu items={ snacks } menuType={ "food" }/>} />
            <Route path="/snacks/:id" element={<Item items={ snacks } cantFind="/snacks" />} />
            <Route path="/drinks" element={<Menu items={ drinks } menuType={ "drinks" } />} />
            <Route path="drinks/:id" element={<Item items={ drinks } cantFind="/drinks" />} />
            <Route path="/new" element={<NewItemForm addDrink={setDrinks} addSnack={setSnacks} />} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
