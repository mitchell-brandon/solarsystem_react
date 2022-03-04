import React, { useState } from "react";
import "../css/base.css";
import Burger from "./Burger";
import Navigation from "./Navigation";
import GraphingComponents from "./GraphingComponents";

function App() {
  //STATE
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [radioValue, setRadioValue] = useState("masses");
//FUNCTIONS
  function burgerOnClick() { //TOGGLES MOBILE SCREEN SIZE MENU OVERLAY
    setisMenuVisible(!isMenuVisible)
    console.log("this is clicked", isMenuVisible)
  }

  function onRadioChange(element) { // GRABS THE VALUE OF THE CURRENT CHECKED RADIO BUTTON
    setRadioValue(element.target.value)
  }

  return (
    <div className="body-content">
      <Burger onClick={burgerOnClick} />
      <Navigation
        burger={isMenuVisible}
        onClick={burgerOnClick}
        onChange={onRadioChange}
        radioValue ={radioValue}
      />
      <GraphingComponents radioValue={radioValue}/>
    </div>
  )
}

export default App;
