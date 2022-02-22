
import solarJSON from "../solar_system.json";
import class_attributes from "../class_attributes.json";
import "../css/planets.css";

function Planets(props) {
  //GLOBAL VARIABLES
  let radioValue = props.radioValue // BEING PASSED FROM GRANDPARENT, APP.JS
  
  //FUNCTIONS
  let classSuffix =''
  function suffix(){
      if(radioValue === 'diameters') {
        classSuffix = class_attributes[1].suffix
      } else if (radioValue ==='distances'){
        classSuffix = class_attributes[2].suffix
      } else if (radioValue ==='temperatures'){
        classSuffix = class_attributes[3].suffix
      }
      else if (radioValue ==='days'){
        classSuffix = class_attributes[4].suffix
      } else if (radioValue ==='years'){
        classSuffix = class_attributes[5].suffix
      } else {
        classSuffix = ''
      }
      console.log(classSuffix)
    }
  suffix()


  function planetsJSX(object) { // renders planets, even saturn with all its beauty
    return object.value === "saturn" ? (
      <div className={`planet ${object.value} ${object.value + classSuffix}`}>
        <div className="saturn-ring"></div>
      </div>
    ) : (
      <div
        className={
          radioValue === 'masses'?
          `planet ${object.value}`
          :
          `planet ${object.value} ${object.value + classSuffix}`
        }

      ></div>
    );

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
  filterPlanets();
  
  function renderMetric(object){ //conditionally renders planetary mertrics. diameter or mass
    return radioValue === 'diameters' ?
    <p>{object.diameter.toLocaleString()}</p>
    :
    <p>{object.mass.toLocaleString()}</p>
  }
  return (
    <div className="planets-container">
      {
      planets.map((object) => (
        <div className={`planet-container ${object.value + classSuffix + "-container"}`} key={object.id}>
          <div className="planet-wrapper">{planetsJSX(object)}</div>
          <p>{object.name}</p>
          {renderMetric(object)}
        </div>
      )) 
      }
    </div>
  );
}

export default Planets;
