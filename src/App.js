import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

// import Quote from "./Quote";
import Travel from "./Travel";
import Wild from "./Wild";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Travels</h1>
        </header>
        {/* <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        /> */}
        <Travel
          destination="British Colombia"
          country="Canada"
          photo="https://cdn.wallpapersafari.com/60/11/ZINfm8.jpg"
          distance="8840km"
        />
          <Travel
          destination="Somewhere over the rainbow"
          country="Hearth"
          photo="https://cdn.allwallpaper.in/wallpapers/1920x1080/14058/nature-china-travel-1920x1080-wallpaper.jpg"
          distance="15000km"
        />
        <Wild />
        <MyTimer />
      </div>
    );
  }
}

export default App;