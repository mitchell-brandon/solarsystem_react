import MassDiam from "./MassDiam";
import Distances from "./Distances";
import Temperatures from "./Temperatures";
import Days from "./Days";
import Years from "./Years";
import Moons from "./Moons";
import solarJSON from "../solar_system.json";

function GraphingComponents(props) {
//STATE

//GLOBAL VARIABLES
  let radioValue = props.radioValue;


  //FUNCTIONS
  function rangeCounter(values){ //THIS IS A REUSABLE FUNCTION BEING INVOKED IN GRAPH.JS (GRAND CHILD COMP)
    let tempGraphValues = []     // IT TAKES MYRIAD ARGUMENTS. PLEASE READ NOTES IN GRAPH.JS
    const horizontalBar = 'data-division'
    for (let value of values){
      while (value[0] < value[1]){
          tempGraphValues.push(value[0]+= value[2])
      }
      tempGraphValues.push(horizontalBar)
    }
    tempGraphValues.sort(function(a, b){return b - a});
    return tempGraphValues
  }

  let planets =[]
  function filterPlanets() { // FILTERS SOLARJSON AND CONITIONALLY RENDERS PLANETS BASED ON RADIO VALUE
    for(let object of solarJSON){
      planets.push(object)
    }
    planets.pop()
    if(radioValue === 'masses' || radioValue === 'diameters'
      || radioValue ==='distances' || radioValue === 'moons'
      || radioValue=== 'years'){
      planets.shift()
    } else {
      return
    }
  }
  filterPlanets()


  function renderComponents (component) { //DETERMINES CURRENT COMPONENT RENDERING
    if (radioValue === 'diameters') {
        component = <MassDiam radioValue={radioValue} planets={planets}/>
    } else if (radioValue === 'masses'){
        component = <MassDiam radioValue={radioValue} planets={planets}/>
    } else if (radioValue === 'distances'){
        component = <Distances radioValue={radioValue} planets={planets}/>
    } else if (radioValue === 'temperatures'){
        component = <Temperatures radioValue={radioValue} rangeCounter={rangeCounter} planets={planets}/>
    } else if (radioValue === 'days'){
      component = <Days radioValue={radioValue} rangeCounter={rangeCounter} planets={planets}/>
    } else if (radioValue === 'years'){
      component = <Years radioValue={radioValue} rangeCounter={rangeCounter} planets={planets}/>
    } else if (radioValue === 'moons') {
      component = <Moons radioValue={radioValue} planets={planets}/>
    } else {
      component = ''
    }
    return component
  }
//FUNCTION INVOCATIONS
  return (
    <div>
        {renderComponents()}
    </div>
  );
}

export default GraphingComponents;
