import '../css/navigation.css';



function Navigation(props){

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

            {/* MENU HEADERS */}
            <h1 className='header'>Solar System</h1>
            <div className={`menu-wrapper ${props.burger? null : 'display-none'}`}>
                <button className='menu-close-x' onClick={onXClick}></button>
                <ul className='menu'>

                {/* MENU LIST ITEMS TEMPLATED */}
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
            <div className='subheader-wrapper'>
                <h3 className='header'>Planetary Masses</h3>
                <p className='header'> In Kilograms (10^24kg)</p>
            </div>
        </div>
    )
};




export default Navigation;