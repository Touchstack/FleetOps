import React from "react";
import "./App.css";
import  './index.css'
import PrimaryButton from "./assets/Components/Buttons/PrimaryButton";


export default function App() {
  return (
    <div className="App">
      <h1 className="text-xl">Hello world</h1>
      <PrimaryButton buttonText={"Hi there"} />
    </div>
  );
}
