import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Navbar from "./features/Navbar";
import Container from "./features/Container";
import Home from "./features/Home";
import GlobalStyle from "./features/GlobalStyle";
import AddForm from "./features/Product/AddForm";
import UpdateForm from "./features/Product/UpdateForm";

let currentProductId = 9

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await axios.get(
        "https://run.mocky.io/v3/a091c6f3-dd51-43c8-973a-c7b6fd07a84a"
      );
      console.log("products ---> ", products);
      setProducts(products.data);
    };
    getProducts();
  }, []);

  const addProduct= (product) =>{
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Switch>
            <Route path="/create-product">
              <AddForm addProduct={addProduct} />
            </Route>
            <Route path="/">
            <Home products={products} />
            </Route>
            <Route path="/update-product/:id">
              <UpdateForm />
            </Route>
          </Switch>
        ) : (
          <div>Loading products...</div>
        )}
      </Container>
    </>
  );
}

export default App;
