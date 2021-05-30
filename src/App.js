//R34c7
import React from "react";
import "./App.css";
import "./assets/css/fonts.css";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import NavBar from "./components/dumb/NavBar";
import AppFooter from "./components/dumb/AppFooter";
import ItemListContainer from "./components/dumb/ItemListContainer";

window.claseID = "Clase 5";
window.claseNombre = "Componentes II";
window.brandName = "TiendaReactX";

function App() {
  return (
    <>
      <div className="App content-container">
        <NavBar brandname={window.brandName} />
        <ItemListContainer greeting = "Mi Catálogo" />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
