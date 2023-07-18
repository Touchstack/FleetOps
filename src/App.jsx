import React from "react";
import "./App.css";
import  './index.css'
import PrimaryButton from "./assets/Components/Buttons/PrimaryButton";
import OutlinedButton from "./assets/Components/Buttons/OutlinedButton";


export default function App() {
  return (
    <div className="App">
      <h1 className="text-xl font-Thin">Hello world</h1>
      <PrimaryButton buttonText={"Hi there"} />
      <OutlinedButton buttonText={"Driver"}/>
    </div>
  );
}
