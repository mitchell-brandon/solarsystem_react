import React, { useState } from "react";
import "../css/base.css";
import Burger from "./Burger";
import Navigation from "./Navigation";
import ComponentRender from "./ComponentRender";

function App() {
  //STATE
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [radioValue, setRadioValue] = useState("masses");


  //TOGGLES MOBILE SCREEN MENU OVERLAY
  function burgerOnClick() { 
    setisMenuVisible(!isMenuVisible)
  }

  // GRABS THE VALUE OF THE CURRENT CHECKED RADIO BUTTON
  function onRadioChange(element) {
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
      <ComponentRender radioValue={radioValue}/>
    </div>
  )
}

export default App;
