import '../css/planettemplate1.css';
function PlanetTemplate1 (props){

    console.log(props.radioValue);

return(
    <div>
        {props.radioValue === 'diameters'? 
        <div className='sun sun-diam'>

            <div className='planet-template1-content-container'>
            <div className='sun-p-wrapper'>
                    <p className='sun-p'>Sun</p>
                    <p className='sun-p'>1,988,500</p>
                </div> 

            <div className='planets-container'>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet mercury mercury-diam'></div>
                    </div>
                    <p>Mercury</p>
                    <p>.033</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet venus venus-diam'></div>
                    </div>
                    <p>Venus</p>
                    <p>4.87</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet earth earth-diam'></div>
                    </div>
                    <p>Earth</p>
                    <p>5.97</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet mars mars-diam'></div>
                    </div>
                    <p> Mars</p>
                    <p>.066</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet jupiter jupiter-diam'></div>
                    </div>
                    <p>Jupiter</p>
                    <p>1,898</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet saturn saturn-diam'>
                            <div className='saturn-ring'></div>
                        </div>
                    </div>
                    <p>Saturn</p>
                    <p>568</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet uranus uranus-diam'></div>
                    </div>
                    <p>Uranus</p>
                    <p>86.8</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet neptune neptune-diam'></div>
                    </div>
                    <p>Neptune</p>
                    <p>102</p>
                </div>

            </div>
            </div>
       </div>
        :
        <div className='sun sun-mass'>
            <div className='planet-template1-content-container'> 
            <div className='sun-p-wrapper'>
                    <p className='sun-p'>Sun</p>
                    <p className='sun-p'>1,988,500</p>
                </div>
            <div className='planets-container'>

                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet mercury mercury-mass'></div>
                    </div>
                    <p>Mercury</p>
                    <p>.033</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet venus venus-mass'></div>
                    </div>
                    <p>Venus</p>
                    <p>4.87</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet earth earth-mass'></div>
                    </div>
                    <p>Earth</p>
                    <p>5.97</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet mars mars-mass'></div>
                    </div>
                    <p> Mars</p>
                    <p>.066</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet jupiter jupiter-mass'></div>
                    </div>
                    <p>Jupiter</p>
                    <p>1,898</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet saturn saturn-mass'>
                            <div className='saturn-ring'></div>
                        </div>
                    </div>
                    <p>Saturn</p>
                    <p>568</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet uranus uranus-mass'></div>
                    </div>
                    <p>Uranus</p>
                    <p>86.8</p>
                </div>
                <div className='planet-container'>
                    <div className='planet-wrapper'>
                        <div className='planet neptune neptune-mass'></div>
                    </div>
                    <p>Neptune</p>
                    <p>102</p>
                </div>

            </div>
            </div>
        </div>
        }
    </div>
    )
};
export default PlanetTemplate1