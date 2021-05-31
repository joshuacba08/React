//R34c7
import React from "react";

//Custom Components
import ItemList from "../functional/ItemList";
import logo from "../../assets/img/logo.svg";
import "./ItemListContainer.css";

const ItemListContainer = ( props ) => {
  return (
    <>
      <main className="App-header">
        <p>
          <code>{props.greeting}</code>
        </p>
        <ItemList props />
        <br />
        <br />
        <br />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
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

export default ItemListContainer;
