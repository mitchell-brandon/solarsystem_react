

import class_attributes from "../class_attributes.json";
import "../css/planets.css";

function Planets(props) {
  //GLOBAL VARIABLES
  let radioValue = props.radioValue // BEING PASSED FROM GRANDPARENT, APP.JS
  const planets = props.planets
  
  //FUNCTIONS
  let classSuffix =''
  let flexedPlanetContainer = ''
  function suffix(){
      if(radioValue === 'diameters') { //THIS FUNCTION CONDITIONALLY RENDERS SOME CLASS NAMES.
        classSuffix = class_attributes[1].suffix
      } else if (radioValue ==='distances'){
        classSuffix = class_attributes[2].suffix
        flexedPlanetContainer ='flexed-planet-container'
      } else if (radioValue ==='temperatures'){
        classSuffix = class_attributes[3].suffix
        flexedPlanetContainer ='flexed-planet-container'
      } else if (radioValue ==='days'){
        classSuffix = class_attributes[4].suffix
        flexedPlanetContainer ='flexed-planet-container'
      } else if (radioValue ==='years'){
        classSuffix = class_attributes[5].suffix
        flexedPlanetContainer ='flexed-planet-container'
      } else if (radioValue ==='moons'){
        classSuffix = class_attributes[6].suffix
      } else {
        classSuffix = ''
        flexedPlanetContainer =''
      }
      console.log(flexedPlanetContainer)
    }
  suffix()


  function planetsJSX(planet) { // renders planets, even saturn with all its beauty
    return planet.value === "saturn" ? (
      <div className={`planet ${planet.value} ${planet.value + classSuffix}`}>
        <div className="saturn-ring"></div>
      </div>
    ) : (
      <div
        className={
          radioValue === 'masses'?
          `planet ${planet.value}`
          :
          `planet ${planet.value} ${planet.value + classSuffix}`
        }

      ></div>
    )

  }
  
  function renderMetric(planet, pTag){ //conditionally renders planetary mertrics. diameter or mass
    if(radioValue === 'diameters'){
      pTag = <p>{planet.diameter.toLocaleString()}</p>
    } else if (radioValue === 'masses') {
      pTag = <p>{planet.mass.toLocaleString()}</p>
    } else if (radioValue === 'distances'){
      pTag = <p>{planet.au}</p>
    } else if(radioValue === 'temperatures') {
      pTag = <p>{planet.meanTemperature}</p>
    } else if (radioValue === 'days'){
      pTag = <p>{planet.rotationPeriod}</p>
    }else if (radioValue === 'years') {
      pTag = <p>{planet.orbitalPeriod}</p>
    } else if (radioValue === 'moons') {
      pTag = <p>{planet.numberOfMoons}</p>
    } else {
      pTag = 'nothing'
    }
    return pTag
  }

    function moonsPlanets(planet){ //CONDITIONALY RENDERS WHICH PLANETS ARE RENDERED
      let jsx = ''                 // DEPENDING ON RADIO VALUE
      if (radioValue === 'moons'){
        jsx = <div className='moon-planet-p'>
                <p>{planet.name}</p>
                {renderMetric(planet)}
              </div>
      } else {
        jsx = <p>{planet.name}</p>
              // {renderMetric(planet)}
      }
      return jsx
    }

  return (
    <div className={radioValue === 'moons'? "moon-planets-container" : "planets-container"}>
      {
      planets.map((planet) => (
        <div className={`planet-container ${planet.value + classSuffix + "-container"}
        ${flexedPlanetContainer}`} key={planet.id}>

          <div className="planet-wrapper">{planetsJSX(planet)}</div>

            {moonsPlanets(planet)}
            {radioValue !== 'moons'?
              renderMetric(planet):
              ''
            }
          
        </div>
      )) 
      }
    </div>
  )
}

export default Planets;
