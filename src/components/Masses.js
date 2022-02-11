import '../css/masses.css';


function Masses() {
    return(
        <div className='masses-container'>
            <div className='sun'>

            {/* planets container */}
                <div className='planets-container'>
                    <div className='planet-container'>
                        <div className='planet-wrapper'>
                            <div className='planet mercury'></div>
                        </div>
                        <p> Mercury</p>
                        <p>.033</p>
                    </div>
                    <div className='planet-container'>
                        <div className='planet-wrapper'>
                            <div className='planet venus'></div>
                        </div>
                        <p>Venus</p>
                        <p>4.87</p>
                    </div>
                    <div className='planet-container'>
                        <div className='planet-wrapper'>
                            <div className='planet earth'></div>
                        </div>
                        <p>Earth</p>
                        <p>5.97</p>
                    </div>
                    <div className='planet-container'>
                        <div className='planet-wrapper'>
                            <div className='planet mars'></div>
                        </div>
                        <p> Mars</p>
                        <p>.066</p>
                    </div>
                    <div className='planet-container'>
                        <div className='planet-wrapper'>
                            <div className='planet jupiter'></div>
                        </div>
                        <p>Jupiter</p>
                        <p>1,898</p>
                    </div>
                    <div className='planet-container'>
                        <div className='planet-wrapper'>
                            <div className='planet saturn'>
                                <div className='saturn-ring'></div>
                            </div>
                        </div>
                        <p>Saturn</p>
                        <p>568</p>
                    </div>
                    <div className='planet-container'>
                        <div className='planet-wrapper'>
                            <div className='planet uranus'></div>
                        </div>
                        <p>Uranus</p>
                        <p>86.8</p>
                    </div>
                    <div className='planet-container'>
                        <div className='planet-wrapper'>
                            <div className='planet neptune'></div>
                        </div>
                        <p>Neptune</p>
                        <p>102</p>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
};
export default Masses;