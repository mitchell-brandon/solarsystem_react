import MassDiam from "./MassDiam";
import Distances from "./Distances";
import Temperatures from "./Temperatures";
import Days from "./Days";
import Years from "./Years";
import Moons from "./Moons";
import solarJSON from "../solar_system.json";

function ComponentRender(props) {

  let radioValue = props.radioValue;


  //THIS IS A REUSABLE FUNCTION BEING INVOKED IN GRAPH.JS, THE GRAND CHILD COMPONENT
  // IT TAKES NUMERICAL ARGUMENTS. PLEASE READ NOTES IN GRAPH.JS
  function rangeCounter(values){ 
    let tempGraphValues = [];
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

  // QUERIES solarJSON AND CONITIONALLY RENDERS PLANETS BASED ON RADIO VALUE
  let planets =[];
  function filterPlanets() {
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

  //DETERMINES CURRENT COMPONENT RENDERING
  function renderComponents (component) {
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


  return (
    renderComponents()
  )
}

export default ComponentRender;
