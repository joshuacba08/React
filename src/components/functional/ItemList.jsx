//R34c7
import React from "react";

//Custom Components
import Item from "../presentational/Item";
import productList from "../container/productos.js";

import "./ItemList.css";

const ItemList = () => {
  const products = productList;
  return (
    <div className="product-list-container">
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.itemID}>
                <Item
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  stock={product.stock}
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemList;
