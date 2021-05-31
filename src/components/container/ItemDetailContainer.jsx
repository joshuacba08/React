//R34c7
import React from "react";

//Custom Components
import ItemDetail from "../functional/ItemDetail";
import "./ItemListContainer.css";

const ItemDetailContainer = ({ greeting, itemId }) => {
  return (
    <>
      <main className="App-header">
        <p>
          <code>{greeting}</code>
        </p>
        <ItemDetail id={itemId} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </>
  );
};

export default ItemDetailContainer;
