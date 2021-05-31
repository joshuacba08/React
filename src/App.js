//R34c7
import React from "react";
import "./App.css";
import "./assets/css/fonts.css";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import NavBar from "./components/dumb/NavBar";
import AppFooter from "./components/dumb/AppFooter";
import MainContainer from "./components/container/MainContainer";
import ItemContext from "./components/functional/ItemContext";

window.claseID = "Clase 7";
window.claseNombre = "Consumiendo APIs";
window.brandName = "TiendaReactX";
window.productID = 0;

function App() {
  const productID = 0;
  return (
    <>
      <ItemContext.Provider value={productID}>
        <div className="App content-container">
          <NavBar brandname={window.brandName} />
          <MainContainer />
          <AppFooter />
        </div>
      </ItemContext.Provider>
    </>
  );
}

export default App;
