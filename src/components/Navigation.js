import '../css/navigation.css';


function Navigation(){
    const navLinkAttributes = [
        'masses',
        'diameters',
        'distances',
        'tempratures',
        'days',
        'years',
        'moons',
    ]

    return(
        <div className='menu-container'>
            {/* ALL PLANETS IN BACKGROUND; CSS IN PLANETS.CSS */}
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
            {/* ALL PLANETS IN BACKROUND END HERE */}

            {/* MENU HEADERS */}
            <h1 className='header'>Solar System</h1>
            <div className='menu-wrapper display-none'>
                <button className='menu-close-x'></button>
                <ul className='menu'>
                {/* MENU LIST ITEMS BEING TEMPLATED */}
                {
                    navLinkAttributes.map(attribute =>
                        <li key={attribute + 1}>
                            <input type='radio' id={attribute} name='radio' value={attribute}/>
                            <label htmlFor={attribute} className='menu-link'>{attribute[0].toUpperCase() + attribute.slice(1)}</label>       
                        </li>
                    )
                }
                </ul>
            </div>
            <h3 className='header data-title'>Planetary Masses</h3>
            <p className='header data-metrics-title'> In Kilograms (10^24ks)</p>

        </div>
    )
};




export default Navigation;