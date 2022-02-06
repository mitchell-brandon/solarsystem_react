import '../css/backgroundplanets.css';
function BackgroundPlanets (){


    return(
        <div className='planets-container'>
            <div className='sun planet'></div>
            <div className='mercury planet '> </div>
            <div className='venus planet'> </div>
            <div className='earth planet'> </div>
            <div className='mars planet'> </div>
            <div className='jupiter planet'> </div>
            <div className='saturn planet'>
                <div className='saturn-ring'> </div>
            </div>
            <div className='uranus box-shadow planet'> </div>
            <div className='neptune box-shadow planet'> </div>
        </div>
    )
};

export default BackgroundPlanets;