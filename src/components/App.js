import React, { useState } from 'react';
import '../css/base.css';
import Burger from './Burger';
import Navigation from './Navigation';
import Masses from './Masses';

function App() {
  const[isMenuVisible, setisMenuVisible] = useState(false);

  function burgerOnClick(){
    setisMenuVisible(!isMenuVisible);
    console.log('this is clicked', isMenuVisible);
  }
  return (
    <div className='body-content'>
      <Burger onClick={burgerOnClick}/>
      <Navigation burger={isMenuVisible} onClick={burgerOnClick}/>
      <Masses/>
    </div>
  );
}

export default App;
