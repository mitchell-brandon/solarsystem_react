import '../css/burger.css';
import React, { useState } from 'react';


function Burger (props) {
    
    function burgerOnClick (){
        props.onClick()
    }

    return (
        <div className='burger-nav-container' onClick={burgerOnClick}>
            <button className='burger-bar-wrapper'>
                <div className='burger-bar'></div>
                <div className='burger-bar'></div>
                <div className='burger-bar'></div>
            </button>
        </div>
    );
};
export default Burger;