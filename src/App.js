//R34c7
import React from "react";
import "./App.css";
import "./assets/css/fonts.css";

//BootStrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import NavBar from "./components/dumb/NavBar";
import ReactDefaultGreeting from "./components/dumb/ReactDefaultGreeting";
import AppFooter from "./components/dumb/AppFooter";

window.claseID = "Clase 3";
window.claseNombre = "JSX y Transpiling";
window.brandName = "TiendaReactX";

function App() {
  return (
    <>
      <div className="App content-container">
        <NavBar brandname={window.brandName} />
        <ReactDefaultGreeting />
        <AppFooter />
      </div>
    </>
  );
}

export default App;
