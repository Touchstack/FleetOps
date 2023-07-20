import React from "react";
import "./App.css";
import  './index.css'
import PrimaryButton from "./assets/components/Buttons/PrimaryButton";
import OutlinedButton from "./assets/components/Buttons/OutlinedButton";
import NavBar from "./assets/components/Navbar/NavBar";
import Footer from "./assets/components/Footer/Footer"; 



export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <PrimaryButton buttonText={"Hi there"} />
      <OutlinedButton buttonText={"Driver"}/>
      
       <Footer />
    </div>
  );

}
