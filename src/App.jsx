import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navabr from "./components/Navabr";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navabr />
      <Hero />
    </div>
  );
}

export default App;
