import '../css/navigation.css';
import BackgroundPlanets from './BackgroundPlanets';



function Navigation(props, burger){

    function onXClick() {
        props.onClick();
    };

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
            <BackgroundPlanets/>

            {/* MENU HEADERS */}
            <h1 className='header'>Solar System</h1>
            <div className={`menu-wrapper ${props.burger? null : 'display-none'}`}>
                <button className='menu-close-x' onClick={onXClick}></button>
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