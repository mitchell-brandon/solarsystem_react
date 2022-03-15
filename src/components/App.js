import React, { useState, useEffect } from "react";
import "../css/base.css";
import Burger from "./Burger";
import Navigation from "./Navigation";
import ComponentRender from "./ComponentRender";

function App() {
  let defaultRadioValue = window.localStorage.getItem('radioValue');
  if (!defaultRadioValue) {
    defaultRadioValue = 'masses';
  }
  //STATE
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [radioValue, setRadioValue] = useState(defaultRadioValue);

  //TOGGLES MOBILE SCREEN MENU OVERLAY
  function burgerOnClick() { 
    setisMenuVisible(!isMenuVisible)
  }

  // GRABS THE VALUE OF THE CURRENT CHECKED RADIO BUTTON
  function onRadioChange(element) {
    setRadioValue(element.target.value)
  }


  useEffect(() => {
    window.localStorage.setItem('radioValue', radioValue);
  },[radioValue]);

  return (
    <div className="body-content">
      <Burger onClick={burgerOnClick} />
      <Navigation
        burger={isMenuVisible}
        onClick={burgerOnClick}
        onChange={onRadioChange}
        radioValue ={radioValue}
        defaultRadioValue={defaultRadioValue}
      />
      <ComponentRender radioValue={radioValue}/>
    </div>
  )
}

export default App;
