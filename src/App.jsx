import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import { counterContext } from "./Context/context"; 
import './Components/lang'

function App() {
  const [count, setCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [cartItems, setCartItems] = useState([]); 


  return (
    <>
      <counterContext.Provider
        value={{ count, setCount, searchTerm, setSearchTerm,cartItems,setCartItems }}
      >
        <Navbar />
        <Section />
      </counterContext.Provider>
    </>
  );
}

export default App;
