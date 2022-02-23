
import solarJSON from "../solar_system.json";
import class_attributes from "../class_attributes.json";
import "../css/planets.css";

function Planets(props) {
  //GLOBAL VARIABLES
  let radioValue = props.radioValue // BEING PASSED FROM GRANDPARENT, APP.JS
  
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
      }
      else if (radioValue ==='days'){
        classSuffix = class_attributes[4].suffix
        flexedPlanetContainer ='flexed-planet-container'
      } else if (radioValue ==='years'){
        classSuffix = class_attributes[5].suffix
        flexedPlanetContainer ='flexed-planet-container'
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

  let planets =[]
  function filterPlanets() { // FILTERS SOLARJSON AND CONITIONALLY RENDERS PLANETS BASED ON RADIO VALUE
    for(let object of solarJSON){
      planets.push(object)
    }
    planets.pop()
    if(radioValue === 'masses' || radioValue === 'diameters'
      || radioValue ==='distances' || radioValue ==='moons') {
      planets.shift()
    } else {
      return
    }
  }
  filterPlanets()
  
  function renderMetric(planet, pTag){ //conditionally renders planetary mertrics. diameter or mass
    if(radioValue === 'diameters'){
      pTag = <p>{planet.diameter.toLocaleString()}</p>
    } else if (radioValue === 'masses') {
      pTag = <p>{planet.mass.toLocaleString()}</p>
    } else if (radioValue === 'distances'){
      pTag = <p>{planet.au}</p>
    } else {
      pTag = ''
    }
    return pTag
  }

  return (
    <div className="planets-container">
      {
      planets.map((planet) => (
        <div className={`planet-container ${planet.value + classSuffix + "-container"}
        ${flexedPlanetContainer}`} key={planet.id}>

          <div className="planet-wrapper">{planetsJSX(planet)}</div>
          <p>{planet.name}</p>
          {renderMetric(planet)}

        </div>
      )) 
      }
    </div>
  )
}

export default Planets;
