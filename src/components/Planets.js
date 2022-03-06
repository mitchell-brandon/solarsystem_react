

import class_attributes from "../class_attributes.json";
import "../css/planets.css";
import PlanetMetrics from "./PlanetMetrics";

function Planets(props) {
  let radioValue = props.radioValue; // BEING PASSED FROM GREAT GRANDPARENT, App.JS
  const planets = props.planets; // BEING PASSED FROM GRANDPARENT, ComponentRender.JS
  

  //THIS FUNCTION CONDITIONALLY RENDERS CLASS NAMES.
  let classSuffix ='';
  let flexedPlanetContainer = '';
  function suffix(){
      if(radioValue === 'diameters') { 
        classSuffix = class_attributes[1].suffix;
      } else if (radioValue ==='distances'){
        classSuffix = class_attributes[2].suffix;
        flexedPlanetContainer ='flexed-planet-container';
      } else if (radioValue ==='temperatures'){
        classSuffix = class_attributes[3].suffix
        flexedPlanetContainer ='flexed-planet-container';
      } else if (radioValue ==='days'){
        classSuffix = class_attributes[4].suffix
        flexedPlanetContainer ='flexed-planet-container';
      } else if (radioValue ==='years'){
        classSuffix = class_attributes[5].suffix
        flexedPlanetContainer ='flexed-planet-container';
      } else if (radioValue ==='moons'){
        classSuffix = class_attributes[6].suffix;
      } else {
        classSuffix = '';
        flexedPlanetContainer ='';
      }
    }
  suffix()

  // RENDERS ALL PLANETS, INLUDES UNIQUE RENDERING FOR SATURN
  function renderPlanets(planet) {
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
  

  return (
    <div className={radioValue === 'moons'? "moon-planets-container" : "planets-container"}>
      {
        planets.map((planet) => (
          <div className={`planet-container ${planet.value + classSuffix + "-container"}
          ${flexedPlanetContainer}`} key={planet.id}>
            
            <div className="planet-wrapper">{renderPlanets(planet)}</div>
            <PlanetMetrics planet={planet} radioValue={radioValue}/>
      
          </div>
        )) 
      }
    </div>
  )
}

export default Planets;
