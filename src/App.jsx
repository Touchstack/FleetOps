import React from "react";
import "./App.css";
import  './index.css'
import PrimaryButton from "./assets/components/Buttons/PrimaryButton";
import OutlinedButton from "./assets/Components/Buttons/OutlinedButton";
import Footer from "./assets/components/Footer/Footer"; 


export default function App() {
  return (
    <div className="App">
      <PrimaryButton buttonText={"Hi there"} />
      <OutlinedButton buttonText={"Driver"}/>
      <OutlinedButton buttonText={"Contact Us"} />
      <Footer />
    </div>
  );

}
