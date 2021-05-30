//R34c7
import React from "react";
import logo from "../../assets/img/logo.svg";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{ greeting }</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <br /><br /><br /><br />
          Learn React
        </a>
      </main>
    </>
  );
};

export default ItemListContainer;
