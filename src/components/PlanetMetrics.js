
function PlanetMetrics(props){
    const planet = props.planet;
    let radioValue = props.radioValue;


    //CONDITIONALLY RENDERS ALL PLANETS METRIC <p> metric data</p>.
    // IE: NUMERICAL VALUE TAGS IN KILOS, AU, CELSIUS, ETC
    function renderMetric(planet, pTag){
        if(radioValue === 'diameters'){
            pTag = <p>{planet.diameter.toLocaleString()}</p>
        } else if (radioValue === 'masses') {
            pTag = <p>{planet.mass.toLocaleString()}</p>
        } else if (radioValue === 'distances'){
            pTag = <p>{planet.au.toLocaleString()}</p>
        } else if(radioValue === 'temperatures') {
            pTag = <p>{planet.meanTemperature.toLocaleString()}</p>
        } else if (radioValue === 'days'){
            pTag = <p>{planet.rotationPeriod.toLocaleString()}</p>
        }else if (radioValue === 'years') {
            pTag = <p>{planet.orbitalPeriod.toLocaleString()}</p>
        } else if (radioValue === 'moons') {
            pTag = <p>{planet.numberOfMoons}</p>
        } else {
            pTag = 'nothing'
        }
        return pTag
    }

    //CONDITIONALY RENDERS THE MOONS PLANETARY JSX BLOCK
    // OR THE REGUALR PLANETARY BLOCK
    function renderMetricJSX(planet){
        let jsx = '';
        let planetMetric = '';

        if (radioValue === 'moons'){
            jsx = <div className='moon-planet-p'>
                    <p>{planet.name}</p>
                    {renderMetric(planet)}
                </div>
            planetMetric = ''
        } else {
            jsx = <p>{planet.name}</p>
            planetMetric = renderMetric(planet)
        }
        return [jsx, planetMetric]
    }




    return(
        renderMetricJSX(planet) 
    )
}
export default PlanetMetrics;