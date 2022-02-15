import React, { useState } from 'react';
import '../css/base.css';
import Burger from './Burger';
import Navigation from './Navigation';
import Masses from './Masses';
import Diameters from './Diameters';
import Distances from './Distances';

function App() {
  const[isMenuVisible, setisMenuVisible] = useState(false);
  const[radioValue, setRadioValue] = useState('masses')

  function burgerOnClick(){
    setisMenuVisible(!isMenuVisible);
    console.log('this is clicked', isMenuVisible);
  }

  function onRadioChange(element) {
    setRadioValue(element.target.value);
    console.log(element.target.value)   
  }
  return (
    <div className='body-content'>
      <Burger onClick={burgerOnClick}/>
      <Navigation burger={isMenuVisible} onClick={burgerOnClick} onChange={onRadioChange}/>
      {radioValue === 'masses'?
        <Masses/>
        :
        radioValue === 'diameters'?
        <Diameters radioValue ={radioValue}/>
        :
        radioValue === 'distances'?
        <Distances/>
        :
        null
      }
      
      
    </div>
  );
}

export default App;
