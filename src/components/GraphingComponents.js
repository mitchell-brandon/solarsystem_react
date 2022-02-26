import MassDiam from "./MassDiam";
import Distances from "./Distances";
import Temperatures from "./Temperatures";
import Days from "./Days";
import Years from "./Years";

function GraphingComponents(props) {
//STATE

//GLOBAL VARIABLES
  let radioValue = props.radioValue;

  function rangeCounter(values){ //THIS IS A REUSABLE FUNCTION BEING INVOKED IN GRAPH.JS (GRAND CHILD COMP)
    let tempGraphValues = []     // IT TAKES MYRIAD ARGUMENTS. PLEASE READ NOTES IN GRAPH.JS
    for (let value of values){
      while (value[0] < value[1]){
          tempGraphValues.push(value[0]+= value[2])
      }
    }
    tempGraphValues.sort(function(a, b){return b - a});
    console.log(tempGraphValues)
    return tempGraphValues
}

  function renderComponents (component) { //DETERMINES CURRENT COMPONENT RENDERING
    if (radioValue === 'diameters') {
        component = <MassDiam radioValue={radioValue} />
    } else if (radioValue === 'masses'){
        component = <MassDiam radioValue={radioValue}/>
    } else if (radioValue === 'distances'){
        component = <Distances radioValue={radioValue}/>
    } else if (radioValue === 'temperatures'){
        component = <Temperatures radioValue={radioValue} rangeCounter={rangeCounter}/>
    } else if (radioValue === 'days'){
      component = <Days radioValue={radioValue} rangeCounter={rangeCounter}/>
    } else if (radioValue === 'years'){
      component = <Years radioValue={radioValue} rangeCounter={rangeCounter}/>
    } else {
      component = ''
    }
    return component
  }
//FUNCTION INVOCATIONS
  return (
    <div>
        {renderComponents()};
    </div>
  );
}

export default GraphingComponents;
