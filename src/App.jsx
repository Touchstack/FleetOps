import React from "react";
import "./App.css";
import  './index.css'
import PrimaryButton from "./assets/Components/Buttons/PrimaryButton";
import OutlinedButton from "./assets/Components/Buttons/OutlinedButton";


export default function App() {
  return (
    <div className="App">
      <PrimaryButton buttonText={"Hi there"} />
      <OutlinedButton buttonText={"Driver"}/>
    </div>
  );
}
