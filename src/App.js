import "./style.css";
import React from "react";
import Article from "./Article";
import NavBar from "./NavBar";
import ForumNetwork from "./ForumNetwork";

function App() {
  return (
    <div id="main-wraper">
      <header className = "App">
        <ForumNetwork> </ForumNetwork>
        <img src = "https://www.thetruthaboutcars.com/wp-content/themes/ttac-theme/images/logo-ttac-mobile.svg" alt ="" height = "30" width = "161"/>
        
        <Article> </Article>
        <Article> </Article>
        <Article> </Article>

        <NavBar></NavBar>
        <NavBar></NavBar>
        <NavBar></NavBar>
        
      </header>
    </div>
  );
}

export default App;
